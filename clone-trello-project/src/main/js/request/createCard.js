import {CARD_URL} from "../ulils/requestUrl";

export function createCard(data = {}, authenticator) {
    const request = {
        method: 'POST',
            mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
        'Content-Type': 'application/json',
    },
        redirect: 'follow',
            referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    }
    authenticator.authRequest(request);
    return fetch(CARD_URL, request);
}