import React from "react";
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/auth/home/Home";
import LogIn from "./pages/auth/logIn/LogIn";
import SignUp from "./pages/auth/signUp/SignUp";
import Dashboard from "./pages/dashboard/Dashboard";
import styles from "./index.css";

function App() {
	return (
		<>
			<Navigation />
			<Home />
			<SignUp />
			<LogIn />
			<Dashboard />
		</>
	);
}

export default App;
