import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaLogin from './src/components/tela-login';
import TelaCadastro from './src/components/tela-cadastro';
import TelaBoasVindas from './src/components/tela-boas-vindas';
import TelaPrincipal from './src/components/tela-principal';
import TelaContatos from './src/components/tela-contatos';
import TelaAdicionarContatos from './src/components/tela-adicionar-contato';
import TelaConversa from './src/components/tela-conversa'

const StackNavigator = createStackNavigator();

const Navigation = (props) => {
    return (
        <NavigationContainer>
        <StackNavigator.Navigator screenOptions={{headerShown: false}} >
            <StackNavigator.Screen name='Login' component={TelaLogin} />
            <StackNavigator.Screen options={headerOptions} name='Cadastro' component={TelaCadastro} />
            <StackNavigator.Screen name='Boas-vindas' component={TelaBoasVindas} />
            <StackNavigator.Screen name='Principal' component={TelaPrincipal} />
            <StackNavigator.Screen options={headerOptions} name='Adicionar Contato' component={TelaAdicionarContatos} />
            <StackNavigator.Screen options={headerOptions} name='Conversa' component={TelaConversa} />
        </StackNavigator.Navigator>
        </NavigationContainer>
    )
};

const headerOptions = {
    headerShown: true, 
    headerBackTitleVisible: false,
    headerStyle: {
        backgroundColor: '#115e54',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    }
};

export default Navigation;