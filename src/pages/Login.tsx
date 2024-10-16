import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [success, setSuccess] = useState(false);
	const navigate = useNavigate();

	const handleLogin = async (event: React.FormEvent) => {
		event.preventDefault();
		try {
			const res = await fetch('http://localhost:3001/login', {
				headers: {
					'Content-Type': 'application/json',
				},
				mode: 'cors',
				method: 'POST',
				body: JSON.stringify({ username: username, password: password }),
			});

			if (res.ok) {
				const data = await res.json();
				document.cookie = `authToken=${data.token}; path=/;`;
				navigate('/play');
			} else {
				console.error('Login failed');
			}
		} catch (err: any) {
			console.error(err.message);
		}
	};

	return (
		<div>
			<form action='http://localhost:3001/login' onSubmit={handleLogin}>
				<label htmlFor='username'>Username</label>
				<input type='text' name='username' onChange={e => setUsername(e.target.value)} />
				<label htmlFor='password'>Password</label>
				<input type='password' onChange={e => setPassword(e.target.value)} />
				<button type='submit'>Login</button>
			</form>
			{success && <p>Successfully logged in!, setting up auth cookies..</p>}
		</div>
	);
};

export default Login;
