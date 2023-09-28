class User{
    constructor(username,email) { //Herhangi bir isim verebiliriz
        this.username = username;
        this.email = email;
    }

    login()
    {
       console.log(`${this.username} giriş yaptı.`);
       return this;
    }
    logout()
    {
        console.log(`${this.username} çıkış yaptı.`);
        return this;
    }
}

const userOne= new User('Ozii','@gmail.com');
const userTwo= new User('Ceyda','@gmail.com');

//console.log(userOne.login(),userTwo.logout());

userOne.login().logout().logout();
