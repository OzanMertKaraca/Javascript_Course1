class User{
    constructor(username,email) { //Herhangi bir isim verebiliriz
        this.username = username;
        this.email = email;
    }

    login()
    {
        return `${this.username} giriş yaptı.`           //template string ``
    }
    logout()
    {
        return `${this.username} çıkış yaptı.`
    }
}

const userOne= new User('Ozii','@gmail.com');
const userTwo= new User('Ceyda','@gmail.com');

console.log(userOne.login(),userTwo.logout());