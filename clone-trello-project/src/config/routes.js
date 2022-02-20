import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "../App";
import Home from "../pages/auth/home/Home";
import LogIn from "../pages/logIn/LogIn";
import SignUp from "../pages/auth/signUp/SignUp";
import Dashboard from "../pages/dashboard/Dashboard";

export default (
	<Route path="/" component={App}>
		<Route path="/login" component={Home} />
		<Route path="/login" component={LogIn} />
		<Route path="/signup" component={SignUp} />
		<Route path="/cards" component={Dashboard} />
	</Route>
);
