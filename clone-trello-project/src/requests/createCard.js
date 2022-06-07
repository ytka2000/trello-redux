import { CARD_URL } from "../utils/requestUrls";

export const createCard = async data => {
	const result = await fetch(CARD_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
		},
		body: JSON.stringify(data),
	});
	return result.json();
};
