import React, { Component } from "react";
import { View, StyleSheet, Image, Text, ImageBackground } from "react-native";
import { connect } from 'react-redux';
import { } from "../actions";

class TelaContatos extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.tela}>
                <Text>Tela Contatos</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
    }
});

export default TelaContatos;