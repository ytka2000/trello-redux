import React, { useState } from "react";
import Header from "../header/Header";
import StatusSelect from "../statuses/StatusSelect";
import Footer from "../footer/Footer";
import { useSelector } from "react-redux";

function EditmodeCard({ id }) {
	const cards = useSelector(state => state.cardsObj.cards);

	const currentCard = cards.find(card => card.id === id);

	const [cardData, setCardData] = useState(currentCard);

	const handleChange = e => {
		const { name, value } = e.target;
		setCardData(prev => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<div className="card">
			<div className="card-header">
				<input
					name="title"
					className="card-title"
					value={cardData.title}
					onChange={handleChange}
				></input>
				<Header id={cardData.id} />
			</div>
			<StatusSelect
				selectedStatus={cardData.status}
				handleChange={handleChange}
			/>
			<textarea
				name="description"
				className="card-description"
				value={cardData.description}
				onChange={handleChange}
			></textarea>
			<Footer cardData={cardData} />
		</div>
	);
}

export default EditmodeCard;
