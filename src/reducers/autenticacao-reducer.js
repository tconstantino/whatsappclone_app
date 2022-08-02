import { createReducer } from "@reduxjs/toolkit";
import { modificarEmail, modificarSenha } from "../actions";

const initialState = {
    email: '',
    senha: '',
};

const AutenticacaoReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(modificarEmail, (state, action) => {
            return { ...state, email: action.payload };
        })
        .addCase(modificarSenha, (state, action) => {
            return { ...state, senha: action.payload };
        })
        .addDefaultCase((state, action) => state)
});

export default AutenticacaoReducer;