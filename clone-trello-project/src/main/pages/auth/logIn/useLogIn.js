import { useRef, useState } from "react";
import User from "../../../services/User";

const useLogIn = () => {
	const username = useRef(null);
	const password = useRef(null);

	const [isLoading, setIsLoading] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState("pending");

	const user = new User();

	function onSubmit(e) {
		e.preventDefault();

		setIsLoading(true);

		user
			.auth({
				username: username.current.value,
				password: password.current.value,
			})
			.then(() => setIsLoggedIn("success"))
			.catch(e => {
				console.error(e);
				setIsLoggedIn("failed");
			})
			.then(() => setIsLoading(false));
	}

	return { userData: { username, password }, isLoading, isLoggedIn, onSubmit };
};

export default useLogIn;
