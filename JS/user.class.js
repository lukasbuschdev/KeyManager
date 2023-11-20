class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    displayInfo() {
        log(`Username: ${this.username}, Email: ${this.email}, Password: ${this.password}`);
    }
}