import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './sass/main.scss';
import 'antd/dist/antd.min.css';
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import DetailPage from './pages/DetailPage';
import BasketPage from './pages/BasketPage';
import CheckoutPage from './pages/CheckoutPage';
import Navigation from './component/Navigation';
import Categories from './component/Categories';
import CategoryPage from './pages/CategoryPage';
import PrivateRoute from './component/PrivateRoute';
import DescriptionPage from './pages/DescriptionPage';
import { fetchCurrentUser } from './redux/slice/userSlice';
import { fetchBasketAsync } from './redux/slice/basketSlice';
import { useAppDispatch } from './redux/store/configureStore';

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchBasketAsync());
		dispatch(fetchCurrentUser());
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
				<PrivateRoute exact path="/checkout" component={CheckoutPage} />
			</Switch>
		</>
	);
}

export default App;
