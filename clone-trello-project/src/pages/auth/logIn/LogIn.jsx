import { Navigate } from "react-router-dom";
import useLogIn from "./useLogIn";
import Spinner from "../../../components/spinner/Spinner";

function LogIn() {
	const { userData, loginState, onSubmit } = useLogIn();

	if (loginState === "success") {
		return <Navigate to="/cards" />;
	}

	if (loginState === "pending") {
		return <Spinner />;
	}

	return (
		<div className="auth-main-block">
			<h1>Log in form</h1>
			<form className="auth-block">
				{loginState === "failed" && <h5>Login failed</h5>}
				<input
					ref={userData.username}
					className="auth-input"
					type="text"
					placeholder="Enter your username"
				/>
				<input
					ref={userData.password}
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
