import React from 'react';

import { NavLink } from 'react-router-dom';

const Header = function () {
	const [users, setUsers] = React.useState([]);
	const [isLoading, setLoading] = React.useState(true);
	React.useEffect(() => {
		(async () => {
			const response = await fetch('https://reqres.in/api/users');
			const data = await response.json();

			if (data?.data?.length > 0) {
				setUsers([...data.data]);
				setLoading(false);
			}
		})();
	}, []);
	console.log(users);

	return (
		<>
			<h1>Home</h1>

			{isLoading && <h1>Loading ...</h1>}
			<div className='includes'>
				<div className='wrap'>
					{users.length > 0 &&
						users.map((user) => (
							<div key={user.id} className='includes__User'>
								<NavLink to={'profile/' + user.id}>
									<div className='includes__user1'>
										<NavLink to={'profile/' + user.id}>
											<img
												className='includes__pic2'
												src={user.avatar}
												alt=''
											/>
										</NavLink>

										<div className='includes__NamePoint'>
											<li
												key={user.id}
												className='includes__nameLink'>
												<NavLink
													className='salom'
													to={'profile/' + user.id}>
													{user.first_name}
												</NavLink>
												<NavLink
													to={'profile/' + user.id}>
													{user.email}
												</NavLink>
												<span>25m</span>
											</li>
										</div>
										<div className='insludes__text'>
											<li>
												Twitterdagi ayol-erkak
												qarama-qarshiliginglardan
												o'zinglar zerikmadinglarmi?
											</li>
										</div>
									</div>
								</NavLink>
							</div>
						))}
				</div>
			</div>
		</>
	);
};
export default Header;
