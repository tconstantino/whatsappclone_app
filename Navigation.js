import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaLogin from './src/components/tela-login';
import TelaCadastro from './src/components/tela-cadastro';

const StackNavigator = createStackNavigator();

const Navigation = (props) => {
return (
    <NavigationContainer>
    <StackNavigator.Navigator>
        <StackNavigator.Screen name='Login' component={TelaLogin} />
        <StackNavigator.Screen name='Cadastro' component={TelaCadastro} />
    </StackNavigator.Navigator>
    </NavigationContainer>
)
};

export default Navigation;