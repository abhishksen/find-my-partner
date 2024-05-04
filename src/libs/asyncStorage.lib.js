import AsyncStorage from "@react-native-async-storage/async-storage";

export const KEYS = {
	USER_DATA: "find_my_partner@user_data",
};

export const getUserData = async () => {
	try {
		const value = await AsyncStorage.getItem(KEYS.USER_DATA);
		if (value !== null) {
			return JSON.parse(value);
		}
		return null;
	} catch (e) {
		return null;
	}
};

export const setUserData = async (data = {}) => {
	const jsonValue = JSON.stringify(data);
	await AsyncStorage.setItem(KEYS.USER_DATA, jsonValue);
};
