import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";

function SignUp(props) {
	const emailEl = React.useRef(null);
	const usernameEl = React.useRef(null);
	const passwordEl = React.useRef(null);

	const [isLoading, setIsLoading] = useState(false);
	const [registered, setRegistered] = useState(null);

	function onSubmit(e) {
		e.preventDefault();

		setIsLoading(true);

		let login = props.authenticator.register({
			username: usernameEl.current.value,
			password: passwordEl.current.value,
			email: emailEl.current.value,
		});
		login.catch(reason => {
			console.log(reason);
			setRegistered(false);
			setIsLoading(false);
		});
		login.then(() => {
			console.log("Registration successful");
			setRegistered(true);
		});
	}

	if (registered) {
		return <Navigate to="/cards" />;
	}

	if (isLoading) {
		return (
			<div className="spinner">
				<BallTriangle color="#7abcff" height={80} width={80} />
			</div>
		);
	}

	return (
		<div className="auth-main-block">
			<h1>Sign Up form</h1>
			<form className="auth-block">
				{registered === false ? <h5>Registration failed</h5> : <></>}
				<input
					ref={usernameEl}
					className="auth-input"
					type="text"
					placeholder="Enter your username"
				/>
				<input
					ref={emailEl}
					className="auth-input"
					type="text"
					placeholder="Enter your email"
				/>
				<input
					ref={passwordEl}
					className="auth-input"
					type="text"
					placeholder="Enter your password"
				/>

				<button className="auth-button" onClick={onSubmit}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default SignUp;
