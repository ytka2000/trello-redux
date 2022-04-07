import React, { useState, useEffect } from "react";
import Column from "../../components/column/Column";
import { v4 as uuidv4 } from "uuid";
import { getStatuses } from "../../../js/request/getStatuses";
import { getCards } from "../../../js/request/getCards";
import { BallTriangle } from "react-loader-spinner";

function Dashboard() {
	const [cards, setCards] = useState();
	const [columns, setColumns] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(async () => {
		const columnsData = await getStatuses();
		setColumns(columnsData);

		const cardsData = await getCards();
		setCards(() => cardsData.map(elem => ({ ...elem, editStatus: false })));

		setIsLoading(false);
	}, []);

	async function refreshColumns() {
		const columnsData = await getStatuses();
		setColumns(columnsData);
	}

	const spinner = (
		<div className="spinner">
			<BallTriangle color="#7abcff" height={80} width={80} />
		</div>
	);

	return (
		<div className="dashboard">
			{isLoading
				? spinner
				: columns.map(elem => (
						<Column
							key={uuidv4()}
							name={elem.title}
							statusValue={elem.value}
							statuses={columns}
							refreshColumns={refreshColumns}
							cards={cards.filter(elem => elem.status === elem.value)}
						/>
				  ))}
		</div>
	);
}

export default Dashboard;
