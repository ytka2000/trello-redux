import React from "react";
import Column from "../../components/column/Column";
import { v4 as uuidv4 } from "uuid";

function Dashboard() {
	//hardcode, array of columns
	const array = [
		{ name: "To Do" },
		{ name: "In Progress" },
		{ name: "Testing" },
		{ name: "Done" },
	];
	return (
		<div className="dashboard">
			{array.map(elem => (
				<Column key={uuidv4()} name={elem.name} />
			))}
		</div>
	);
}

export default Dashboard;
