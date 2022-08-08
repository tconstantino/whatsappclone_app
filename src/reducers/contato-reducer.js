import { createReducer } from "@reduxjs/toolkit";
import { 
    modificarEmailContato,
    adicionarContato,
} from "../actions";

const initialState = {
    email: '',
    erroCadastro: '',
    exibirLoading: false,
};

const ContatoReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(modificarEmailContato, (state, action) => {
            return { ...state, email: action.payload };
        })
        .addCase(adicionarContato.fulfilled, (state, action) => {
            return { ...state,
                erroCadastro: '',
                exibirLoading: false,
            };
        })
        .addCase(adicionarContato.pending, (state, action) => {
            return { ...state,
                    erroCadastro: '',
                    exibirLoading: true,
            };
        })
        .addCase(adicionarContato.rejected, (state, action) => {
            return { 
                ...state, 
                erroCadastro: action.error.message,
                exibirLoading: false,
            };
        })
})

export default ContatoReducer;