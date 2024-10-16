import './App.css';
import { AuthProvider } from './helpers/AuthContext';
import Router from './router/Router';

function App() {
	return (
		<>
			<AuthProvider>
				<Router />
			</AuthProvider>
		</>
	);
}

export default App;
