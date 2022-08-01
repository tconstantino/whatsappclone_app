import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableHighlight,
} from 'react-native';
import Botao from './botao';
import { connect } from 'react-redux';
import { State } from 'react-native-gesture-handler';

class TelaLogin extends Component {
    constructor(props) {
        super(props);
    }

    irParaCadastro(navigation) {
        navigation.navigate('Cadastro');
    }

    acessar() {
        
    }

    render() {
        return (
            <View style={styles.tela}>
                <View style={styles.painelTitulo}>
                    <Text style={styles.textoTitulo}>Whatsapp Clone</Text>
                </View>
                <View style={styles.painelLogin}>
                    <TextInput value={this.props.email} style={styles.textoLogin} placeholder='E-mail'></TextInput>
                    <TextInput value={this.props.senha} style={styles.textoLogin} placeholder='Senha'></TextInput>
                    <TouchableHighlight 
                        underlayColor={'white'}
                        activeOpacity={0.5}
                        onPress={() => this.irParaCadastro(this.props.navigation)}>
                        <Text style={styles.textoLink}>Ainda não tem cadastro? Cadastre-se</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.painelAcessar}>
                    <Botao title='Acessar' onPress={this.acessar.bind(this)}></Botao>
                </View>
            </View>
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
        fontSize: 25,
    },
    painelLogin: {
        flex: 2,
    },
    textoLogin: {
        fontSize: 20,
        height: 45,
    },
    textoLink: {
        fontSize: 20,
    },
    painelAcessar: {
        flex: 1,
    },
});

const mapStateToProps = (state) => ({
    email: state.default.AutenticacaoReducer.email,
    senha: state.default.AutenticacaoReducer.senha,
});

export default connect(mapStateToProps)(TelaLogin);
