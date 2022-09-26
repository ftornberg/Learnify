import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from 'react';
import agent from '../actions/agent';
import Checkout from '../component/Checkout';
import { setBasket } from '../redux/slice/basketSlice';
import { useAppDispatch } from '../redux/store/configureStore';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
	'pk_test_51LmAzTKGDhXTtuUTwDSGLndiKdrIouCv0xjK5HVT3WVgiqyz3QTXcPCG5f1VXJDwDeoTcqMsklixQtXqqk2Js0DG00AQBAnZAL'
);

export default function CheckoutPage() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		agent.Payments.paymentIntent()
			.then((basket) => dispatch(setBasket(basket)))
			.catch((error) => console.log(error));
	}, [dispatch]);

	return (
		<Elements stripe={stripePromise}>
			<Checkout />
		</Elements>
	);
}
