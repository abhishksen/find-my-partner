import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator';
import HomeScreen from '../screens/Home/HomeScreen';
import BottomNavigator from './BottomNavigator';
import ProfileCreationScreen from '../screens/Auth/ProfileCreationScreen';
// import other navigators for main app screens

const Stack = createStackNavigator();

const MainNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Auth"
            component={AuthNavigator}
            options={{ headerShown: false }} // Hide header for AuthNavigator
        />
        <Stack.Screen
            name="Main"
            component={BottomNavigator}
            options={{ headerShown: false }} // Hide header for BottomNavigator
        />
    </Stack.Navigator>
);

export default MainNavigator;
