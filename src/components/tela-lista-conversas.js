import React, { Component } from "react";
import { View, StyleSheet, Text, FlatList, TouchableHighlight } from "react-native";
import { connect } from 'react-redux';
import { obterListaConversas, obterListaContatos } from "../actions";

class TelaListaConversas extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.obterListaConversas();
        this.props.obterListaContatos();
    }

    pegarNomeContato(emailContato) {
        const contato = this.props.listaContatos.find(c => c.email === emailContato);

        return contato ? contato.nome : null;
    }

    render() {
        return (
            <View style={styles.tela}>
                <FlatList data={this.props.listaConversas} keyExtractor={(item, index) => index} renderItem={({ item }) => (
                    <TouchableHighlight
                        onPress={() => this.props.navigation.navigate('Conversa', { ...item, nome: this.pegarNomeContato(item.email) })}
                        underlayColor='#eee'
                        activeOpacity={0.6}>
                        <View style={styles.painelConversa}>
                            <View style={styles.detalheContato}>
                                <Text style={styles.textoNome}>{this.pegarNomeContato(item.email)}</Text>
                                <Text style={styles.textoEmail}>{`<${item.email}>`}</Text>
                            </View>
                            {
                                item.novasMensagens > 0
                                ? <View style={styles.novasMensagens}>
                                    <Text style={styles.textoNovasMensagens}>{item.novasMensagens}</Text>
                                </View>
                                : null
                            }
                        </View>
                    </TouchableHighlight>
                )} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
    },
    painelConversa: {
        flexDirection: 'row',
        height: 50,
        borderBottomWidth: 0.5,
        borderBottomColor: '#115e54',
        alignItems: 'center',
        paddingStart: 10,
    },
    detalheContato: {
        width: '85%',
    },
    textoNome: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    textoEmail: {
        fontSize: 18,
    },
    novasMensagens: {
        borderRadius: 90,
        backgroundColor: 'orange',
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoNovasMensagens: {
        fontWeight: 'bold',
    }

});

const mapStateToProps = (state) => ({
    listaConversas: state.default.ConversaReducer.listaConversas,
    listaContatos: state.default.ContatoReducer.listaContatos,
});

export default connect(mapStateToProps, { 
    obterListaConversas,
    obterListaContatos,
})(TelaListaConversas);