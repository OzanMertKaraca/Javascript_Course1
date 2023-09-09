const form = document.querySelector('.signupForm');
const username = document.querySelector('#username');

form.addEventListener('submit', e=> {
     e.preventDefault(); //Sayfanın Refresh olmasını engeller
     // console.log('Form Gönderildi');
     // console.log(username.value);//Girlen Değeri console yazdırdım
     // console.log(username.value);
     console.log(form.username.value);
})