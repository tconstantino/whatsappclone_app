import { getDatabase, ref, set, get, onValue,  } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import EmailService from './email-service';
import base64 from 'base-64';

const REF_CONTATOS_USUARIO = 'contatos_usuario';

class ContatoService {

    async adicionarContato(emailContato) {
        try {
            emailContato = emailContato.toLowerCase();

            const emailService = new EmailService();
            if(!emailContato || !emailService.validar(emailContato)) throw new Error('Informe um email válido');
    
            const auth = getAuth();
            const usuarioLogado = auth.currentUser;
            if(emailContato === usuarioLogado.email.toLowerCase()) throw new Error('Não é possível adicionar o próprio contato');
    
            const emailContatoBase64 = base64.encode(emailContato);
            const database = getDatabase();
            const usuariosDB = ref(database, `usuarios/${emailContatoBase64}`);
            const usuarioContato = await get(usuariosDB);
            if(!usuarioContato.exists()) throw new Error('E-mail não corresponde a um usuário válido');
            
            
            const emailUsuarioLogadoBase64 = base64.encode(usuarioLogado.email.toLowerCase());
            const contatoNovoUsuarioDB = ref(database, `${REF_CONTATOS_USUARIO}/${emailUsuarioLogadoBase64}/${emailContatoBase64}`);
            const contatoNovo = await get(contatoNovoUsuarioDB);
            if(contatoNovo.exists()) throw new Error('Contato já existe na sua lista');

            const contatoSalvo = await set(contatoNovoUsuarioDB, {
                ...usuarioContato.val(),
            });
            
            return { contato: contatoSalvo };
        }
        catch(error) {
            throw error
        }
    }

    async escutarListaContatos(callback) {
        const auth = getAuth();
        const usuarioLogado = auth.currentUser;
        const emailUsuarioLogado = usuarioLogado.email.toLowerCase();
        const emailUsuarioLogadoBase64 = base64.encode(emailUsuarioLogado);
        const database = getDatabase();
        const contatosUsuarioDB = ref(database, `${REF_CONTATOS_USUARIO}/${emailUsuarioLogadoBase64}`);

        onValue(contatosUsuarioDB, (contato) => {
            callback(contato.val());
        });
    }
}

export default ContatoService;
