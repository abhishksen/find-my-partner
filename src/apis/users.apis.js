import axios from "../libs/axios";
import * as asyncStorage from "../libs/asyncStorage.lib";

export const registerUser = async (
	body = {
		name: "",
		email: "",
		password: "",
		phoneNumber: "",
	}
) => {
	const { data } = await axios.post("users/register", body);

	return data;
};

export const login = async (
	body = {
		email: "",
		password: "",
	}
) => {
	const { data } = await axios.post("users/login", body);

	return data;
};

export const onboardUser = async (
	body = {
		basic_details: {},
		education: {},
		family_details: {},
		partner_pref: {},
		verification: {},
		user_id: {},
	}
) => {
	const { data } = await axios.post("users/onboard", body);

	return data;
};

export const getMatches = async () => {
	const { data } = await axios.get("users/matches");

	return data;
};
