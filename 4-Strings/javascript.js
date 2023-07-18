console.log('Hello World!');
console.log("Hello World!");

let email = "@gmail.com";
console.log(email);

//Ad Soyadı Birleştirip Console Yazdırma
 const adi="Ozan Mert",soyadi="Karaca";
 console.log(adi+" "+soyadi);

 let ad = "Ozan Mert" ;
 let soyad = "Karaca"
 let adSoyad=ad+" "+soyad;
 console.log(adSoyad);

 console.log(adSoyad[0]); //AdSoyad değişkenindeki [x] karakteri yazdırır.

 console.log(adSoyad.length);  //Değişken kaç karakterden oluşuyor

//  if(adSoyad.length>0)
//  {

//  }

//Methodlar Fonksiyonlar

console.log(adSoyad.toUpperCase()); //Değişkenin Bütün Karakterlerini Büyük Harfle Yazdırır.
console.log(adSoyad.toLowerCase()); //Değişkenin Bütün Karakterlerini Küçük Harfle Yazdırır.
let kucukAdSoyad=adSoyad.toLowerCase();
console.log(kucukAdSoyad);
console.log(adSoyad);

let index = adSoyad.indexOf('M');
console.log("M'nin bulunduğu index: "+index);



