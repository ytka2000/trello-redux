import { getStatuses } from "../main/requests/getStatuses";

const saveColumnsAction = data => {
	return {
		type: "setColumns",
		payload: data,
	};
};

const setColumnsErrorAction = () => {
	return {
		type: "setColumnsError",
	};
};

const startColumnsLoadingAction = () => {
	return {
		type: "startColumnsLoading",
	};
};

const finishColumnsLoadingAction = () => {
	return {
		type: "finishColumnsLoading",
	};
};

export const updateColumnsAction = () => {
	return dispatch => {
		dispatch(startColumnsLoadingAction());
		return getStatuses()
			.then(data => dispatch(saveColumnsAction(data)))
			.catch(() => dispatch(setColumnsErrorAction()))
			.then(() => dispatch(finishColumnsLoadingAction()));
	};
};
