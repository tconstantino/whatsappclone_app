import { combineReducers } from "redux";
import AutenticacaoReducer from "./autenticacao-reducer";
import CadastroReducer from "./cadastro-reducer";
import ContatoReducer from "./contato-reducer";

export default combineReducers({
    AutenticacaoReducer,
    CadastroReducer,
    ContatoReducer,
});