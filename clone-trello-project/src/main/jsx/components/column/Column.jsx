import React, { useState } from "react";
import NewCard from "../new-card/NewCard";
import Card from "../card/Card";
import { v4 as uuidv4 } from "uuid";
import { deleteCard } from "../../../js/request/deleteCard";
import { createCard } from "../../../js/request/createCard";
import List from "../../../js/utils/sorting";

function Column({ name, statusValue, statuses, refreshColumns, cards }) {
	const [columnCards, setColumnCards] = useState(cards);

	function deleteCardById(id) {
		deleteCard(id).then(
			setColumnCards(prevList => {
				return prevList.filter(item => {
					return item.id !== id;
				});
			})
		);
	}

	function editCardById(id, data) {
		let refreshNeeded = false;
		setColumnCards(prevList => {
			return prevList.map(elem => {
				if (elem.id === id) {
					if (elem.status !== data.status) {
						refreshNeeded = true;
					}
					return data;
				}
				return elem;
			});
		});
		if (refreshNeeded) {
			refreshColumns();
		}
	}

	function createNewCard(status) {
		const newCardData = {
			title: "This is title",
			status: status,
			description: "This is description",
		};
		createCard(newCardData)
			.then(response => {
				setColumnCards(prevList => {
					prevList.push({ ...response, editStatus: true });
					return [...prevList];
				});
			})
			.catch(e => console.log(e));
	}

	return (
		<div className="column">
			<h2>{name}</h2>
			<NewCard status={statusValue} createCard={createNewCard} />
			{columnCards.sort(List.sortByDateCreatedAt).map(elem => {
				return (
					<Card
						key={uuidv4()}
						card={{
							title: elem.title,
							description: elem.description,
							status: elem.status,
							id: elem.id,
						}}
						editStatus={elem.editStatus}
						statuses={statuses}
						deleteData={deleteCardById}
						editData={editCardById}
					/>
				);
			})}
		</div>
	);
}

export default Column;
