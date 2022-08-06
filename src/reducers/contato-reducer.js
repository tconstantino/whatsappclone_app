import { createReducer } from "@reduxjs/toolkit";
import { 
    modificarEmail,
    adicionarContato,
} from "../actions";

const initialState = {
    email: '',
    exibirLoading: false,
};

const ContatoReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(modificarEmail, (state, action) => {
            return { ...state, email: action.payload };
        })
        .addCase(adicionarContato, (state, action) => {
            return { ...state };
        })
})

export default ContatoReducer;