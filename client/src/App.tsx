import React, { useCallback, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './sass/main.scss';
import 'antd/dist/antd.min.css';
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import Loading from './component/Loading';
import LoginPage from './pages/LoginPage';
import DetailPage from './pages/DetailPage';
import BasketPage from './pages/BasketPage';
import CoursePage from './pages/CoursePage';
import Navigation from './component/Navigation';
import Categories from './component/Categories';
import CheckoutPage from './pages/CheckoutPage';
import CategoryPage from './pages/CategoryPage';
import CreateCourse from './pages/CreateCourse';
import PrivateRoute from './component/PrivateRoute';
import InstructorPage from './pages/InstructorPage';
import DescriptionPage from './pages/DescriptionPage';
import { fetchCurrentUser } from './redux/slice/userSlice';
import { fetchBasketAsync } from './redux/slice/basketSlice';
import { useAppDispatch } from './redux/store/configureStore';
import { getCategoriesAsync } from './redux/slice/categorySlice';

function App() {
	const [loading, setLoading] = useState(true);
	const dispatch = useAppDispatch();

	const appInit = useCallback(async () => {
		try {
			await dispatch(fetchBasketAsync());
			await dispatch(fetchCurrentUser());
			await dispatch(getCategoriesAsync());
		} catch (error: any) {
			console.log(error);
		}
	}, [dispatch]);

	useEffect(() => {
		appInit().then(() => setLoading(false));
	}, [appInit]);

	if (loading) return <Loading />;

	return (
		<>
			<Navigation />
			<Route exact path="/" component={Categories} />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/login" component={LoginPage} />
				<Route exact path="/category/:id" component={CategoryPage} />
				<Route exact path="/course/:id" component={DescriptionPage} />
				<Route exact path="/basket" component={BasketPage} />
				<Route exact path="/detail" component={DetailPage} />
				<PrivateRoute
					exact
					path="/learn/:course/:lecture"
					component={CoursePage}
				/>
				<PrivateRoute exact path="/profile" component={Dashboard} />
				<PrivateRoute exact path="/checkout" component={CheckoutPage} />
				<PrivateRoute exact path="/instructor" component={InstructorPage} />
				<PrivateRoute
					exact
					path="/instructor/course"
					component={CreateCourse}
				/>
			</Switch>
		</>
	);
}

export default App;
