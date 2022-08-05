import React, { Component } from "react";
import { View, StyleSheet, Image, Text, ImageBackground } from "react-native";
import Botao from './botao';
import { connect } from 'react-redux';
import { modificarSenha, apagarMensagemErro } from "../actions";
import logoImage from '../../images/logo.png';
import backgroundImage from '../../images/background.png'

class TelaBoasVindas extends Component {
    constructor(props) {
        super(props);
    }

    irParaLogin() {
        this.props.modificarSenha('');
        this.props.apagarMensagemErro();
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <ImageBackground source={backgroundImage} style={{flex: 1}}>
                <View style={styles.tela}>
                    <View style={styles.painelTitulo}>
                        <Text style={styles.textoTitulo}>Seja bem-vindo</Text>
                        <Image source={logoImage} />
                    </View>
                    <View style={styles.painelBotao}>
                        <Botao title='Fazer login' onPress={this.irParaLogin.bind(this)} />
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        padding: 15,
    },
    painelTitulo: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoTitulo: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    painelBotao: {
        flex: 1,
    }
});

const mapStateToProps = (state) => ({
    senha: state.default.AutenticacaoReducer.senha,
});

export default connect(mapStateToProps, {
    modificarSenha,
    apagarMensagemErro,
})(TelaBoasVindas);