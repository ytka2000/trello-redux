import { useRef, useState } from "react";
import User from "../../../services/User";

const user = new User();

const useLogIn = () => {
	const username = useRef(null);
	const password = useRef(null);

	const [loginState, setLoginState] = useState("initial");

	function onSubmit(e) {
		e.preventDefault();

		setLoginState("pending");

		user
			.auth({
				username: username.current.value,
				password: password.current.value,
			})
			.then(() => setLoginState("success"))
			.catch(e => {
				console.error(e);
				setLoginState("failed");
			});
	}

	return { userData: { username, password }, loginState, onSubmit };
};

export default useLogIn;
