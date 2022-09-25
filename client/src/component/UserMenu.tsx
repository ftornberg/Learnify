import { Dropdown, Menu } from 'antd';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { signOut } from '../redux/slice/userSlice';

const UserMenu = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const signout = () => {
		dispatch(signOut());
		history.push('/');
	};

	const menu = (
		<Menu>
			<Menu.Item>
				<Link to="/profile">Profile</Link>
			</Menu.Item>
			<Menu.Item>
				<div onClick={signout}>Logout</div>
			</Menu.Item>
		</Menu>
	);

	return (
		<Dropdown overlay={menu} placement={'bottomCenter'}>
			<div className="dropdown">Menu</div>
		</Dropdown>
	);
};

export default UserMenu;
