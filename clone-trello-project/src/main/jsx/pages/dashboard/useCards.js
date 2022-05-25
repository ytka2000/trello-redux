import { useState, useEffect } from "react";
import { getCards } from "../../../js/request/getCards";

const useCards = () => {
	const [cards, setCards] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const getCardsData = async () => {
		try {
			const data = await getCards();
			setCards(() => data.map(elem => ({ ...elem, editStatus: false })));
		} catch (e) {
			setIsError(true);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getCardsData();
	}, []);

	return {
		cards,
		isLoadingCards: isLoading,
		isErrorCards: isError,
		refetchCards: getCardsData,
	};
};

export default useCards;
