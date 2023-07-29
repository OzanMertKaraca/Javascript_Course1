// &&  => ve  Her iki koşulu sağlanması gerekmektedir.
// ||  => veya  
// ! => not 

let yenisifre="1234523456789";

yenisifre="12345678";

if(yenisifre.length >=12  && yenisifre.includes('!') )
{
  console.log("Şifrem Güçlü");
}
else if (yenisifre.length >= 8 || yenisifre.includes('a') )
{
  console.log("Şifrem Orta");
}
else
{
  console.log("Şifrenizi Düzenleyiniz.");
}

const control=false;
if(!control)
{
  console.log("Kontrol Başarılı");
}

