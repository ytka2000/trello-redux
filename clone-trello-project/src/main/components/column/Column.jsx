import React from "react";
import NewCard from "../new-card/NewCard";
import Card from "../card/Card";
import List from "../../utils/sorting";
import { useSelector } from "react-redux";

function Column({ name, statusValue }) {
	const columnCards = useSelector(state => state.cardsObj.cards);

	const filteredCards = columnCards.filter(card => card.status === statusValue);

	return (
		<div className="column">
			<h2>{name}</h2>
			<NewCard status={statusValue} />
			{filteredCards.sort(List.sortByDateCreatedAt).map(columnCard => (
				<Card key={columnCard.id} id={columnCard.id} />
			))}
		</div>
	);
}

export default Column;
