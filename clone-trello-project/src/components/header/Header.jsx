import React from "react";
import { useDispatch } from "react-redux";
import deleteButton from "./images/delete-button.svg";
import editButton from "./images/edit-button.svg";
import {
	deleteCardAction,
	removeLocalCardAction,
} from "../../store/cards/actions";

function Header({ card, toggleEditMode }) {
	const dispatch = useDispatch();

	const onDelete = () => {
		if (card.created_at) {
			dispatch(deleteCardAction(card.id));
		} else {
			dispatch(removeLocalCardAction(card.id));
		}
	};

	const onToggleEditMode = () => {
		toggleEditMode(card.id);
	};

	return (
		<div className="icon-container">
			{toggleEditMode && (
				<img className="icon" src={editButton} onClick={onToggleEditMode} />
			)}
			<img className="icon" src={deleteButton} onClick={onDelete} />
		</div>
	);
}

export default Header;
