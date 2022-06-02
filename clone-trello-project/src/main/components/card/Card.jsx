import React from "react";
import ViewmodeCard from "../viewmode-card/ViewmodeCard";
import EditmodeCard from "../editmode-card/EditmodeCard";
import { useSelector } from "react-redux";

function Card({ id }) {
	const cards = useSelector(state => state.cardsObj.cards);

	const currentCard = cards.find(card => card.id === id);

	return (
		<>
			{currentCard.editMode ? (
				<EditmodeCard id={id} />
			) : (
				<ViewmodeCard id={id} />
			)}
		</>
	);
}

export default Card;
