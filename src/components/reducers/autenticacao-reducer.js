import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {
    email: '',
    senha: '',
};


const autenticar = createAction('autenticar');

const AutenticacaoReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(autenticar, (state, action) => {
            return state;
        })
        .addDefaultCase((state, action) => {})
});

export default AutenticacaoReducer;