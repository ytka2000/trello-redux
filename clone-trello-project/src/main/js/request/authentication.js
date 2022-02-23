import {LOGIN_URL} from "../ulils/requestUrl";

export const login = (username, password) => {
    return fetch(LOGIN_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
                identifier: username,
                password: password
            })
    });
};