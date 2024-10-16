import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isLogged, setIsLogged] = useState(false);

	const isUserLoggedIn = () => {
		return document.cookie.split(';').some(item => item.trim().startsWith('authToken='));
	};

	useEffect(() => {
		setIsLogged(isUserLoggedIn());
	}, []);

	return <AuthContext.Provider value={{ isLogged, isUserLoggedIn }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	return useContext(AuthContext);
};
