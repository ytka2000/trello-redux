import React from "react";
import { editCard } from "../../requests/editCard";
import { useDispatch } from "react-redux";

function Footer({ cardData }) {
	const dispatch = useDispatch();

	const onEdit = () => {
		editCard(cardData)
			.then(() => {
				dispatch({ type: "editCard", payload: cardData });
				dispatch({ type: "toggleEditMode", payload: cardData.id });
			})
			.catch(e => console.log(e));
	};

	return (
		<div className="card-footer">
			<button className="save-button" onClick={onEdit}>
				Save
			</button>
		</div>
	);
}

export default Footer;
