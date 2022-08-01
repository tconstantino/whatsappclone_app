import React from "react";
import { Button, Platform, View, StyleSheet } from "react-native";

const Botao = (props) => {
    return Platform.OS === 'ios'
        ? <View style={styles.botaoIos}>
            <Button color='#FFF' title={props.title} onPress={props.acao}></Button>
        </View>
        : <Button color='#115e54' title={props.title} onPress={props.acao}></Button>;
}

const styles = StyleSheet.create({
    botaoIos: {
        backgroundColor: '#115e54',
        shadowColor: 'grey',
        shadowOpacity: 0.5,
    },
});

export default Botao;