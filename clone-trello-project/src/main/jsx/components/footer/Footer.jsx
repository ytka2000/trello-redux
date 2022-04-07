import React from "react";

function Footer({ editCard }) {
	return (
		<div className="card-footer">
			<button className="save-button" onClick={editCard}>
				Save
			</button>
		</div>
	);
}

export default Footer;
