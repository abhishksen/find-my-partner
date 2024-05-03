import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import OnboardingWelcomeScreen from '../screens/Auth/OnboardingWelcomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import ProfileCreationScreen from '../screens/Auth/ProfileCreationScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={OnboardingWelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileCreation" component={ProfileCreationScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
);

export default AuthNavigator;
