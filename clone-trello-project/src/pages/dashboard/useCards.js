import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCardsAction } from "../../store/cards/actions";
import { getCardsFromStorage } from "../../store/cards/selectors";

const useCards = () => {
	const { data, isLoading, isError } = useSelector(getCardsFromStorage());
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCardsAction());
	}, []);

	return {
		data,
		isLoading,
		isError,
	};
};

export default useCards;
