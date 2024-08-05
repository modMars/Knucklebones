import { useEffect, useState } from 'react';
import { redirect } from 'react-router-dom';
const Register = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [success, setSuccess] = useState(false);

	const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			await fetch('http://localhost:3001/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ username: username, password: password }),
				mode: 'cors',
			});
			setSuccess(true);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		setTimeout(() => {
			redirect('/');
		}, 2000);
	}, [success]);

	return (
		<>
			<form onSubmit={handleForm}>
				<label htmlFor='username'>Username</label>
				<input type='text' name='username' onChange={e => setUsername(e.target.value)} />
				<label htmlFor='password'>Password</label>
				<input type='password' name='password' onChange={e => setPassword(e.target.value)} />
				<button type='submit'>Register account</button>
			</form>
			{success && <p>Account registered successfully!</p>}
		</>
	);
};
export default Register;
