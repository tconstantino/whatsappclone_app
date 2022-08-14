import React, { Component } from "react";
import { View, StyleSheet, Text, FlatList, TouchableHighlight } from "react-native";
import { connect } from 'react-redux';
import { 
    obterListaConversas,
    obterListaContatos,
 } from "../actions";
 import DataHoraService from "../services/data-hora-service";

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

    acessarConversa(contato) {
        const nomeContato = this.pegarNomeContato(contato.email)
        this.props.navigation.navigate('Conversa', { ...contato, nome: nomeContato });
    }

    exibirPreviaMensagem(mensagem) {
        if(mensagem && mensagem.length > 43) {
            mensagem = `${(mensagem).slice(0, 40)}...`;
        }

        return mensagem;
    }

    exibirDataHora(dataHora) {
        const dataFormatada = DataHoraService.formatarDataHora(dataHora);

        if(dataFormatada.dia === 'Hoje') return dataFormatada.horario;

        return dataFormatada.dia;
    }

    render() {
        return (
            <View style={styles.tela}>
                <FlatList data={this.props.listaConversas} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => (
                    <TouchableHighlight
                        onPress={() => this.acessarConversa(item)}
                        underlayColor='#eee'
                        activeOpacity={0.6}>
                        <View style={styles.painelConversa}>

                            <View style={styles.detalheConversa}>
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

                            <View style={styles.detalheUltimaMensagem}>
                                <View style={[styles.ultimaMensagem, item.tipoMensagem === 'RECEBIDA' ? styles.corMensagemRecebida : styles.corMensagemEnviada ]}>
                                    <Text style={{fontSize: 15}}>{this.exibirPreviaMensagem(item.ultimaMensagem)}</Text>
                                </View>
                                <View>
                                    <Text style={{fontSize: 15}}>{this.exibirDataHora(item.dataHora)}</Text>
                                </View>
                            </View>
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
        flexDirection: 'column',
        marginBottom: 8,
        alignItems: 'center',
    },
    detalheConversa: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        width: '100%'
    },  
    detalheContato: {
       
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
        marginTop: 5
    },
    textoNovasMensagens: {
        fontWeight: 'bold',
    },
    detalheUltimaMensagem: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '95%',
        margin: 5
    },
    ultimaMensagem: {
        backgroundColor: '#ddd', 
        borderRadius: 45, 
        paddingLeft: 7, 
        paddingRight: 7,
    },
    corMensagemRecebida: {
        backgroundColor: '#ddd',
    },
    corMensagemEnviada: {
        backgroundColor: '#c6dfb2',
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