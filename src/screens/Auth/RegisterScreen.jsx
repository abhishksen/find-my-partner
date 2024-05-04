import React from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

import { validateEmail, validatePhoneNumber } from "../../utils/helpers";
import * as userAPIS from "../../apis/users.apis";
import * as asyncStorage from "../../libs/asyncStorage.lib";
import * as helpers from "../../utils/helpers";

import { useUserContext } from "../../context/UserData.context";

const RegisterScreen = ({ navigation }) => {
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [phone, setPhone] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [confirmPassword, setConfirmPassword] = React.useState("");

	const [isLoading, setIsLoading] = React.useState(false);

	const { setuser } = useUserContext();

	// const navigation = useNavigation();

	const handleRegister = async () => {
		const data = {
			name: name.trim(),
			email: email.trim(),
			password: password.trim(),
			phoneNumber: phone.trim(),
		};

		if (!data.name) {
			alert("invalid name!");
			return;
		}
		if (!validateEmail(data.email)) {
			alert("invalid email!");
			return;
		}
		if (!validatePhoneNumber(data.phoneNumber)) {
			alert("invalid phone!");
			return;
		}

		if (!data.password) {
			alert("Please provide password!");
			return;
		}

		if (data.password !== confirmPassword) {
			alert("Passwords do not match!");
			return;
		}

		setIsLoading(true);

		try {
			const responseData = await userAPIS.registerUser(data);
			await asyncStorage.setUserData(responseData);
			setuser(responseData);
			navigation.navigate("ProfileCreation");
		} catch (error) {
			helpers.APIerrorMessageHandler(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Let's Get Started!</Text>
			<TextInput
				style={styles.input}
				placeholder="Name"
				value={name}
				onChangeText={setName}
			/>
			<TextInput
				style={styles.input}
				placeholder="Email"
				value={email}
				onChangeText={setEmail}
			/>
			<TextInput
				style={styles.input}
				placeholder="10 Digit Phone Number"
				value={phone}
				onChangeText={setPhone}
			/>
			<TextInput
				style={styles.input}
				placeholder="Password"
				value={password}
				onChangeText={setPassword}
				secureTextEntry
			/>
			<TextInput
				style={styles.input}
				placeholder="Confirm Password"
				value={confirmPassword}
				onChangeText={setConfirmPassword}
				secureTextEntry
			/>
			<Pressable
				style={styles.btn}
				disabled={isLoading}
				onPress={handleRegister}>
				<Text style={styles.btnText}>
					{isLoading ? "Loading..." : "Register"}
				</Text>
			</Pressable>
			<Text style={styles.switchText}>
				Already have an account?{" "}
				<Text
					style={styles.switchLink}
					onPress={() => navigation.navigate("Login")}>
					Login
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

export default RegisterScreen;
