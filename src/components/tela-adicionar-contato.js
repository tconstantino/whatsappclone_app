import React, { Component } from "react";
import { View, StyleSheet, TextInput, ActivityIndicator } from "react-native";
import Botao from "./botao";
import { connect } from 'react-redux';
import { modificarEmail, adicionarContato } from "../actions";

class TelaAdicionarContatos extends Component {
    constructor(props) {
        super(props);
    }

    adicionar() {

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
                        onChangeText={texto => { this.props.modificarEmail(texto) }} />
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
});

const mapStateToProps = (state) => ({
    email: state.default.ContatoReducer.email,
    exibirLoading: state.default.ContatoReducer.exibirLoading,
});

export default connect(mapStateToProps, { 
    modificarEmail,
    adicionarContato,
})(TelaAdicionarContatos);
