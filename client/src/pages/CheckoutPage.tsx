import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Checkout from './Checkout';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
	'pk_test_51LmAzTKGDhXTtuUTwDSGLndiKdrIouCv0xjK5HVT3WVgiqyz3QTXcPCG5f1VXJDwDeoTcqMsklixQtXqqk2Js0DG00AQBAnZAL'
);

export default function CheckoutPage() {
	return (
		<Elements stripe={stripePromise}>
			<Checkout />
		</Elements>
	);
}
