import React from "react";
import { Link } from "react-router-dom";
import homepage from "./images/homepage.svg";

function Navigation() {
	return (
		<nav>
			<Link to="/">
				<img className="home-icon" src={homepage} />
			</Link>
		</nav>
	);
}

export default Navigation;
