import { createReducer } from "@reduxjs/toolkit";
import { modificarEmail, modificarSenha, autenticarUsuario, apagarMensagemErro } from "../actions";

const initialState = {
    email: '',
    senha: '',
    mensagemErro: '',
    exibirLoading: false,
};

const AutenticacaoReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(modificarEmail, (state, action) => {
            return { ...state, email: action.payload };
        })
        .addCase(modificarSenha, (state, action) => {
            return { ...state, senha: action.payload };
        })
        .addCase(autenticarUsuario.fulfilled, (state, action) => {
            return { 
                ...state, 
                mensagemErro: '',
                senha: '',
                exibirLoading: false,
            };
        })
        .addCase(autenticarUsuario.pending, (state, action) => {
            return { 
                ...state, 
                mensagemErro: '',
                exibirLoading: true,
            };
        })
        .addCase(autenticarUsuario.rejected, (state, action) => {
           
            return { 
                ...state,
                mensagemErro: action.error.message,
                exibirLoading: false,
            };
        })
        .addCase(apagarMensagemErro, (state, action) => {
            return { ...state, mensagemErro: '' };
        })
});

export default AutenticacaoReducer;