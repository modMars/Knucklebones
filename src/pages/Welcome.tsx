import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../helpers/AuthContext';

const Welcome = () => {
	const navigate = useNavigate();
	const { isLogged } = useAuth();

	useEffect(() => {
		if (isLogged) {
			navigate('/play');
		}
	}, [navigate, isLogged]);

	return (
		<>
			<h1>Knucklebones..</h1>
			<Link to='register'>Click here to register!</Link>
			<br></br>
			<Link to='login'>Already registered? Login here!</Link>
		</>
	);
};

export default Welcome;
