import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { setCourseParams } from '../redux/slice/courseSlice';
import { useAppSelector } from '../redux/store/configureStore';

const Navigation = () => {
	const [sidebar, setSidebar] = useState(false);
	const [searchText, setSearchText] = useState('');

	const showSidebar = () => setSidebar(!sidebar);
	const { basket } = useAppSelector((state) => state.basket);
	const dispatch = useDispatch();
	const basketCount = basket?.items.length;

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchText(e.target.value);
	};

	const onSearch = (e: SyntheticEvent) => {
		e.preventDefault();
		dispatch(setCourseParams({ search: searchText }));
	};

	return (
		<div className="nav-container">
			<div className="nav">
				<div className="nav__left">
					<div className="nav__left__hamburger">
						<FaIcons.FaBars onClick={showSidebar} />
						<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
							<ul className="nav-menu-items" onClick={showSidebar}>
								<li className="cancel">
									<FaIcons.FaChevronLeft />
								</li>
								<li className="nav-menu-items__header">Navigation</li>
								<Link to="/">
									{' '}
									<li>Home</li>{' '}
								</Link>
								<Link to="/login">
									{' '}
									<li>Login</li>{' '}
								</Link>
							</ul>
						</nav>
					</div>

					<img className="nav__left__logo" src={Logo} alt="logo" />

					<ul className="nav__left__list">
						<Link to="/">
							<div className="nav__left__list__item">Home</div>
						</Link>
						<Link to="/login">
							<div className="nav__left__list__item">Login</div>
						</Link>
					</ul>
				</div>

				<div className="nav__right">
					<form onSubmit={onSearch} className="nav__right__search">
						<input
							type="text"
							className="nav__right__search__input"
							placeholder="Search Courses..."
							onChange={handleChange}
							value={searchText}
						/>
						<button className="nav__right__search__button">
							<FaIcons.FaSearch />
						</button>
					</form>
					<Link to={'/basket'}>
						<div className="nav__right__cart">
							<FaIcons.FaShoppingCart />
							{basketCount! > 0 && (
								<span className="nav__right__cart__count">{basketCount}</span>
							)}
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
