import React, { Component } from "react";
import { View, TextInput, StyleSheet, ImageBackground } from "react-native";
import Botao from './botao';
import { connect } from 'react-redux';
import { modificarNome, modificarEmail, modificarSenha } from '../actions';
import backgroundImage from '../../images/background.png'

class TelaCadastro extends Component {
    constructor(props) {
        super(props);
    }

    cadastrar() {

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
                        <TextInput
                        value={this.props.senha}
                        style={styles.campos}
                        placeholder="Senha"
                        placeholderTextColor='#fff'
                        secureTextEntry
                        onChangeText={texto => this.props.modificarSenha(texto)} />
                    </View>
                    <View style={styles.painelBotao}>
                        <Botao title="Cadastrar" onPress={this.cadastrar.bind(this)}></Botao>
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
});

const mapStateToProps = (state) => ({
    nome: state.default.CadastroReducer.nome,
    email: state.default.CadastroReducer.email,
    senha: state.default.CadastroReducer.senha,
});

export default connect(mapStateToProps, {
    modificarNome,
    modificarEmail,
    modificarSenha
})(TelaCadastro);