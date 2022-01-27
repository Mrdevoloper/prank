import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider as EnterProvider } from './Context/Enter';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<EnterProvider>
				<App />
			</EnterProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);
