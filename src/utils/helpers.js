export function validateEmail(email) {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return regex.test(email);
}

export function validatePhoneNumber(number) {
	const regex = /^\d{10}$/;
	return regex.test(number);
}

export const APIerrorMessageHandler = (error) => {
	if (error?.response?.data?.message) {
		alert(error?.response?.data?.message);
		return;
	}
	console.log(error);
	alert("something went wrong!");
};
