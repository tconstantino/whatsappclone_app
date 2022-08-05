import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, ref, set, push } from 'firebase/database';
import base64 from 'base-64';

class UsuarioService {

    async criarUsuario(nome, email, senha) {
        try {
            const auth = getAuth();
            const usuario = await createUserWithEmailAndPassword(auth, email, senha);
            
            const database = getDatabase();
            const emailBase64 = base64.encode(email);
            const contatosDB = ref(database, `contatos/${emailBase64}`);
            const contato = await set(push(contatosDB), {
                nome,
                email,
            });

            return { usuario, contato };
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