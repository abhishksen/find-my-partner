import React, { useContext, createContext, useState } from "react";

const UserContext = createContext({});

const UserDataContext = ({ children }) => {
	const [user, setuser] = useState(null);

	const value = {
		user,
		setuser,
	};

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserDataContext;

export const useUserContext = () => useContext(UserContext);
