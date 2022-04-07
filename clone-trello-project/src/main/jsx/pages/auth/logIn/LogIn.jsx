import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";

function LogIn(props) {
	const usernameEl = React.useRef(null);
	const passwordEl = React.useRef(null);

	const [isLoading, setIsLoading] = useState(false);
	const [loggedIn, setLoggedIn] = useState(null);

	function onSubmit(e) {
		e.preventDefault();

		setIsLoading(true);

		let login = props.authenticator.auth({
			username: usernameEl.current.value,
			password: passwordEl.current.value,
		});
		login.catch(reason => {
			console.log(reason);
			setLoggedIn(false);
			setIsLoading(false);
		});
		login.then(() => {
			console.log("Login successful");
			setLoggedIn(true);
		});
	}

	if (loggedIn) {
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
			<h1>Log in form</h1>
			<form className="auth-block">
				{loggedIn === false ? <h5>Login failed</h5> : <></>}
				<input
					ref={usernameEl}
					className="auth-input"
					type="text"
					placeholder="Enter your username"
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

export default LogIn;
