import React from "react";
import { useDispatch } from "react-redux";
import { createNewCardAction, editCardAction } from "../../store/cards/actions";

function Footer({ card, toggleEditMode }) {
	const dispatch = useDispatch();

	const onSave = () => {
		if (card.created_at) {
			toggleEditMode();
			dispatch(editCardAction(card));
		} else {
			dispatch(createNewCardAction(card));
		}
	};

	return (
		<div className="card-footer">
			<button className="save-button" onClick={onSave}>
				Save
			</button>
		</div>
	);
}

export default Footer;
