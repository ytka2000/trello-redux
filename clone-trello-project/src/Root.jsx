import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/auth/home/Home";
import LogIn from "./pages/auth/logIn/LogIn";
import SignUp from "./pages/auth/signUp/SignUp";
import Dashboard from "./pages/dashboard/Dashboard";

function Root() {
	return (
		<Routes>
			<Route exact path="/" element={<Home />}></Route>
			<Route exact path="/login" element={<LogIn />}></Route>
			<Route exact path="/signup" element={<SignUp />}></Route>
			<Route exact path="/cards" element={<Dashboard />}></Route>
		</Routes>
	);
}

export default Root;
