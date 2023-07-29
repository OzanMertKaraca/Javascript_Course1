const yas=20;

if(yas>19)
{
  console.log("Yaş 19'dan Büyüktür");
}

const ad = ['Ozan','Barış','Can'];

if(ad.length >= 3)
{
  console.log("Ad değişkeni değerlerini yazdır.");
}

const sifre="adm3";

if(sifre.length >= 8)
{
  console.log("Şifre Karakter Sayısı Yeterlidir.");
}
else
{
  console.log("Şifre Uzunluğu yeterli değildir. Tekrardan giriniz.")
}



let yenisifre="1234567bv";
if(yenisifre.length  >=12)
{
  console.log("Güçlü Şifre");
}
else if(yenisifre.length >=8)
{
  console.log("Orta Şifre");
}
else
{
  console.log("Şifreyi Yeniden Giriniz");
}
