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

    constructor(username,email,tittle){ //Admin spesifik parametre tanımlamak istiyorsam ve bunu
                                        // türetilen yerde gönderiyorsam Parent cllasımın içinde 
                                        //göndermem gereken parametreyi constructor super ile
                                        // parent class içinde constructor yolluyorum. 
       super(username,email);
       this.tittle=tittle;
    }
    
    deleteUser(userArrived){

        users = users.filter((user) => user.username !==  userArrived.username)
    }

}

const userOne = new User('Ozii','@gmail.com');
const userTwo = new User('Ceyda','@gmail.com');
const userThree =  new Admin ('Barış','@gmail.com','Hello');

console.log(userThree);
