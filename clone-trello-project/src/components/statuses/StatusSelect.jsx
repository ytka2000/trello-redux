import React from "react";
import { useSelector } from "react-redux";

function StatusSelect({ selectedStatus, handleChange }) {
	const statuses = useSelector(state => state.columns.data);

	return (
		<>
			<form>
				<label htmlFor="statuses">Choose a car: </label>
				<select name="status" id="statuses" onChange={handleChange}>
					{statuses.map(status => (
						<option
							key={status.value}
							value={status.value}
							selected={status.value === selectedStatus ? true : false}
						>
							{status.title}
						</option>
					))}
				</select>
			</form>
		</>
	);
}

export default StatusSelect;
