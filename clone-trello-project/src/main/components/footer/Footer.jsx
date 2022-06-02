import React from "react";
import { useDispatch } from "react-redux";
import { editCardAction } from "../../../store/cardActions";

function Footer({ cardData }) {
	const dispatch = useDispatch();

	const onEdit = () => {
		dispatch(editCardAction(cardData));
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
