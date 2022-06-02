import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStatuses } from "../../requests/getStatuses";

const useColumnStatuses = () => {
	const { statuses, isLoading, isError } = useSelector(
		state => state.columnsObj
	);
	const dispatch = useDispatch();

	const getColumns = async () => {
		try {
			const data = await getStatuses();
			dispatch({ type: "setStatuses", payload: data });
		} catch (e) {
			dispatch({ type: "setColumnsError" });
		} finally {
			dispatch({ type: "finishColumnsLoading" });
		}
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
