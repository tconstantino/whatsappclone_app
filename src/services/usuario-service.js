import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, ref, set, push } from 'firebase/database';
import EmailService from './email-service';
import base64 from 'base-64';

class UsuarioService {

    async criarUsuario(nome, email, senha, confirmacaoSenha) {
        try {
            email = email.toLowerCase();

            if(!nome) throw new Error('Nome é obrigatório');

            const emailService = new EmailService();
            if(!email || !emailService.validar(email)) throw new Error('Informe um email válido');

            if(senha !== confirmacaoSenha) throw new Error('Senhas não coincidem');

            const auth = getAuth();
            const usuarioAuth = await createUserWithEmailAndPassword(auth, email, senha);
            
            const database = getDatabase();
            const emailBase64 = base64.encode(email);
            const usuariosDB = ref(database, `usuarios/${emailBase64}`);
            const usuario = await set(usuariosDB, {
                nome,
                email,
            });

            return { usuarioAuth, usuario };
        }
        catch(error) {
            throw error
        }
    }

    async autenticarUsuario(email, senha) {
        try {
            const auth = getAuth();
            const usuarioLogado = await signInWithEmailAndPassword(auth, email, senha);

            return { usuarioLogado };
        }
        catch(error) {
            throw error;
        }
    }
}

export default UsuarioService;