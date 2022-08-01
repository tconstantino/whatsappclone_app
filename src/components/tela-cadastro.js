import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import Botao from './botao';
import { connect } from 'react-redux';

class TelaCadastro extends Component {
    constructor(props) {
        super(props);
    }

    cadastrar() {

    }

    render() {
        return (
            <View style={styles.tela}>
                <View style={styles.painelCampos}>
                    <TextInput value={this.props.nome} style={styles.campos} placeholder="Nome"></TextInput>
                    <TextInput value={this.props.email} style={styles.campos} placeholder="E-mail"></TextInput>
                    <TextInput value={this.props.senha} style={styles.campos} placeholder="Senha"></TextInput>
                </View>
                <View style={styles.painelBotao}>
                    <Botao title="Cadastrar" onPress={this.cadastrar.bind(this)}></Botao>
                </View>
            </View>
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

export default connect(mapStateToProps)(TelaCadastro);