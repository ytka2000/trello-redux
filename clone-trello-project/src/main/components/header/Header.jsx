import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCard } from "../../requests/deleteCard";
import deleteButton from "./images/delete-button.svg";
import editButton from "./images/edit-button.svg";

function Header({ id }) {
	const cards = useSelector(state => state.cardsObj.cards);

	const currentCard = cards.find(card => card.id === id);

	const dispatch = useDispatch();

	const onDelete = () => {
		deleteCard(id)
			.then(dispatch({ type: "deleteCard", payload: id }))
			.catch(e => console.log(e));
	};

	const onToggleEditMode = () => {
		dispatch({ type: "toggleEditMode", payload: id });
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
