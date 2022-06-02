import React from "react";
import { useDispatch } from "react-redux";
import { createNewCardAction } from "../../../store/cardActions";

function NewCard({ status }) {
	const dispatch = useDispatch();

	const onCreate = status => {
		dispatch(createNewCardAction(status));
	};

	return (
		<div className="new-card" onClick={() => onCreate(status)}>
			+
		</div>
	);
}

export default NewCard;
