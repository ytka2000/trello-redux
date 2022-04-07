import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function StatusSelect({ statuses, selectedStatus, statusChange }) {
	const [status, setStatus] = useState(selectedStatus);

	return (
		<>
			<form>
				<label for="statuses">Choose a car: </label>
				<select
					id="statuses"
					onChange={e => {
						const newValue = e.target.value;
						setStatus(newValue);
						statusChange(newValue);
					}}
				>
					{statuses.map(elem => (
						<option
							key={uuidv4()}
							value={elem.value}
							selected={elem.value === status ? true : false}
						>
							{elem.title}
						</option>
					))}
				</select>
			</form>
		</>
	);
}

export default StatusSelect;
