import React from 'react';
import './App.scss';

import Entered from './Entered';
import Unentered from './Unentered';

import { Context } from './Context/Enter';

function App() {
	const { token } = React.useContext(Context);

	if (token) {
		return <Entered />;
	} else {
		return <Unentered />;
	}
}

export default App;
