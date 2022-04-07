import { CARD_URL } from "../utils/requestUrls";

export const getCards = async () => {
	const result = await fetch(CARD_URL, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
		},
	});
	return result.json();
};
