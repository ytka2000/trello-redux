import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { createLocalCardAction } from "../../store/cards/actions";

function NewCard({ status }) {
	const dispatch = useDispatch();

	const onCreate = status => {
		const newCardData = {
			title: "This is title",
			status: status,
			description: "This is description",
			id: uuidv4(),
		};
		dispatch(createLocalCardAction(newCardData));
	};

	return (
		<>
			<div className="new-card" onClick={() => onCreate(status)}>
				+
			</div>
		</>
	);
}

export default memo(NewCard);
