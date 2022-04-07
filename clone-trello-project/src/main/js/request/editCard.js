import { CARD_URL } from "../utils/requestUrls";

export const editCard = async (id, data) => {
	const result = await fetch(CARD_URL + "/" + id, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
		},
		body: JSON.stringify(data),
	});
	return result.json();
};
