import React, { Component } from "react";
import { View, StyleSheet, FlatList, Text, TouchableHighlight, Button } from "react-native";
import { connect } from 'react-redux';
import { obterListaContatos } from "../actions";
import ContatoService from "../services/contato-service";

class TelaContatos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaContatos: []
        }
    }

    componentDidMount() {
        this.props.obterListaContatos();
        // const contatoService = new ContatoService();
        // contatoService.escutarListaContatos((listaContatos) => {
        //     console.log('\nBusca\n', listaContatos)
        //     this.setState({ ...listaContatos })
        // })
    }

    render() {
        return (
            <View style={styles.tela}>
                
                <FlatList data={this.props.listaContatos} renderItem={({ item }) => (
                    <TouchableHighlight
                        onPress={() => this.props.navigation.navigate('TelaConversa')}
                        underlayColor='#eee'
                        activeOpacity={0.6}>
                        <View style={styles.painelContato}>
                            <Text style={styles.textoNome}>{item.nome}</Text>
                            <Text style={styles.textoEmail}>{`<${item.email}>`}</Text>
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
    painelContato: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    textoNome: {
        fontSize: 22,
        fontWeight: '500',
    },
    textoEmail: {
        fontSize: 18,
    }

});

const mapStateToProps = (state) => ({
    listaContatos: state.default.ContatoReducer.listaContatos,
});

export default connect(mapStateToProps, { obterListaContatos })(TelaContatos);

// export default TelaContatos;