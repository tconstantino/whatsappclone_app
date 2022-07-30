import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
} from 'react-native';

class TelaLogin extends Component {
    constructor(props) {
        super(props);
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
                    <TextInput style={styles.textoLogin} placeholder='E-mail'></TextInput>
                    <TextInput style={styles.textoLogin} placeholder='Senha'></TextInput>
                    <Text style={styles.textoLink}>Ainda não tem cadastro? Cadastre-se</Text>
                </View>
                <View style={styles.painelAcessar}>
                    {
                        Platform.OS === 'ios'
                        ? <View style={styles.botaoIos}>
                            <Button color='#FFF' title='Acessar' onPress={this.acessar.bind(this)}></Button>
                        </View>
                        : <Button color='#115e54' title='Acessar' onPress={this.acessar.bind(this)}></Button>
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
    botaoIos: {
        backgroundColor: '#115e54',
        shadowColor: 'grey',
        shadowOpacity: 0.5,
    },
});

export default TelaLogin;