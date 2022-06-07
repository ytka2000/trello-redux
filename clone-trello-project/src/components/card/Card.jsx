import React, { memo, useState } from "react";
import ViewmodeCard from "../viewmode-card/ViewmodeCard";
import EditmodeCard from "../editmode-card/EditmodeCard";

function Card({ card }) {
	const [editMode, setEditMode] = useState(!card.created_at);

	const toggleEditMode = () => {
		setEditMode(prevEditMode => !prevEditMode);
	};

	return (
		<>
			{editMode ? (
				<EditmodeCard card={card} toggleEditMode={toggleEditMode} />
			) : (
				<ViewmodeCard card={card} toggleEditMode={toggleEditMode} />
			)}
		</>
	);
}

export default memo(Card);
