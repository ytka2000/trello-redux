import { createStore } from "redux";

const initialState = {
	columnsObj: { isLoading: true, isError: false, statuses: [] },
	cardsObj: { isLoading: true, isError: false, cards: [] },
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "setStatuses":
			return {
				...state,
				columnsObj: { ...state.columnsObj, statuses: action.payload },
			};
		case "setColumnsError":
			return {
				...state,
				columnsObj: { ...state.columnsObj, isError: true },
			};
		case "finishColumnsLoading":
			return {
				...state,
				columnsObj: { ...state.columnsObj, isLoading: false },
			};
		case "setCards":
			return {
				...state,
				cardsObj: { ...state.cardsObj, cards: action.payload },
			};
		case "setCardsError":
			return {
				...state,
				cardsObj: { ...state.cardsObj, isError: true },
			};
		case "finishCardsLoading":
			return {
				...state,
				cardsObj: { ...state.cardsObj, isLoading: false },
			};
		case "createCard":
			const cardData = action.payload;
			return {
				...state,
				cardsObj: {
					...state.cardsObj,
					cards: [...state.cardsObj.cards, cardData],
				},
			};
		case "editCard":
			const newCardData = action.payload;
			return {
				...state,
				cardsObj: {
					...state.cardsObj,
					cards: [...state.cardsObj.cards].map(card =>
						card.id === newCardData.id ? newCardData : card
					),
				},
			};
		case "deleteCard":
			const cardIdToDelete = action.payload;
			return {
				...state,
				cardsObj: {
					...state.cardsObj,
					cards: [...state.cardsObj.cards].filter(
						card => card.id !== cardIdToDelete
					),
				},
			};
		case "toggleEditMode":
			const cardId = action.payload;
			return {
				...state,
				cardsObj: {
					...state.cardsObj,
					cards: [...state.cardsObj.cards].map(card =>
						card.id === cardId ? { ...card, editMode: !card.editMode } : card
					),
				},
			};
		default:
			return { ...state };
	}
};

const store = createStore(reducer);

export default store;
