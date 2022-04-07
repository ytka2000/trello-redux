import React from "react";

function NewCard({ status, createCard }) {
	return (
		<div className="new-card" onClick={() => createCard(status)}>
			+
		</div>
	);
}

export default NewCard;
