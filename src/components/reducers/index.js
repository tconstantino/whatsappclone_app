import { combineReducers } from "redux";
import AutenticacaoReducer from "./autenticacao-reducer";
import CadastroReducer from "./cadastro-reducer";

export default combineReducers({
    AutenticacaoReducer,
    CadastroReducer
});