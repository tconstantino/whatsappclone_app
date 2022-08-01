import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {
    nome: '',
    email: '',
    senha: '',
};

const cadastrar = createAction('cadastrar');

const CadastroReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(cadastrar, (state, action) => {
            return state;
        })
        .addDefaultCase((state, action) => {})
});

export default CadastroReducer;