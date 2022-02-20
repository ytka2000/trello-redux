import React from "react";

function SignUp() {
	return (
		<div className="auth-main-block">
			<h1>Sign Up form</h1>
			<form className="auth-block">
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
				<button className="auth-button">Submit</button>
			</form>
		</div>
	);
}

export default SignUp;
