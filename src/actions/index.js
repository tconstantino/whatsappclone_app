import { createAction, createAsyncThunk, createListenerMiddleware } from "@reduxjs/toolkit";
import UsuarioService from "../services/usuario-service";
import ContatoService from "../services/contato-service";
import ConversasService from "../services/conversas-service";

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

export const obterListaContatos = createAsyncThunk('obter_lista_contatos', (params, thunkAPI) => {
    const contatoService = new ContatoService();
    
    return new Promise(() => {
        contatoService.escutarListaContatos((listaContatos) => {
            return thunkAPI.dispatch({
                type: 'obter_lista_contatos/fulfilled',
                payload: listaContatos
            });
        });
    });
});

export const deslogarUsuario = createAction('deslogar_usuario', () => {
    const usuarioService = new UsuarioService();
    usuarioService.deslogarUsuario();

    return { payload: null };
});

export const modificarMensagem = createAction('modificar_mensagem');

export const enviarMensagem = createAsyncThunk('enviar_mensagem', async (params) => {
    const conversasService = new ConversasService();

    const { mensagem, email } = params;
    await conversasService.enviarMensagem(mensagem, email);
});

export const obterListaConversas = createAsyncThunk('obter_lista_conversas', (params, thunkAPI) => {
    const conversasService = new ConversasService();
    
    return new Promise(() => {
        conversasService.escutarlistaDeConversas((listaConversas) => {
            thunkAPI.dispatch({ type: 'obter_lista_conversas/fulfilled', payload: listaConversas });
        });
    });
});

export const obterConversa = createAsyncThunk('obter_conversa', (params, thunkAPI) => {
    const conversasService = new ConversasService();
    const { email } = params;

    return new Promise(() => {
        conversasService.escutarConversa(email, (conversa) => {
            thunkAPI.dispatch({ type: 'obter_conversa/fulfilled', payload: conversa });
        });
    });
});

export const zerarContadorNovasMensagens = createAsyncThunk('zerar_contador_novas_mensagens', async (params) => {
    const conversasService = new ConversasService();
    const { email } = params;

    await conversasService.zerarContadorDeNovasMensagens(email);
});