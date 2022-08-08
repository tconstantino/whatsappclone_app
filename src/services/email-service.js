export default class EmailService {
    validar(email) {
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        return regexEmail.test(email);
    }
}