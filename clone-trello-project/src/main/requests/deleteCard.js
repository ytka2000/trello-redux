import { CARD_URL } from "../utils/requestUrls";

export const deleteCard = cardId => {
	return fetch(CARD_URL + "/" + cardId, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
		},
	});
};
