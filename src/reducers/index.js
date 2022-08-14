import { combineReducers } from "redux";
import AutenticacaoReducer from "./autenticacao-reducer";
import CadastroReducer from "./cadastro-reducer";
import ContatoReducer from "./contato-reducer";
import ConversaReducer from "./conversa-reducer";

export default combineReducers({
    AutenticacaoReducer,
    CadastroReducer,
    ContatoReducer,
    ConversaReducer,
});