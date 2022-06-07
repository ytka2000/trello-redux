import { useRef, useState } from "react";
import User from "../../../services/User";

const user = new User();

const useSignUp = () => {
	const email = useRef(null);
	const username = useRef(null);
	const password = useRef(null);

	const [signupState, setSignupState] = useState("initial");

	function onSubmit(e) {
		e.preventDefault();

		setSignupState("pending");

		user
			.register({
				username: username.current.value,
				password: password.current.value,
				email: email.current.value,
			})
			.then(() => {
				setSignupState("success");
			})
			.catch(e => {
				console.error(e);
				setSignupState("failed");
			});
	}

	return {
		userData: { email, username, password },
		signupState,
		onSubmit,
	};
};

export default useSignUp;
