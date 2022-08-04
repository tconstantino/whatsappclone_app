import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, ref, set, push } from 'firebase/database';
import base64 from 'base-64';

class UsuarioService {

    async criarUsuario(nome, email, senha) {
        try {
            const auth = getAuth();
            await createUserWithEmailAndPassword(auth, email, senha);
            
            const database = getDatabase();
            const emailBase64 = base64.encode(email);
            const contatosDB = ref(database, `contatos/${emailBase64}`);
            await set(push(contatosDB), {
                nome,
                email,
            });
        }
        catch(error) {
            throw error
        }
    }
}

export default UsuarioService;