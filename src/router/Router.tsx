import { Route, Routes } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login';
import Play from '../pages/Play';
import Register from '../pages/Register';
import Welcome from '../pages/Welcome';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Welcome />} />
			<Route path='/register' element={<Register />} />
			<Route path='/login' element={<Login />} />
			<Route path='/play' element={<Play />} />
			{/* <Route path='shop/:id' element={<ItemDescription items={items} handleElementAdd={handleElementAdd} />} /> */}
			<Route path='*' element={<ErrorPage />} />
		</Routes>
	);
};

export default Router;
