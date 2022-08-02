import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableHighlight,
    ImageBackground,
} from 'react-native';
import Botao from './botao';
import { connect } from 'react-redux';
import { modificarEmail, modificarSenha } from '../actions';
import backgroundImage from '../../images/background.png'

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
                        <TextInput
                        value={this.props.senha}
                        style={styles.textoLogin}
                        placeholder='Senha'
                        placeholderTextColor='#fff'
                        secureTextEntry
                        onChangeText={texto => { this.props.modificarSenha(texto) }} />
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
        height: 45,
        color: '#fff',
    },
    textoLink: {
        fontSize: 20,
        color: '#fff',
    },
    painelAcessar: {
        flex: 1,
    },
});

const mapStateToProps = (state) => ({
    email: state.default.AutenticacaoReducer.email,
    senha: state.default.AutenticacaoReducer.senha,
});

connect()

export default connect(mapStateToProps, {
    modificarEmail,
    modificarSenha,
})(TelaLogin);
