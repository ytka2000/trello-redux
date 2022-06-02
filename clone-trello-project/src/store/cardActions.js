import { createCard } from "../main/requests/createCard";
import { editCard } from "../main/requests/editCard";
import { deleteCard } from "../main/requests/deleteCard";

export const saveNewCardAction = data => {
	return {
		type: "createCard",
		payload: data,
	};
};

export const createNewCardAction = status => {
	return dispatch => {
		const newCardData = {
			title: "This is title",
			status: status,
			description: "This is description",
		};
		return createCard(newCardData)
			.then(response =>
				dispatch(saveNewCardAction({ ...response, editMode: true }))
			)
			.catch(e => console.log(e));
	};
};

const saveEditedCardAction = data => {
	return { type: "editCard", payload: data };
};

export const editCardAction = data => {
	return dispatch => {
		return editCard(data)
			.then(() => {
				dispatch(saveEditedCardAction(data));
				dispatch(toggleEditModeAction(data.id));
			})
			.catch(e => console.log(e));
	};
};

const saveDeletedCardAction = id => {
	return { type: "deleteCard", payload: id };
};

export const deleteCardAction = id => {
	return dispatch => {
		return deleteCard(id)
			.then(dispatch(saveDeletedCardAction(id)))
			.catch(e => console.log(e));
	};
};

export const toggleEditModeAction = id => {
	return { type: "toggleEditMode", payload: id };
};
