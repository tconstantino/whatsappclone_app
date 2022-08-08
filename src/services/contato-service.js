import { getDatabase, ref, set, push, get,  } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import EmailService from './email-service';
import base64 from 'base-64';

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
            const contatosUsuarioDB = ref(database, `contatos_usuario/${emailUsuarioLogadoBase64}/${emailContatoBase64}`);
            const contatoSalvo = await set(contatosUsuarioDB, {
                ...usuarioContato.val(),
            });
            
            return { contato: contatoSalvo };
        }
        catch(error) {
            throw error
        }
    }
}

export default ContatoService;
