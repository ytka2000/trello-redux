import React from "react";
import Header from "../header/Header";

function Card({ title, description }) {
	return (
		<div className="card">
			<div className="card-header">
				<h3>{title}</h3>
				<Header />
			</div>
			<p>{description}</p>
		</div>
	);
}

export default Card;
