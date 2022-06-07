export const getCardsFromStorage = () => state => state.cards;

export const getCardsDataFromStorage = () => state => state.cards.data;
export const getNewCardsFromStorage = () => state => state.cards.newCards;

export const getCardsDataByIdFromStorage = id => state =>
	state.cards.data.find(card => card.id === id);
