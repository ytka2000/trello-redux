import React from "react";
import Header from "../header/Header";

function ViewmodeCard({ cardId, cardData, deleteData, changeEditMode }) {
	return (
		<div className="card">
			<div className="card-header">
				<h3 className="card-title">{cardData.title}</h3>
				<Header
					deleteCard={deleteData}
					changeEditMode={changeEditMode}
					cardId={cardId}
				/>
			</div>

			<p className="card-description">{cardData.description}</p>
		</div>
	);
}

export default ViewmodeCard;
