import { getCards } from "../main/requests/getCards";

const saveCardsAction = data => {
	return {
		type: "setCards",
		payload: data,
	};
};

const setCardsErrorAction = () => {
	return {
		type: "setCardsError",
	};
};

const startCardsLoadingAction = () => {
	return {
		type: "startCardsLoading",
	};
};

const finishCardsLoadingAction = () => {
	return {
		type: "finishCardsLoading",
	};
};

export const updateCardsAction = () => {
	return dispatch => {
		dispatch(startCardsLoadingAction());
		return getCards()
			.then(data => {
				const cards = data.map(item => ({ ...item, editStatus: false }));
				dispatch(saveCardsAction(cards));
			})
			.catch(() => dispatch(setCardsErrorAction()))
			.then(() => dispatch(finishCardsLoadingAction()));
	};
};
