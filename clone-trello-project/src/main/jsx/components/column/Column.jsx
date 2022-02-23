import React from "react";
import NewCard from "../new-card/NewCard";
import Card from "../card/Card";
import { v4 as uuidv4 } from "uuid";

function Column({ name }) {
	//hardcode, array of cards
	const array = [
		{ title: "My Task", description: "My description" },
		{ title: "My Task2", description: "My description2" },
	];
	return (
		<div className="column">
			<h2>{name}</h2>
			<NewCard />
			{array.map(elem => (
				<Card
					key={uuidv4()}
					title={elem.title}
					description={elem.description}
				/>
			))}
		</div>
	);
}

export default Column;
