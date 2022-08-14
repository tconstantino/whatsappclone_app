import { createReducer } from "@reduxjs/toolkit";
import { 
    modificarMensagem,
    enviarMensagem,
    obterListaConversas,
    obterConversa,
} from "../actions";

const initialState = {
    mensagem: '',
    listaConversas: [],
    conversa: [],
};

const ConversaReducer = createReducer(initialState, (builder,) => {
    builder
        .addCase(modificarMensagem, (state, action) => {
            return { ...state, mensagem: action.payload };
        })
        .addCase(enviarMensagem.fulfilled, (state, action) => {
            return { ...state, mensagem: '' };
        })
        .addCase(obterListaConversas.fulfilled, (state, action) => {
            return { ...state, listaConversas: action.payload.listaConversas };
        })
        .addCase(obterConversa.fulfilled, (state, action) => {
            return { ...state, conversa: action.payload.conversa };
        })
})

export default ConversaReducer;