import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigation/AuthNavigator";
import MainNavigator from "./src/navigation/MainNavigator";
import UserDataContext from "./src/context/UserData.context";

const App = () => (
	<UserDataContext>
		<NavigationContainer>
			<MainNavigator />
		</NavigationContainer>
	</UserDataContext>
);

export default App;
