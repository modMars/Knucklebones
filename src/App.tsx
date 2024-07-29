import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:3001', {
	withCredentials: true,
	extraHeaders: {
		'my-custom-header': 'abcd',
	},
});

console.log(socket);

function App() {
	const [input, setInput] = useState('');
	const [messages, setMessages] = useState([]);

	const sendMessage = () => {
		socket.emit('send_message', { message: input });
	};

	useEffect(() => {
		socket.on('receive_message', data => {
			setMessages(prev => {
				return [...prev, data.message];
			});
		});
	}, [socket]);

	return (
		<>
			<div>
				<h1>Hello world</h1>
				<input
					placeholder='Message..'
					type='text'
					onChange={e => {
						setInput(e.target.value);
					}}
				/>
				<button onClick={sendMessage}>Send Message</button>
			</div>
			<div>
				{messages.map((message, i) => (
					<p key={i}>{message}</p>
				))}
			</div>
		</>
	);
}

export default App;
