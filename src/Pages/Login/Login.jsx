import React from 'react';
import { Context } from '../../Context/Enter';

function Login() {
	const { setToken } = React.useContext(Context);

	const handleSubmit = (evt) => {
		evt.preventDefault();

		const { user_email, user_password } = evt.target.elements;

		fetch('https://reqres.in/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},

			body: JSON.stringify({
				email: user_email.value.trim(),
				password: user_password.value.trim(),
			}),
		})
			.then((response) => response.json())
			.then((data) => setToken(data?.token));
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type='email'
					defaultValue='eve.holt@reqres.in'
					name='user_email'
				/>
				<input
					type='password'
					defaultValue='cityslicka'
					name='user_password'
				/>

				<button>Log In</button>
			</form>
		</>
	);
}

export default Login;
