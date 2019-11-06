import _ from "lodash";

class StubAPI {
    constructor() {
        this.movies = [];
    }

    find(id) {
        let index = _.findIndex(
        this.movies,
        movie => `${movie.phone}${movie.cell}` === id
        );
        if (index !== -1) {
        return this.movies[index];
        }
        return null;
    }

    delete(k) {
        let elements = _.remove(this.contacts, contact => contact.phone === k);
        return elements;
    }

    initialize(movies) {
        this.movies = movies;
    }

    getAll() {
        return this.movies;
    }

    update(key, email, phone) {
        let index = _.findIndex(this.contacts, contact => contact.phone === key);
        if (index !== -1) {
        this.contacts[index].phone = phone;
        this.contacts[index].email = email;
        return true;
        }
        return false;
    }
}

export default new StubAPI();