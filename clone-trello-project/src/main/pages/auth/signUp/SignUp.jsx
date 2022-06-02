import { Navigate } from "react-router-dom";
import useSignUp from "./useSignUp";
import Spinner from "../../../components/spinner/Spinner";

function SignUp() {
	const { userData, isLoading, isRegistered, onSubmit } = useSignUp();

	if (isRegistered === "success") {
		return <Navigate to="/cards" />;
	}

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<div className="auth-main-block">
			<h1>Sign Up form</h1>
			<form className="auth-block">
				{isRegistered === "failed" && <h5>Registration failed</h5>}
				<input
					ref={userData.username}
					className="auth-input"
					type="text"
					placeholder="Enter your username"
				/>
				<input
					ref={userData.email}
					className="auth-input"
					type="text"
					placeholder="Enter your email"
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

export default SignUp;
