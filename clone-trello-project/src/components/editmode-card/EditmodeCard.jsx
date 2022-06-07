import React, { useState } from "react";
import Header from "../header/Header";
import StatusSelect from "../statuses/StatusSelect";
import Footer from "../footer/Footer";

function EditmodeCard({ card, toggleEditMode }) {
	const [cardData, setCardData] = useState(card);

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
				<Header card={cardData} />
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
			<Footer card={cardData} toggleEditMode={toggleEditMode} />
		</div>
	);
}

export default EditmodeCard;
