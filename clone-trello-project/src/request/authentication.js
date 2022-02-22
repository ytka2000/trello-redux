import {LOGIN_URL} from "../ulils/requestUrl";


export const authentication = () => {
    //Hardcode this date now
    const data = {
        identifier: "vovk",
        password: "vovk",
    };

    fetch(LOGIN_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((json) => console.log(json)) // delete next time but its test console.log
        .then((body) => {
            if (body.error) {
                throw new Error("Email or password not valid")
            } else {
                window.localStorage.setItem("token", body.jwt);
                window.localStorage.setItem("username", body.user.username)
            }
        });
};