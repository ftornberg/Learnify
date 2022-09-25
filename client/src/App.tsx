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
import agent from './actions/agent';
import { useAppDispatch } from './redux/store/configureStore';
import { setBasket } from './redux/slice/basketSlice';
import Dashboard from './pages/Dashboard';

function App() {
	const dispatch = useAppDispatch();

	function getCookie(name: string) {
		return (
			document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() ||
			''
		);
	}

	useEffect(() => {
		const clientId = getCookie('clientId');

		if (clientId) {
			agent.Baskets.get()
				.then((response) => {
					dispatch(setBasket(response));
				})
				.catch((error) => console.log(error));
		}
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
				<Route exact path="/profile" component={Dashboard} />
			</Switch>
		</>
	);
}

export default App;
