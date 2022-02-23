
export const removeCard = (id, authenticator) => {
    let request = {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    authenticator.authRequest(request);
    return fetch(`https://radiant-temple-07706.herokuapp.com/cards${id}`, request);
};