import { createReducer } from "@reduxjs/toolkit";
import { 
    modificarEmailContato,
    adicionarContato,
    adicionarMaisContatos,
} from "../actions";

const initialState = {
    email: '',
    erroCadastro: '',
    exibirLoading: false,
    exibirSucessoAdicaoContato: false,
};

const ContatoReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(modificarEmailContato, (state, action) => {
            return { ...state, email: action.payload };
        })
        .addCase(adicionarContato.fulfilled, (state, action) => {
            return { ...state,
                email: '',
                erroCadastro: '',
                exibirLoading: false,
                exibirSucessoAdicaoContato: true,
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
        .addCase(adicionarMaisContatos, (state, action) => {
            return { ...state, exibirSucessoAdicaoContato: false };
        })
})

export default ContatoReducer;