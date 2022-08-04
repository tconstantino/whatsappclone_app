import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import UsuarioService from "../services/usuario-service";

export const modificarNome = createAction('modificar_nome');

export const modificarEmail = createAction('modificar_email');

export const modificarSenha = createAction('modificar_senha');

export const cadastrarUsuario = createAsyncThunk('cadastrar_usuario', async (params) => {
    const usuarioService = new UsuarioService();
    await usuarioService.criarUsuario(params.nome, params.email, params.senha);
    
    params.navigation.navigate('Boas-vindas');
});