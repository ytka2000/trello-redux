import { createCard } from "../../requests/createCard";
import { editCard } from "../../requests/editCard";
import { deleteCard } from "../../requests/deleteCard";
import { getCards } from "../../requests/getCards";
import { cardConstants } from "./constants";

const startCardsFetchAction = () => {
	return {
		type: cardConstants.CARDS_FETCH_REQUEST,
	};
};

const setCardsAction = data => {
	return {
		type: cardConstants.CARDS_FETCH_SUCCESS,
		payload: data,
	};
};

const setCardsErrorAction = () => {
	return {
		type: cardConstants.CARDS_FETCH_FAILURE,
	};
};

export const fetchCardsAction = () => {
	return dispatch => {
		dispatch(startCardsFetchAction());
		return getCards()
			.then(data => {
				dispatch(setCardsAction(data));
			})
			.catch(() => dispatch(setCardsErrorAction()));
	};
};

export const saveNewCardAction = data => {
	return {
		type: cardConstants.CARD_CREATE,
		payload: data,
	};
};

export const createNewCardAction = newCardData => {
	return dispatch => {
		const { id, ...card } = newCardData;
		dispatch(removeLocalCardAction(id));
		return createCard(card)
			.then(response => dispatch(saveNewCardAction(response)))
			.catch(e => console.log(e));
	};
};

const saveEditedCardAction = data => {
	return { type: cardConstants.CARD_EDIT, payload: data };
};

export const editCardAction = data => {
	return dispatch => {
		return editCard(data)
			.then(() => {
				dispatch(saveEditedCardAction(data));
			})
			.catch(e => console.log(e));
	};
};

const saveDeletedCardAction = id => {
	return { type: cardConstants.CARD_DELETE, payload: id };
};

export const deleteCardAction = id => {
	return dispatch => {
		return deleteCard(id)
			.then(dispatch(saveDeletedCardAction(id)))
			.catch(e => console.log(e));
	};
};

export const createLocalCardAction = data => {
	return { type: cardConstants.CARD_CREATE_LOCAL, payload: data };
};

export const removeLocalCardAction = id => {
	return { type: cardConstants.CARD_REMOVE_LOCAL, payload: id };
};
