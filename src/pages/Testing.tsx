import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import './App.css';
import gameBoard from './helpers/board';

const socket = io('http://localhost:3001', {
	withCredentials: true,
	extraHeaders: {
		'my-custom-header': 'abcd',
	},
});
const Testing = () => {
	const [input, setInput] = useState<string>('');
	const [messages, setMessages] = useState<string[]>([]);

	const sendMessage = () => {
		socket.emit('send_message', { message: input });
	};

	useEffect(() => {
		socket.on('receive_message', (data: { message: string }) => {
			setMessages(prev => {
				return [...prev, data.message];
			});
		});
	}, []);

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
};

export default Testing;
