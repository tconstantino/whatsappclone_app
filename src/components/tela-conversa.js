import React, { Component } from "react";
import { View, StyleSheet, TextInput, TouchableHighlight } from "react-native";
import { connect } from 'react-redux';
import {  } from "../actions";

class TelaConversa extends Component {
    constructor(props) {
        super(props);
        this.props.obterListaContatos();
    }

    render() {
        
        return (
            <View style={styles.tela}>
               
                    <TouchableHighlight>
                       <TextInput></TextInput>
                    </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
    },
});

const mapStateToProps = (state) => ({
    
});

export default connect(mapStateToProps)(TelaConversa);