const button = document.querySelector('button');

button.addEventListener('click', () => {
     
     console.log('Butona Tıklandı!');
} );

const liElemanlari = document.querySelectorAll('li');

liElemanlari.forEach(eleman => {

     eleman.addEventListener('click',e=> {    //('click',()=> {
         console.log(e);
         console.log(e.target);//Tıklanılan Butonun Etiketi ile yazdırır.
          console.log('Li Etiketine Tıklandı.');
          e.target.style.color='white';//Tıklanıldığında yazı renginin değişmesi

     })
})

const ul = document.querySelector('ul');
//ul.remove();

//Tıklanıldığı Li Etiketini Silmemizi sağlar.
liElemanlari.forEach(eleman => {

     eleman.addEventListener('click',e => {

          e.target.remove();
     } )
})

button.addEventListener('click',() => {
     const li = document.createElement('li');
     li.textContent='Angular';

     ul.append(li); //Sonuna eklemek için kullanılır.
     //ul.prepend(li);//Başına Eklemek için kullanılır.
})

//Eklenilen Kayıt için Silmesi kontrol edeceğim.