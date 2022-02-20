import React from "react";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="auth-main-block">
			<Link className="link" to="/login">
				<button className="auth-button" name="login">
					Log in
				</button>
			</Link>
			<Link className="link" to="/signup">
				<button className="auth-button" name="signup">
					Sign Up
				</button>
			</Link>
		</div>
	);
}

export default Home;
