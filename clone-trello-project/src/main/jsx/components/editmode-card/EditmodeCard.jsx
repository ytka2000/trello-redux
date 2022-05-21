import React, { useState } from "react";
import Header from "../header/Header";
import StatusSelect from "../statuses/StatusSelect";
import Footer from "../footer/Footer";

function EditmodeCard({ card, deleteData, editData, statuses }) {
	const [cardData, setCard] = useState({
		...card,
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setCard(prev => ({
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
				<Header deleteCard={deleteData} cardId={cardData.id} />
			</div>
			<StatusSelect
				name="status"
				statuses={statuses}
				selectedStatus={cardData.status}
				statusChange={handleChange}
			/>
			<textarea
				name="description"
				className="card-description"
				value={cardData.description}
				onChange={handleChange}
			></textarea>
			<Footer
				editCard={() => {
					editData(cardData);
				}}
			/>
		</div>
	);
}

export default EditmodeCard;
