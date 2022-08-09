import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Botao from "./botao";
import { connect } from 'react-redux';
import { adicionarMaisContatos } from "../actions";

class TelaSucessoAdicaoContato extends Component {
    constructor(props) {
        super(props);
    }

    adicionarMais() {
        this.props.adicionarMaisContatos();
    }

    render() {
        return (
            <View style={styles.tela}>
                <View style={styles.painelMensagem}>
                    <Text style={styles.texto}>Contato adicionado com sucesso</Text>
                </View>
                <View style={styles.painelBotao}>
                    <Botao title='Adicionar +' onPress={this.adicionarMais.bind(this)} />
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    painelMensagem: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        fontSize: 20,
    },
    painelBotao: {
        flex: 1,
    }
});

export default connect(null, { adicionarMaisContatos })(TelaSucessoAdicaoContato);
