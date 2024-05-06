import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigator from "./AuthNavigator";
import HomeScreen from "../screens/Home/HomeScreen";
import BottomNavigator from "./BottomNavigator";
import ProfileCreationScreen from "../screens/Auth/ProfileCreationScreen";
import * as asyncStorage from "../libs/asyncStorage.lib";
import { useUserContext } from "../context/UserData.context";
// import other navigators for main app screens

const Stack = createStackNavigator();

const MainNavigator = () => {
	const { setuser } = useUserContext();
	const [isLoading, setisLoading] = useState(true);

	useEffect(() => {
		async function run() {
			try {
				const u = await asyncStorage.getUserData();
				setuser(u);
			} catch (error) {
				console.log(error);
			} finally {
				setisLoading(false);
			}
		}

		run();
	}, []);

	if (isLoading) {
		return (
			<View style={styles.container}>
				<Text>Loading...</Text>
			</View>
		);
	}

	return (
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
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
});

export default MainNavigator;
