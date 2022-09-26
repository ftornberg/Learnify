import { Component, ComponentType } from 'react';
import {
	Redirect,
	Route,
	RouteChildrenProps,
	RouteProps,
} from 'react-router-dom';
import { useAppSelector } from '../redux/store/configureStore';

interface Props extends RouteProps {
	component: ComponentType<RouteChildrenProps<any> | ComponentType<any>>;
}

const PrivateRoute = ({ component: Component, ...rest }: Props) => {
	const { user } = useAppSelector((state) => state.user);

	return (
		<Route
			{...rest}
			render={(props) =>
				user ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: '/login',
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
