import CredentialsStorage from "./CredentialsStorage";

class CredentialsLocalStorage extends CredentialsStorage {

    save(credentials) {
        window.localStorage.setItem("jwt", credentials.jwt);
        window.localStorage.setItem("username", credentials.username);
        window.localStorage.setItem("email", credentials.email);
    }

    get() {
        return {
            jwt: this.getJwt(),
            username: window.localStorage.getItem("username"),
            email: window.localStorage.getItem("email")
        };
    }

    getJwt() {
        return window.localStorage.getItem("jwt");
    }
}
export default CredentialsLocalStorage;