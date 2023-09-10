const form = document.querySelector('.signupForm');
const message = document.querySelector('.message');
const usernamePattern=/^[a-z]{6,10}$/;

form.addEventListener('submit', e => {
  e.preventDefault();//Sayfa kayıtı yazdırı yazdırmaz refresh olmasın diye kullanıyorum
  const username = form.username.value;//form içerisinde name username olanı değerini alıp username değişkenine atadım
 
  if(usernamePattern.test(username))
  {
     message.textContent='Başarılı';
  }
  else
  {
     message.textContent='Hatalı Kullanıcı Adı Tanımlaması!!!(Küçük Harf ve 6-12 uzunluğunda olmalıdır.)';
  }
})

form.username.addEventListener('keyup', e => {
   // console.log(e.target.value); //form.username.value bu şekilde de yazabilirdik.
   if(usernamePattern.test(e.target.value))
   {
      form.username.setAttribute('class','succes');
      // console.log('Başarılı');
   }
   else
   {
      form.username.setAttribute('class','error');
   //   console.log('Başarısız');
   }
})
//succes ve error olarak class tanımladım durumlara göre setAttribute ile çağıracağım.
