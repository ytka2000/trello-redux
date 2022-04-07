import { STATUS_URL } from "../utils/requestUrls";

export const getStatuses = async () => {
	const result = await fetch(STATUS_URL, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
		},
	});
	return result.json();
};
