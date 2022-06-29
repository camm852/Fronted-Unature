import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';

export default function RoutesApp() {
	return (
		<Router>
			<Routes>
				<Route element={<App />} path='/' />
			</Routes>
		</Router>
	);
}
