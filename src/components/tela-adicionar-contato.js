import React, { Component } from "react";
import { View, StyleSheet, TextInput, ActivityIndicator, Text } from "react-native";
import Botao from "./botao";
import { connect } from 'react-redux';
import { modificarEmailContato, adicionarContato } from "../actions";

class TelaAdicionarContatos extends Component {
    constructor(props) {
        super(props);
    }

    adicionar() {
        const email = this.props.email;
        this.props.adicionarContato({ email });
    }

    render() {
        return (
            <View style={styles.tela}>
                <View style={styles.painelEmail}>
                    <TextInput 
                        value={this.props.email}
                        style={styles.campoEmail}
                        placeholder='E-mail'
                        placeholderTextColor='#000'
                        onChangeText={texto => { this.props.modificarEmailContato(texto) }} />
                        <Text style={styles.textoErro}>{this.props.erroCadastro}</Text>
                </View>
                <View style={styles.painelAdicionar}>
                {
                    this.props.exibirLoading 
                        ? <ActivityIndicator style={{marginTop: 65}} size='large' />
                        : <Botao title='Adicionar' onPress={this.adicionar.bind(this)}></Botao>
                }
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
    painelEmail: {
        flex: 1,
        justifyContent: 'center',
    },
    campoEmail: {
        marginTop: 25,
        fontSize: 20,
    },
    painelAdicionar: {
        flex: 1,
    },
    textoErro: {
        fontSize: 18,
        color: '#ff0000',
        marginTop: 20,
    },
});

const mapStateToProps = (state) => ({
    email: state.default.ContatoReducer.email,
    erroCadastro: state.default.ContatoReducer.erroCadastro,
    exibirLoading: state.default.ContatoReducer.exibirLoading,
});

export default connect(mapStateToProps, { 
    modificarEmailContato,
    adicionarContato,
})(TelaAdicionarContatos);
