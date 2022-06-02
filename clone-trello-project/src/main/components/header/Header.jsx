import React from "react";
import { useDispatch, useSelector } from "react-redux";
import deleteButton from "./images/delete-button.svg";
import editButton from "./images/edit-button.svg";
import { toggleEditModeAction } from "../../../store/cardActions";
import { deleteCardAction } from "../../../store/cardActions";

function Header({ id }) {
	const cards = useSelector(state => state.cardsObj.cards);

	const currentCard = cards.find(card => card.id === id);

	const dispatch = useDispatch();

	const onDelete = () => {
		dispatch(deleteCardAction(id));
	};

	const onToggleEditMode = () => {
		dispatch(toggleEditModeAction(id));
	};

	return (
		<div className="icon-container">
			{!currentCard.editMode && (
				<img className="icon" src={editButton} onClick={onToggleEditMode} />
			)}
			<img className="icon" src={deleteButton} onClick={onDelete} />
		</div>
	);
}

export default Header;
