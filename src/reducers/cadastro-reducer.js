import { createReducer } from "@reduxjs/toolkit";
import { 
    modificarNome, 
    modificarEmail, 
    modificarSenha,
    cadastrarUsuario,
} from "../actions";

const initialState = {
    nome: '',
    email: '',
    senha: '',
    mensagemErro: '',
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
        .addCase(cadastrarUsuario.fulfilled, (state, action) => {
            return { 
                ...state, 
                mensagemErro: '',
                senha: '',
            };
        })
        .addCase(cadastrarUsuario.rejected, (state, action) => {
           
            return { 
                ...state,
                mensagemErro: action.error.message,
            };
        })
});

export default CadastroReducer;