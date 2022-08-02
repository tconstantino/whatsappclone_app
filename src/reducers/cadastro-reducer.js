import { createReducer } from "@reduxjs/toolkit";
import { modificarNome, modificarEmail, modificarSenha } from "../actions";

const initialState = {
    nome: '',
    email: '',
    senha: '',
};

const CadastroReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(modificarNome, (state, action) => {
            return { ...state, nome: action.payload };
        })
        .addCase(modificarEmail, (state, action) => {
            return { ...state, email: action.payload };
        })
        .addCase(modificarSenha, (state, action) => {
            return { ...state, senha: action.payload };
        })
});

export default CadastroReducer;