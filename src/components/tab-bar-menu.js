import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import adicionarContatoImage from '../../images/adicionar_contato.png';

class TabBarMenu extends Component {
    constructor(props) {
        super(props);
    }

    irParaAdicionarContatos() {
        this.props.navigation.navigate('Adicionar Contato');
    }

    sair() {

    }

    render() {
        return (
            <View style={styles.tabBar}>
                <View style={styles.topo}>
                    <View style={styles.painelTitulo}>
                        <Text style={styles.textoTitulo}>Whatsapp Clone</Text>
                    </View>
                    <View style={styles.painelOpcoes}>
                        <View style={styles.painelImagem}>
                            <TouchableHighlight underlayColor='transparent' onPress={this.irParaAdicionarContatos.bind(this)}>
                                <Image source={adicionarContatoImage} />
                            </TouchableHighlight>
                        </View>
                        <View style={styles.painelBotaoSair}>
                            <TouchableHighlight underlayColor='transparent' onPress={this.sair.bind(this)}>
                                <Text style={styles.textoSair}>Sair</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                <TabBar {...this.props}></TabBar>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#115e54',
    },
    topo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    painelTitulo: {
        height: 50,
        justifyContent: 'center',
    },
    textoTitulo: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20
    },
    textoSair: {
        fontSize: 18,
        color: '#fff',
    },
    painelOpcoes: {
        flexDirection: 'row',
        marginRight: 20,
    },
    painelImagem: {
        width: 50,
        justifyContent: 'center',
    },
    painelBotaoSair: {
        justifyContent: 'center',
    },
});

export default TabBarMenu