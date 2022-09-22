export const UPDATE_VISIT = 'UPDATE_VISIT';

export interface LoginState {
	visits: number;
}

//Action Reducer
export const initialState: LoginState = {
	visits: 1,
};

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
