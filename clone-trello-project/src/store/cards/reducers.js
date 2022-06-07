import { cardConstants } from "./constants";

const initialState = {
	isLoading: true,
	isError: false,
	data: [],
	newCards: [],
};

const cardReducer = (state = initialState, action) => {
	switch (action.type) {
		case cardConstants.CARDS_FETCH_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case cardConstants.CARDS_FETCH_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false,
			};
		case cardConstants.CARDS_FETCH_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		case cardConstants.CARD_CREATE:
			const cardData = action.payload;
			return {
				...state,
				data: [...state.data, cardData],
			};
		case cardConstants.CARD_EDIT:
			const newCardData = action.payload;
			return {
				...state,
				data: state.data.map(card =>
					card.id === newCardData.id ? newCardData : card
				),
			};
		case cardConstants.CARD_DELETE:
			const cardIdToDelete = action.payload;
			return {
				...state,
				data: state.data.filter(card => card.id !== cardIdToDelete),
			};
		case cardConstants.CARD_CREATE_LOCAL:
			const cardToCreate = action.payload;
			return {
				...state,
				newCards: [...state.newCards, cardToCreate],
			};
		case cardConstants.CARD_REMOVE_LOCAL:
			const cardIdToRemove = action.payload;
			return {
				...state,
				newCards: state.newCards.filter(card => card.id !== cardIdToRemove),
			};
		default:
			return state;
	}
};

export default cardReducer;
