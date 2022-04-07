import React, { useState } from "react";
import Header from "../header/Header";
import StatusSelect from "../statuses/StatusSelect";
import Footer from "../footer/Footer";

function EditmodeCard({ cardId, cardData, deleteData, editData, statuses }) {
	const [thisTitle, setThisTitle] = useState(cardData.title);
	const [thisStatus, setThisStatus] = useState(cardData.status);
	const [thisDescription, setThisDescription] = useState(cardData.description);

	function changeStatus(newValue) {
		setThisStatus(newValue);
	}

	return (
		<div className="card">
			<div className="card-header">
				<input
					className="card-title"
					defaultValue={cardData.title}
					onChange={e => {
						const newValue = e.target.value;
						setThisTitle(newValue);
					}}
				></input>
				<Header deleteCard={deleteData} cardId={cardId} />
			</div>
			<StatusSelect
				statuses={statuses}
				selectedStatus={thisStatus}
				statusChange={changeStatus}
			/>
			<textarea
				className="card-description"
				defaultValue={cardData.description}
				onChange={e => {
					const newValue = e.target.value;
					setThisDescription(newValue);
				}}
			></textarea>
			<Footer
				editCard={() => {
					editData({
						title: thisTitle,
						status: thisStatus,
						description: thisDescription,
					});
				}}
			/>
		</div>
	);
}

export default EditmodeCard;
