import {CARD_URL} from "../ulils/requestUrl";

export async function getCard() {
    const response = await fetch(CARD_URL, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
    });
    let respBody;
    await response.json();
    respBody = `
    {
  "id": 41,
  "published_at": "2021-02-10T19:49:17.748Z",
  "created_at": "2021-02-10T19:49:17.762Z",
  "updated_at": "2021-02-10T19:49:17.770Z",
  "title": "Finish project",
  "status": "in_progress",
  "description": "Lorem ipsum dolor sit amet..."
}
    `;
    console.log(respBody);
    return respBody;
}