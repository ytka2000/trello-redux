import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCardsAction } from "../../../store/cardListActions";

const useCards = () => {
	const { cards, isLoading, isError } = useSelector(state => state.cardsObj);
	const dispatch = useDispatch();

	const getCardsData = () => {
		dispatch(updateCardsAction());
	};

	useEffect(() => {
		getCardsData();
	}, []);

	return {
		cardsData: cards,
		isLoading: isLoading,
		isError: isError,
		refetchCards: getCardsData,
	};
};

export default useCards;
