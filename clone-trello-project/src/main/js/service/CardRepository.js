import {createCard} from "../request/createCard";
import authenticator from "./Authenticator";

class CardRepository {

    #authenticator

    constructor(authenticator) {
        this.#authenticator = authenticator;
    }

    create(title, status, desc) {
        createCard({
                title: title,
                status: status,
                description: desc
            },
            this.#authenticator);
    }

    getAll() {

    }

    get(cardId) {

    }

    update(card) {

    }

    delete(card) {

    }
}

export default CardRepository;