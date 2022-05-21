import React, { useState } from "react";
import ViewmodeCard from "../viewmode-card/ViewmodeCard";
import EditmodeCard from "../editmode-card/EditmodeCard";
import { editCard } from "../../../js/request/editCard";

function Card({ card, editStatus, editData, deleteData, statuses }) {
	const [editMode, setEditMode] = useState(editStatus);

	function changeEditMode() {
		setEditMode(prev => !prev);
	}

	function editCurrentCard(data) {
		editCard(data.id, data).then(() => {
			changeEditMode();
			editData(data.id, data);
		});
	}

	return (
		<>
			{editMode ? (
				<EditmodeCard
					card={card}
					deleteData={deleteData}
					editData={editCurrentCard}
					statuses={statuses}
				/>
			) : (
				<ViewmodeCard
					cardId={card.id}
					cardData={{ title: card.title, description: card.description }}
					deleteData={deleteData}
					changeEditMode={changeEditMode}
				/>
			)}
		</>
	);
}

export default Card;
