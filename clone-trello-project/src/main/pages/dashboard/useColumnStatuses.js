import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateColumnsAction } from "../../../store/columnActions";

const useColumnStatuses = () => {
	const { statuses, isLoading, isError } = useSelector(
		state => state.columnsObj
	);

	const dispatch = useDispatch();

	const getColumns = () => {
		dispatch(updateColumnsAction());
	};

	useEffect(() => {
		getColumns();
	}, []);

	return {
		columnsData: statuses,
		isLoading: isLoading,
		isError: isError,
	};
};

export default useColumnStatuses;
