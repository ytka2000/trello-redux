import React from "react";
import deleteTask from "../../actions/deleteTask";
import editTask from "../../actions/editTask";
import deleteButton from "./images/delete-button.svg";
import editButton from "./images/edit-button.svg";

function Header() {
	return (
		<div className="icon-container">
			<img className="icon" src={deleteButton} onClick={deleteTask} />
			<img className="icon" src={editButton} onClick={editTask} />
		</div>
	);
}

export default Header;
