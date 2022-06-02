import React from "react";
import Navigation from "./main/components/navigation/Navigation";
import Main from "./main/config/Main";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./main/assets/index.css";

function App() {
	return (
		<>
			<Navigation />
			<Main />
		</>
	);
}

export default App;
