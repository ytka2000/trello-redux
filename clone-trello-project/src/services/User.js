import { login } from "../requests/authentication";
import { register } from "../requests/registration";

class User {
	#jwt;
	#username;
	#email;

	constructor(jwt, username, email) {
		this.#jwt = jwt;
		this.#username = username;
		this.#email = email;
	}

	save(credentials) {
		window.localStorage.setItem("jwt", credentials.jwt);
		window.localStorage.setItem("username", credentials.user.username);
		window.localStorage.setItem("email", credentials.user.email);
	}

	register({ email, username, password }) {
		return register(email, username, password)
			.then(res => this.validate(res))
			.then(res => res.json())
			.then(data => {
				console.log(data);
				this.save(data);
			})
			.catch();
	}

	auth({ username, password }) {
		return login(username, password)
			.then(res => this.validate(res))
			.then(res => res.json())
			.then(data => {
				console.log(data);
				this.save(data);
			})
			.catch();
	}

	validate(res) {
		if (!res.ok) {
			throw new Error("Bad response");
		}
		return res;
	}
}

export default User;
