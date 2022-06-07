import {
	COLUMNS_FETCH_REQUEST,
	COLUMNS_FETCH_SUCCESS,
	COLUMNS_FETCH_FAILURE,
} from "./constants";

const initialState = {
	isLoading: true,
	isError: false,
	data: [],
};

const columnReducer = (state = initialState, action) => {
	switch (action.type) {
		case COLUMNS_FETCH_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case COLUMNS_FETCH_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false,
			};
		case COLUMNS_FETCH_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		default:
			return state;
	}
};

export default columnReducer;
