import { getAuth } from 'firebase/auth'
import { getDatabase, ref, get, push, onValue, query, set } from 'firebase/database';
import base64 from 'base-64';
import _ from 'lodash';

const TIPO_ENVIADA = 'ENVIADA';
const TIPO_RECEBIDA = 'RECEBIDA';

class ConversasService {

    async enviarMensagem(mensagem, emailContato) {
        try {
            const auth = getAuth();
            const usuarioLogado = auth.currentUser;
            
            const emailUsuarioBase64 = base64.encode(usuarioLogado.email);
            const emailContatoBase64 = base64.encode(emailContato);

            const database = getDatabase();
            const agora = new Date();

            const referenciaUsuario = `${emailUsuarioBase64}/${emailContatoBase64}`;
            const mensagensUsuarioDB = ref(database, `mensagens/${referenciaUsuario}`);
            await push(mensagensUsuarioDB, {
                mensagem,
                tipo: TIPO_ENVIADA,
                dataHora: agora.toISOString(),
            });

            const conversasUsuarioDB = ref(database, `conversas/${referenciaUsuario}`);
            await set(conversasUsuarioDB, {
                email: emailContato,
                dataHora: agora.toISOString(),
                ultimaMensagemRecebida: '',
                novasMensagens: 0,
            });

            const referenciaContato = `${emailContatoBase64}/${emailUsuarioBase64}`;
            const mensagensContatoDB = ref(database, `mensagens/${referenciaContato}`);
            await push(mensagensContatoDB, {
                mensagem,
                tipo: TIPO_RECEBIDA,
                dataHora: agora.toISOString(),
            });

            const conversasContatoDB = ref(database, `conversas/${referenciaContato}`);
            const conversa = await get(conversasContatoDB);
            const quantidadeNovasMensagens = conversa.exists() ? conversa.val().novasMensagens + 1 : 1
            await set(conversasContatoDB, {
                email: usuarioLogado.email,
                dataHora: agora.toISOString(),
                ultimaMensagemRecebida: mensagem, 
                novasMensagens: quantidadeNovasMensagens
            });
        }
        catch(error) {
            throw error
        }
    }

    escutarlistaDeConversas(callback) {
        const auth = getAuth();
        const usuarioLogado = auth.currentUser;
        
        const emailUsuarioBase64 = base64.encode(usuarioLogado.email);

        const database = getDatabase();
        const usuarioConversasDB = ref(database, `conversas/${emailUsuarioBase64}`);

        onValue(usuarioConversasDB, (conversas) => {
            conversas = conversas.val();
            const listaConversas = _.orderBy(_.map(conversas), ['dataHora'], ['desc']);

            callback({ listaConversas });
        });
    }

    escutarConversa(emailContato, callback) {
        const auth = getAuth();
        const usuarioLogado = auth.currentUser;

        const database = getDatabase();

        const referenciaConversa = `${base64.encode(usuarioLogado.email)}/${base64.encode(emailContato)}`;
        const mensagensUsuarioDB = ref(database, `mensagens/${referenciaConversa}`);

        onValue(mensagensUsuarioDB, (conversa) => {
            conversa = conversa.val();
            conversa = _.map(conversa);

            callback({ conversa });
        })
    }
}

export default ConversasService;