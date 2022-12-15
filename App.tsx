/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { store } from './store'
import { Provider } from 'react-redux'
import Body from './android/components/body/body';
import Footer from './android/components/footer';
import Header from './android/components/header';



const App = () => {


  return (
    <Provider store = {store}>
        <SafeAreaView style ={{height : "100%"}}>
          <Header />
          <Body />
          <Footer />
        </SafeAreaView>
    </Provider>
    
  );
};

const styles = StyleSheet.create({
 
});

export default App;
