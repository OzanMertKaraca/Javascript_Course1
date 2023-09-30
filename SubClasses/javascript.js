class User{
    constructor(username,email) { //Herhangi bir isim verebiliriz
        this.username = username;
        this.email = email;
    }
    login(){
       console.log(`${this.username} giriş yaptı.`);
       return this;
    }
    logout(){
        console.log(`${this.username} çıkış yaptı.`);
        return this;
    }
}
class Admin extends User{
      deleteUser(userArrived){

        users = users.filter((user) => user.username !==  userArrived.username)
    }

}

const userOne = new User('Ozii','@gmail.com');
const userTwo = new User('Ceyda','@gmail.com');
const userThree =  new Admin ('Barış','@gmail.com');

let users=[userOne,userTwo,userThree];
userThree.deleteUser(userOne);

console.log(userOne,userTwo,userThree);

console.log(users);

