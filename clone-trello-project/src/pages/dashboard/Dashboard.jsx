import Column from "../../components/column/Column";
import useColumnStatuses from "./useColumnStatuses";
import useCards from "./useCards";
import Spinner from "../../components/spinner/Spinner";

function Dashboard() {
	const columns = useColumnStatuses();
	const cards = useCards();

	if (columns.isLoading || cards.isLoading) {
		return <Spinner />;
	}

	return (
		<div className="dashboard">
			{columns.data.map(column => (
				<Column
					key={column.value}
					name={column.title}
					statusValue={column.value}
				/>
			))}
		</div>
	);
}

export default Dashboard;
