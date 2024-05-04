import { useUserContext } from "../context/UserData.context";

const useUserData = () => {
	const user = useUserContext();

	return user.user;
};

export default useUserData;
