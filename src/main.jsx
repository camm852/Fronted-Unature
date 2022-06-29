import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import RoutesApp from './router/RoutesApp';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RoutesApp>
			<App />
		</RoutesApp>
	</React.StrictMode>
);
