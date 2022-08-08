import React, { Component } from "react";
import { View, StyleSheet, ImageBackground, Text, TextInput, ActivityIndicator } from "react-native";
import Botao from './botao';
import TextInputSenha from './text-input-senha';
import { connect } from 'react-redux';
import { 
    modificarNome,
    modificarEmail,
    modificarSenha,
    modificarConfirmacaoSenha,
    cadastrarUsuario,
} from '../actions';
import backgroundImage from '../../images/background.png'

class TelaCadastro extends Component {
    constructor(props) {
        super(props);
    }

    cadastrar() {
        const nome = this.props.nome;
        const email = this.props.email;
        const senha = this.props.senha;
        const confirmacaoSenha = this.props.confirmacaoSenha;
        this.props.cadastrarUsuario({ 
            nome, 
            email, 
            senha,
            confirmacaoSenha,
            navigation: this.props.navigation 
        });
    }

    render() {
        return (
            <ImageBackground source={backgroundImage} style={{flex: 1}}>
                <View style={styles.tela}>
                    <View style={styles.painelCampos}>
                        <TextInput
                        value={this.props.nome}
                        style={styles.campos}
                        placeholder="Nome"
                        placeholderTextColor='#fff'
                        onChangeText={texto => this.props.modificarNome(texto)} />
                        <TextInput
                        value={this.props.email}
                        style={styles.campos}
                        placeholder="E-mail"
                        placeholderTextColor='#fff'
                        onChangeText={texto => this.props.modificarEmail(texto)} />
                        <TextInputSenha
                        value={this.props.senha}
                        placeholder="Senha"
                        placeholderTextColor='#fff'
                        onChangeText={texto => this.props.modificarSenha(texto)} />
                        <TextInputSenha
                        value={this.props.confirmacaoSenha}
                        placeholder="Confirmação senha"
                        placeholderTextColor='#fff'
                        onChangeText={texto => this.props.modificarConfirmacaoSenha(texto)} />
                        <Text style={styles.textoErro}>{this.props.mensagemErro}</Text>
                    </View>
                    <View style={styles.painelBotao}>
                        {
                            this.props.exibirLoading 
                                ? <ActivityIndicator size='large' />
                                : <Botao title="Cadastrar" onPress={this.cadastrar.bind(this)}></Botao>
                        }
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        padding: 10,
    },
    painelCampos: {
        flex: 4,
        justifyContent: 'center',
    },
    campos: {
        fontSize: 20,
        height: 45,
        color: '#fff',
    },
    painelBotao: {
        flex: 1,
    },
    textoSucesso: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'blue',
        marginTop: 20,
    },
    textoErro: {
        fontSize: 18,
        color: '#ff0000',
        marginTop: 20,
    },
});

const mapStateToProps = (state) => ({
    nome: state.default.CadastroReducer.nome,
    email: state.default.CadastroReducer.email,
    senha: state.default.CadastroReducer.senha,
    confirmacaoSenha: state.default.CadastroReducer.confirmacaoSenha,
    usuario: state.default.CadastroReducer.usuario,
    exibirLoading: state.default.CadastroReducer.exibirLoading,
    mensagemErro: state.default.CadastroReducer.mensagemErro,
    mensagemSucesso: state.default.CadastroReducer.mensagemSucesso,
});

export default connect(mapStateToProps, {
    modificarNome,
    modificarEmail,
    modificarSenha,
    modificarConfirmacaoSenha,
    cadastrarUsuario,
})(TelaCadastro);