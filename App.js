/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   StyleSheet,
   View,
   SafeAreaView,
   StatusBar,
   Text,
 } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import TelaLogin from './src/components/tela-login';
 const StackNavigator = createStackNavigator();
 

//  <NavigationContainer>
//        <StackNavigator.Navigator screenOptions={{headerShown: false}}>
//          <StackNavigator.Screen name='TelaPrincipal' component={TelaPrincipal} />
//          <StackNavigator.Screen name='TelaCliente' component={TelaCliente} />
//          <StackNavigator.Screen name='TelaContato' component={TelaContato} />
//          <StackNavigator.Screen name='TelaEmpresa' component={TelaEmpresa} />
//          <StackNavigator.Screen name='TelaServicos' component={TelaServicos} />
//        </StackNavigator.Navigator>
//      </NavigationContainer>
 const App = () => {
   return (
    <SafeAreaView style={{backgroundColor: '#115e54', flex: 1}}>
      <StatusBar barStyle='light-content'></StatusBar>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <TelaLogin></TelaLogin>
      </View>
    </SafeAreaView>
     
   );
 };
 
 const styles = StyleSheet.create({
   
 });
 
 export default App;
 