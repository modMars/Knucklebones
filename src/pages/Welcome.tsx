import { Link } from 'react-router-dom';

const Welcome = () => {
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
