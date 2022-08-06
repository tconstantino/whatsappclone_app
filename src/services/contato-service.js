import { getDatabase, ref, set, push } from 'firebase/database';
import base64 from 'base-64';

class ContatoService {

    async adicionarContato(email) {
        try {
            const database = getDatabase();
            const emailBase64 = base64.encode(email);
            const contatosDB = ref(database, `contatos/${emailBase64}`);
            const contato = await set(push(contatosDB), {
                nome,
                email,
            });

            return { contato };
        }
        catch(error) {
            throw error
        }
    }
}

export default ContatoService;
