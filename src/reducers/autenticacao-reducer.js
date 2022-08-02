import { createReducer } from "@reduxjs/toolkit";
import { modificarEmail, modificarSenha } from "../actions/autenticacao-action";

const initialState = {
    email: '',
    senha: '',
};

const AutenticacaoReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(modificarEmail, (state, action) => {
            console.log('modifica email action', action);
            return { ...state, email: action.payload };
        })
        .addCase(modificarSenha, (state, action) => {
            return { ...state, senha: action.payload };
        })
        .addDefaultCase((state, action) => state)
});

export default AutenticacaoReducer;