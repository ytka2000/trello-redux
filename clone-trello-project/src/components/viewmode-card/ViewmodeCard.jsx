import React from "react";
import Header from "../header/Header";

function ViewmodeCard({ card, toggleEditMode }) {
	return (
		<div className="card">
			<div className="card-header">
				<h3 className="card-title">{card.title}</h3>
				<Header card={card} toggleEditMode={toggleEditMode} />
			</div>
			<p className="card-description">{card.description}</p>
		</div>
	);
}

export default ViewmodeCard;
