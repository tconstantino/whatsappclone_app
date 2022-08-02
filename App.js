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
import { Provider } from 'react-redux';
import Navigation from './Navigation';
import store from './src/store';


 const App = () => {
   return (
    <Provider store={store}>
      <SafeAreaView style={{backgroundColor: '#115e54', flex: 1}}>
        <StatusBar barStyle='light-content'></StatusBar>
        <Navigation></Navigation>
      </SafeAreaView>
    </Provider>
   );
 };
 
 const styles = StyleSheet.create({
   
 });
 
 export default App;
 