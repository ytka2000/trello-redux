const initialState = {
	isLoading: true,
	isError: false,
	statuses: [],
};

const columnReducer = (state = initialState, action) => {
	switch (action.type) {
		case "setColumns":
			return {
				...state,
				statuses: action.payload,
			};
		case "setColumnsError":
			return {
				...state,
				isError: true,
			};
		case "startColumnsLoading":
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case "finishColumnsLoading":
			return {
				...state,
				isLoading: false,
			};
		default:
			return state;
	}
};

export default columnReducer;
