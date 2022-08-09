import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import UsuarioService from "../services/usuario-service";
import ContatoService from "../services/contato-service";

export const modificarNome = createAction('modificar_nome');

export const modificarEmail = createAction('modificar_email');

export const modificarSenha = createAction('modificar_senha');

export const modificarConfirmacaoSenha = createAction('modificar_confirmacao_senha');

export const cadastrarUsuario = createAsyncThunk('cadastrar_usuario', async (params) => {
    const usuarioService = new UsuarioService();
    await usuarioService.criarUsuario(params.nome, params.email, params.senha, params.confirmacaoSenha);
    
    params.navigation.navigate('Boas-vindas');
});

export const autenticarUsuario = createAsyncThunk('autenticar_usuario', async (params) => {
    const usuarioService = new UsuarioService();
    await usuarioService.autenticarUsuario(params.email, params.senha);

    params.navigation.navigate('Principal');
});

export const apagarMensagemErro = createAction('apagar_mensagem_erro');

export const modificarEmailContato = createAction('modificar_email_contato');

export const adicionarContato = createAsyncThunk('adicionar_contato', async (params) => {
    const contatoService = new ContatoService();
    await contatoService.adicionarContato(params.email);
});

export const adicionarMaisContatos = createAction('adicionar_mais_contatos');