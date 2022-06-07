import { getStatuses } from "../../requests/getStatuses";
import {
	COLUMNS_FETCH_REQUEST,
	COLUMNS_FETCH_SUCCESS,
	COLUMNS_FETCH_FAILURE,
} from "./constants";

const startColumnsFetchAction = () => {
	return {
		type: COLUMNS_FETCH_REQUEST,
	};
};

const setColumnsAction = data => {
	return {
		type: COLUMNS_FETCH_SUCCESS,
		payload: data,
	};
};

const setColumnsErrorAction = () => {
	return {
		type: COLUMNS_FETCH_FAILURE,
	};
};

export const fetchColumnsAction = () => {
	return dispatch => {
		dispatch(startColumnsFetchAction());
		return getStatuses()
			.then(data => dispatch(setColumnsAction(data)))
			.catch(() => dispatch(setColumnsErrorAction()));
	};
};
