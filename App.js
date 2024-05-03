import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigation/AuthNavigator';
import MainNavigator from './src/navigation/MainNavigator';

const App = () => (
  <NavigationContainer>
    {/* <StatusBar /> */}
    <MainNavigator />
  </NavigationContainer>
);

export default App;
