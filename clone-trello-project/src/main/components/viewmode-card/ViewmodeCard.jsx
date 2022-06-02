import React from "react";
import { useSelector } from "react-redux";
import Header from "../header/Header";

function ViewmodeCard({ id }) {
	const cards = useSelector(state => state.cardsObj.cards);

	const currentCard = cards.find(card => card.id === id);

	return (
		<div className="card">
			<div className="card-header">
				<h3 className="card-title">{currentCard.title}</h3>
				<Header id={id} />
			</div>
			<p className="card-description">{currentCard.description}</p>
		</div>
	);
}

export default ViewmodeCard;
