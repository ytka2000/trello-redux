import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchColumnsAction } from "../../store/columns/actions";
import { getColumnsFromStorage } from "../../store/columns/selectors";

const useColumnStatuses = () => {
	const { data, isLoading, isError } = useSelector(getColumnsFromStorage);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchColumnsAction());
	}, []);

	return {
		data,
		isLoading,
		isError,
	};
};

export default useColumnStatuses;
