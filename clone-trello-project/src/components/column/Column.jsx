import React from "react";
import NewCard from "../new-card/NewCard";
import Card from "../card/Card";
import List from "../../utils/sorting";
import { useSelector } from "react-redux";
import {
	getCardsDataFromStorage,
	getNewCardsFromStorage,
} from "../../store/cards/selectors";

function Column({ name, statusValue }) {
	const cards = useSelector(getCardsDataFromStorage());
	const newCards = useSelector(getNewCardsFromStorage());

	const cardsByStatusAndDate = cards
		.filter(card => card.status === statusValue)
		.sort(List.sortByDateCreatedAt);

	const newCardsByStatus = newCards.filter(card => card.status === statusValue);

	const allCards = [...newCardsByStatus, ...cardsByStatusAndDate];

	return (
		<div className="column">
			<h2>{name}</h2>
			<NewCard status={statusValue} />
			{allCards.map(card => (
				<Card key={card.id} card={card} />
			))}
		</div>
	);
}

export default Column;
