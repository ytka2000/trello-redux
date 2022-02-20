import React from "react";
import homepage from "./images/homepage.svg";

function Navigation() {
	return (
		<nav>
			<img className="home-icon" src={homepage} />
		</nav>
	);
}

export default Navigation;
