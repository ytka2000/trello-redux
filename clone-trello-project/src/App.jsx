import React from "react";
import Navigation from "./components/navigation/Navigation";
import Root from "./Root";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./assets/index.css";

function App() {
	return (
		<>
			<Navigation />
			<Root />
		</>
	);
}

export default App;
