import {REGISTER_URL} from "../ulils/requestUrl";

export const register = (email, username, password) => {
    return fetch(REGISTER_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            username: username,
            password: password
        })
    })
};