import React from "react";
import { Button, Platform, View, StyleSheet } from "react-native";

const Botao = (props) => {
    return Platform.OS === 'ios'
        ? <View style={styles.botaoIos}>
            <Button color='#FFF' title={props.title} onPress={props.onPress}></Button>
        </View>
        : <Button color='#115e54' title={props.title} onPress={props.onPress}></Button>;
}

const styles = StyleSheet.create({
    botaoIos: {
        backgroundColor: '#115e54',
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 1, height: 2 },
    },
});

export default Botao;