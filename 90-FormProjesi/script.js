const form = document.getElementById('form');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const alertmessage = document.querySelector('.alertmessage');
const alerttitle = document.getElementById('alerttitle');

let isValid = false;
let passwordmatch = false;

function validateform(){  
   isValid =  form.checkValidity(); //Html etikeleri değerleri geçerli ise true dönmektedir.
   console.log(isValid);
   if(!isValid){ //isvalid false ise
    alerttitle.textContent='Lütfen Tüm Bilgileri Giriniz.';
    alerttitle.style.color='red';
    alertmessage.style.borderColor='red';
    return;
   }

   if(password.value === repassword.value)
   {
    passwordmatch = true;
    password.style.borderColor='green';
    repassword.style.borderColor='green';
   }
   else{
    passwordmatch = false;
    password.style.borderColor='red';
    repassword.style.borderColor='red';
    alerttitle.style.color='red';
    alertmessage.style.borderColor='red';
    alerttitle.textContent='Şifreler Uyuşmamaktadır!';
    return;
   }
   if(isValid && passwordmatch) //isvalid ve passwordmatch true ise
   {
    alerttitle.style.color='green';
    alertmessage.style.borderColor='green';
    alerttitle.textContent='Kayıt Olundu.';
   }
}

function takeforminformation(){
    const user = {
        name:form.name.value,
        surname:form.surname.value,
        email:form.email.value,
        phone:form.phone.value,
        password:form.password.value,
        adress:form.adres.value,
    };
    console.log(user);
}

function submitform(e) {
    e.preventDefault();
     validateform();

    if(isValid && passwordmatch) //isvalid ve passwordmatch true ise bakckende veri gönderecek olsaydım.
    {
        takeforminformation();
    } 
}

form.addEventListener('submit', submitform);