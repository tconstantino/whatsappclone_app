import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableHighlight,
    ImageBackground,
    ActivityIndicator,
} from 'react-native';
import Botao from './botao';
import TextInputSenha from './text-input-senha';
import { connect } from 'react-redux';
import { modificarEmail, modificarSenha, autenticarUsuario } from '../actions';
import backgroundImage from '../../images/background.png'

class TelaLogin extends Component {
    constructor(props) {
        super(props);
    }

    irParaCadastro() {
        this.props.navigation.navigate('Cadastro');
    }

    acessar() {
        const email = this.props.email;
        const senha = this.props.senha;
        const navigation = this.props.navigation;
        this.props.autenticarUsuario({
            email,
            senha,
            navigation,
        });
    }

    render() {
        return (
            <ImageBackground source={backgroundImage} style={{flex: 1}}>
                <View style={styles.tela}>
                    <View style={styles.painelTitulo}>
                        <Text style={styles.textoTitulo}>Whatsapp Clone</Text>
                    </View>
                    <View style={styles.painelLogin}>
                        <TextInput 
                        value={this.props.email}
                        style={styles.textoLogin}
                        placeholder='E-mail'
                        placeholderTextColor='#fff'
                        onChangeText={texto => { this.props.modificarEmail(texto) }} />
                        <TextInputSenha
                        value={this.props.senha}
                        placeholder='Senha'
                        placeholderTextColor='#fff'
                        onChangeText={texto => { this.props.modificarSenha(texto) }} />
                        <TouchableHighlight 
                            underlayColor='transparent'
                            onPress={this.irParaCadastro.bind(this)}>
                            <Text style={styles.textoLink}>Ainda não tem cadastro? Cadastre-se</Text>
                        </TouchableHighlight>

                        
                        <Text style={styles.textoErro}>{this.props.mensagemErro}</Text>
                    </View>
                    <View style={styles.painelAcessar}>
                        {
                            this.props.exibirLoading 
                                ? <ActivityIndicator style={{marginTop: 65}} size='large' />
                                : <Botao title='Acessar' onPress={this.acessar.bind(this)}></Botao>
                        }
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        padding: 10,
    },
    painelTitulo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoTitulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    },
    painelLogin: {
        flex: 2,
    },
    textoLogin: {
        fontSize: 20,
        backgroundColor: 'transparent',
        height: 45,
        color: '#fff',
    },
    textoLink: {
        marginTop: 25,
        fontSize: 20,
        color: '#fff',
    },
    painelAcessar: {
        flex: 1,
    },
    textoErro: {
        fontSize: 18,
        color: '#ff0000',
        marginTop: 20,
    },
});

const mapStateToProps = (state) => ({
    email: state.default.AutenticacaoReducer.email,
    senha: state.default.AutenticacaoReducer.senha,
    mensagemErro: state.default.AutenticacaoReducer.mensagemErro,
    exibirLoading: state.default.AutenticacaoReducer.exibirLoading,
});

export default connect(mapStateToProps, {
    modificarEmail,
    modificarSenha,
    autenticarUsuario,
})(TelaLogin);
