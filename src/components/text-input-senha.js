import React, { Component } from "react";
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';
import eyeIcon from '../../images/white-eye-icon.png'
import closedEyeIcon from '../../images/white-closed-eye-icon.png'

class TextInputSenha extends Component {
    constructor(props) {
        super(props);
        this.state = {
            esconderSenha: true,
        };
    }

    render() {
        return (
            <View style={styles.painelSenha}>
                <TextInput
                    textContentType='oneTimeCode'
                    secureTextEntry={this.state.esconderSenha}
                    style={styles.textoSenha}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={this.props.placeholderTextColor}
                    onChangeText={this.props.onChangeText} />
                <TouchableOpacity onPress={() => { this.setState({ esconderSenha: !this.state.esconderSenha}) }}>
                    <Image source={this.state.esconderSenha ? eyeIcon : closedEyeIcon} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    painelSenha: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textoSenha: {
        fontSize: 20,
        backgroundColor: 'transparent',
        height: 45,
        color: '#fff',
        width: '85%',
    },
    icone: {
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default TextInputSenha;