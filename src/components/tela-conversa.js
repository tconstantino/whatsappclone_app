import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput, Image, TouchableHighlight, SectionList, FlatList } from "react-native";
import { connect } from 'react-redux';
import { modificarMensagem, enviarMensagem, obterConversa } from "../actions";
import botaoEnviarImage from '../../images/enviar_mensagem.png';

class TelaConversa extends Component {
    constructor(props) {
        super(props);
    }
    
    enviarMensagem() {
        const mensagem = this.props.mensagem;
        const { email } = this.props.route.params;
        this.props.enviarMensagem({ mensagem, email });
    }

    componentDidMount() {
        const { nome, email } = this.props.route.params;
        const tituloTela = `${nome} <${email}>`;
        this.props.navigation.setOptions({ title: tituloTela });
        
        this.props.obterConversa({ email });
    }

    render() {
        return (
            <View style={styles.tela}>
                <View style={styles.topo}>
                    <FlatList data={this.props.conversa} keyExtractor={(item, index) => index} renderItem={({ item }) => (
                        <View>
                            <Text>{item.mensagem} - {item.tipo}</Text>
                        </View>
                    )} />
                </View>




                <View style={styles.painelTextoMensagem}>
                    <TextInput
                     multiline
                     keyboardType="default"
                     style={styles.textoMensagem}
                     value={this.props.mensagem}
                     onChangeText={texto => { this.props.modificarMensagem(texto) }} />
                    <TouchableHighlight underlayColor='transparent' onPress={this.enviarMensagem.bind(this)}>
                        <Image source={botaoEnviarImage} />
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#eee4dc',
        padding: 10,
    },
    topo: {
        flex: 1,
        paddingBottom: 20,
    },
    painelTextoMensagem: {
        flexDirection: 'row',
        height: 70,
        padding: 5,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoMensagem: {
        flex: 4,
        backgroundColor: '#fff',
        fontSize: 18,
        borderRadius: 45,
        height: 70,
        padding: 15,
        marginRight: 10,
    }
});

const mapStateToProps = (state) => ({
    mensagem: state.default.ConversaReducer.mensagem,
    conversa: state.default.ConversaReducer.conversa,
});

export default connect(mapStateToProps, { 
    modificarMensagem,
    enviarMensagem,
    obterConversa,
 })(TelaConversa);