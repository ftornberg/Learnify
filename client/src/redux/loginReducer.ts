import { initialState } from './slice/loginSlice';

export const UPDATE_VISIT = 'UPDATE_VISIT';

//Action Type
export function increment(amount = 1) {
	return {
		type: UPDATE_VISIT,
		payload: amount,
	};
}

//Reducer
export default function loginReducer(state = initialState, action: any) {
	switch (action.type) {
		case UPDATE_VISIT:
			return {
				...state,
				visits: state.visits + action.payload,
			};

		default:
			return state;
	}
}
