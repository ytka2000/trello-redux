const initialState = {
	isLoading: true,
	isError: false,
	cards: [],
};

const cardReducer = (state = initialState, action) => {
	switch (action.type) {
		case "setCards":
			return {
				...state,
				cards: action.payload,
			};
		case "setCardsError":
			return {
				...state,
				isError: true,
			};
		case "startCardsLoading":
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case "finishCardsLoading":
			return {
				...state,
				isLoading: false,
			};
		case "createCard":
			const cardData = action.payload;
			return {
				...state,
				cards: [...state.cards, cardData],
			};
		case "editCard":
			const newCardData = action.payload;
			return {
				...state,
				cards: state.cards.map(card =>
					card.id === newCardData.id ? newCardData : card
				),
			};
		case "deleteCard":
			const cardIdToDelete = action.payload;
			return {
				...state,
				cards: state.cards.filter(card => card.id !== cardIdToDelete),
			};
		case "toggleEditMode":
			const cardId = action.payload;
			return {
				...state,
				cards: state.cards.map(card =>
					card.id === cardId ? { ...card, editMode: !card.editMode } : card
				),
			};
		default:
			return state;
	}
};

export default cardReducer;
