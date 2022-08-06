import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaLogin from './src/components/tela-login';
import TelaCadastro from './src/components/tela-cadastro';
import TelaBoasVindas from './src/components/tela-boas-vindas';
import TelaPrincipal from './src/components/tela-principal';
import TabBarMenu from './src/components/tab-bar-menu';
import TelaAdicionarContatos from './src/components/tela-adicionar-contato';

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