import {login} from "../request/authentication";
import credentialsStorage from "./creds/CredentialsStorage";
import {register} from "../request/register";

class Authenticator {

    #credentialsStorage;

    constructor(credentialsStorage) {
        this.#credentialsStorage = credentialsStorage;
    }

    register(credentials) {
        let rgstr = register(credentials.email, credentials.username, credentials.password);
        return rgstr
            .then(resp => this.#validate(resp)).catch()
            .then(resp => this.#convert(resp))
            .then(body => this.#postprocess(body));
    }

    auth(credentials) {
        let lgn = login(credentials.username, credentials.password);
        return lgn
            .then(resp => this.#validate(resp)).catch()
            .then(resp => this.#convert(resp))
            .then(body => this.#postprocess(body));
    }

    authRequest(request) {
        request.headers.Authorization = `Bearer ${credentialsStorage.getJwt()}`;
    }

    #validate(resp) {
        if (!resp.ok) {
            throw new Error("Bad response");
        }
        return resp;
    }

    #convert(resp) {
        return resp.json();
    }

    #postprocess(data) {
        console.log(data);
        this.#credentialsStorage.save({
            username: data.user.username,
            email: data.user.email,
            jwt: data.jwt
        });
        return data;
    }
}

export default Authenticator;