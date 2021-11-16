class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(this.name);
    }
}

var user = new User("shiva");
user.sayHi();