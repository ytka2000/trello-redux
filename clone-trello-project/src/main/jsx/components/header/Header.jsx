import React from "react";
import deleteButton from "./images/delete-button.svg";
import editButton from "./images/edit-button.svg";

function Header({ cardId, deleteCard, changeEditMode }) {
	return (
		<div className="icon-container">
			{deleteCard && (
				<img
					className="icon"
					src={deleteButton}
					onClick={() => deleteCard(cardId)}
				/>
			)}
			{changeEditMode && (
				<img className="icon" src={editButton} onClick={changeEditMode} />
			)}
		</div>
	);
}

export default Header;
