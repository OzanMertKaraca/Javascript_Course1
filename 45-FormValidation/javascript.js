const form = document.querySelector('.signupForm');
const message = document.querySelector('.message');

form.addEventListener('submit', e => {
  e.preventDefault();//Sayfa kayıtı yazdırı yazdırmaz refresh olmasın diye kullanıyorum
  const username = form.username.value;//form içerisinde name username olanı değerini alıp username değişkenine atadım
  const usernamePattern=/^[a-z]{6,10}$/

  if(usernamePattern.test(username))
  {
     message.textContent='Başarılı';
  }
  else
  {
     message.textContent='Hatalı Kullanıcı Adı Tanımlaması!!!(Küçük Harf ve 6-12 uzunluğunda olmalıdır.)';
  }
})