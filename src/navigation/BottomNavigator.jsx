import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import MatchesScreen from '../screens/Matches/MatchesScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileDetailsScreen from '../screens/Matches/ProfileDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    }
                    else if (route.name === 'Matches') {
                        iconName = 'heart';
                    } else if (route.name === 'Search') {
                        iconName = 'search';
                    } else if (route.name === 'Profile') {
                        iconName = 'user';
                    }

                    return <FontAwesome5 name={iconName} size={size} color={color} />;
                },
                headerShown: false,
            })}
            tabBarOptions={{
                activeTintColor: '#C41941',
                inactiveTintColor: '#777777',
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Matches" component={MatchesNavigator} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

const MatchesNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Matches'>
            <Stack.Screen name="Matches" component={MatchesScreen} />
            <Stack.Screen name="Profile Details" component={ProfileDetailsScreen} />
        </Stack.Navigator>
    );
}

export default BottomNavigator;
