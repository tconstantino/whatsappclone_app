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
import { initializeApp } from "firebase/app";
import { getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseConfig } from './config/firebase-config';

const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);

 const App = () => {
   return (
    <Provider store={store}>
      <SafeAreaView style={{backgroundColor: '#114d44', flex: 1}}>
        <StatusBar translucent={false} barStyle='light-content' backgroundColor='#114d44'></StatusBar>
        <Navigation></Navigation>
      </SafeAreaView>
    </Provider>
   );
 };
 
 const styles = StyleSheet.create({
   
 });
 
 export default App;
 