import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCards } from "../../requests/getCards";

const useCards = () => {
	const { cards, isLoading, isError } = useSelector(state => state.cardsObj);
	const dispatch = useDispatch();

	const getCardsData = async () => {
		try {
			const data = await getCards();
			const cardsList = data.map(elem => ({ ...elem, editStatus: false }));
			dispatch({ type: "setCards", payload: cardsList });
		} catch (e) {
			dispatch({ type: "setCardsError" });
		} finally {
			dispatch({ type: "finishCardsLoading" });
		}
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
