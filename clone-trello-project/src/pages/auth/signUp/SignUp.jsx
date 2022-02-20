import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
	return (
		<div className="auth-main-block">
			<h1>Sign Up form</h1>
			<div className="auth-block">
				<input
					className="auth-input"
					type="text"
					placeholder="Enter your username"
				/>
				<input
					className="auth-input"
					type="text"
					placeholder="Enter your email"
				/>
				<input
					className="auth-input"
					type="text"
					placeholder="Enter your password"
				/>

				{/* onClick function must contain prevent default */}
				<Link to="/cards">
					<button className="auth-button">Submit</button>
				</Link>
			</div>
		</div>
	);
}

export default SignUp;
