import React, { Component } from "react";
import { View, StyleSheet, Image, Text, ImageBackground } from "react-native";
import Botao from './botao';
import { connect } from 'react-redux';
import { modificarSenha, apagarMensagemErro } from "../actions";
import logoImage from '../../images/logo.png';
import backgroundImage from '../../images/background.png'

class TelaPrincipal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.tela}>
                <View style={styles.painelTitulo}>
                    <Text style={styles.textoTitulo}>Tela principal da aplicação</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
    },
    painelTitulo: {
        alignItems: 'center',
    },
    textoTitulo: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
    }
});

export default connect()(TelaPrincipal);