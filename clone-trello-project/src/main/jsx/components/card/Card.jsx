import React, { useState } from "react";
import ViewmodeCard from "../viewmode-card/ViewmodeCard";
import EditmodeCard from "../editmode-card/EditmodeCard";
import { editCard } from "../../../js/request/editCard";

function Card({
	title,
	description,
	status,
	cardId,
	editData,
	deleteData,
	editStatus,
	statuses,
}) {
	const [thisTitle, setThisTitle] = useState(title);
	const [thisDescription, setThisDescription] = useState(description);
	const [editMode, setEditMode] = useState(editStatus);

	function changeEditMode() {
		setEditMode(prev => !prev);
	}

	function editCurrentCard(data) {
		setThisTitle(data.title);
		setThisDescription(data.description);

		editCard(cardId, data).then(() => {
			changeEditMode();
			editData(cardId, data);
		});
	}

	return (
		<>
			{editMode ? (
				<EditmodeCard
					cardId={cardId}
					cardData={{
						title: thisTitle,
						description: thisDescription,
						status: status,
					}}
					deleteData={deleteData}
					editData={editCurrentCard}
					statuses={statuses}
				/>
			) : (
				<ViewmodeCard
					cardId={cardId}
					cardData={{ title: thisTitle, description: thisDescription }}
					deleteData={deleteData}
					changeEditMode={changeEditMode}
				/>
			)}
		</>
	);
}

export default Card;
