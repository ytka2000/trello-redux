import { useRef, useState } from "react";
import User from "../../../services/User";

const user = new User();

const useSignUp = () => {
	const email = useRef(null);
	const username = useRef(null);
	const password = useRef(null);

	const [isLoading, setIsLoading] = useState(false);
	const [isRegistered, setIsRegistered] = useState("pending");

	function onSubmit(e) {
		e.preventDefault();

		setIsLoading(true);

		user
			.register({
				username: username.current.value,
				password: password.current.value,
				email: email.current.value,
			})
			.then(() => {
				setIsRegistered("success");
			})
			.catch(e => {
				console.error(e);
				setIsRegistered("failed");
			})
			.then(() => setIsLoading(false));
	}

	return {
		userData: { email, username, password },
		isLoading,
		isRegistered,
		onSubmit,
	};
};

export default useSignUp;
