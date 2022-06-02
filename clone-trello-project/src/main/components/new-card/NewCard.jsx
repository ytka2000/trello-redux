import React from "react";
import { useDispatch } from "react-redux";
import { createCard } from "../../requests/createCard";

function NewCard({ status }) {
	const dispatch = useDispatch();

	const onCreate = status => {
		const newCardData = {
			title: "This is title",
			status: status,
			description: "This is description",
		};
		createCard(newCardData)
			.then(response => {
				dispatch({
					type: "createCard",
					payload: { ...response, editMode: true },
				});
			})
			.catch(e => console.log(e));
	};

	return (
		<div className="new-card" onClick={() => onCreate(status)}>
			+
		</div>
	);
}

export default NewCard;
