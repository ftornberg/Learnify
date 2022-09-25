import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './sass/main.scss';
import 'antd/dist/antd.min.css';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import DetailPage from './pages/DetailPage';
import BasketPage from './pages/BasketPage';
import Navigation from './component/Navigation';
import Categories from './component/Categories';
import CategoryPage from './pages/CategoryPage';
import DescriptionPage from './pages/DescriptionPage';
import { useAppDispatch } from './redux/store/configureStore';
import { fetchBasketAsync } from './redux/slice/basketSlice';
import Dashboard from './pages/Dashboard';
import { getUser } from './redux/slice/userSlice';
import PrivateRoute from './component/PrivateRoute';

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchBasketAsync());
		dispatch(getUser());
	}, [dispatch]);

	return (
		<>
			<Navigation />
			<Route exact path="/" component={Categories} />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/category/:id" component={CategoryPage} />
				<Route exact path="/course/:id" component={DescriptionPage} />
				<Route exact path="/login" component={LoginPage} />
				<Route exact path="/basket" component={BasketPage} />
				<Route exact path="/detail" component={DetailPage} />
				<PrivateRoute exact path="/profile" component={Dashboard} />
			</Switch>
		</>
	);
}

export default App;
