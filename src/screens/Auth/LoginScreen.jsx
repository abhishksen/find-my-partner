import React from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

import * as userAPIS from "../../apis/users.apis";
import * as helpers from "../../utils/helpers";
import * as asyncStorage from "../../libs/asyncStorage.lib";

import { useUserContext } from "../../context/UserData.context";

const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [isLoading, setisLoading] = React.useState(false);

	const { setuser } = useUserContext();

	const handleLogin = async () => {
		// Implement login logic

		const body = {
			email: email?.trim(),
			password: password?.trim(),
		};

		if (!body.email) {
			alert("Please enter email");
			return;
		}

		if (!body.password) {
			alert("Please enter pasword");
			return;
		}

		try {
			setisLoading(true);
			const d = await userAPIS.login({
				email: body.email,
				password: body.password,
			});
			setuser(d);
			await asyncStorage.setUserData(d);
			navigation.navigate("Main");
		} catch (error) {
			helpers.APIerrorMessageHandler(error);
		} finally {
			setisLoading(false);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome Back!</Text>
			<TextInput
				style={styles.input}
				placeholder="Email"
				value={email}
				onChangeText={setEmail}
			/>
			<TextInput
				style={styles.input}
				placeholder="Password"
				value={password}
				onChangeText={setPassword}
				secureTextEntry
			/>
			<Pressable style={styles.btn} disabled={isLoading} onPress={handleLogin}>
				<Text style={styles.btnText}>{isLoading ? "Loading..." : "Login"}</Text>
			</Pressable>
			<Text style={styles.switchText}>
				Don't have an account?{" "}
				<Text
					style={styles.switchLink}
					onPress={() => navigation.navigate("Register")}>
					Register
				</Text>
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 24,
		color: "#C41941",
		marginBottom: 20,
	},
	input: {
		backgroundColor: "#FFFFFF",
		width: "80%",
		borderBottomColor: "#C41941",
		borderBottomWidth: 1,
		marginVertical: 10,
		padding: 10,
		borderRadius: 5,
	},
	btn: {
		width: "80%",
		marginTop: 10,
		paddingVertical: 4,
		borderRadius: 5,
		backgroundColor: "#C41941",
		color: "#FFFFFF",
	},
	btnText: {
		color: "#FFFFFF",
		padding: 10,
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
	},
	switchText: {
		marginTop: 20,
		color: "#333",
	},
	switchLink: {
		color: "#C41941",
	},
});

export default LoginScreen;
