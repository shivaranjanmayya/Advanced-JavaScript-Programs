class song {
    #copyRights = 'reserved 2021';
    get getCopyrights() {
        return this.#copyRights;
    }

    constructor(name, duration, year) {
        this.name = name;
        this.duration = duration;
        this.year = year;
    }
}

let song1 = new song('Jana Gana Mana', 56, 1940);
console.log(song1.getCopyrights);