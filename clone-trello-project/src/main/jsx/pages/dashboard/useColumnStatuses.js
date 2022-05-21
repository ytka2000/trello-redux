import { useState, useEffect } from "react";
import { getStatuses } from "../../../js/request/getStatuses";

const useColumnStatuses = v => {
	const [columns, setColumns] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const getColumns = async () => {
		try {
			const data = await getStatuses();
			setColumns(data);
		} catch (e) {
			setIsError(true);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getColumns();
	}, [, v]);

	return {
		columns,
		isLoadingColumns: isLoading,
		isErrorColumns: isError,
	};
};

export default useColumnStatuses;
