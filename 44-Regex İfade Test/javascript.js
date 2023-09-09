const username = 'ozanmert10';
const pattern = /^[a-z]{6,10}$/;

let sonuc=pattern.test(username);
//console.log(sonuc);

if(sonuc) //sonuc==true (sonuc) aynıdır.
{
  console.log('Başarılı');
}
else
{
  console.log('Başarısız');
}

// let sonuc = username.search(pattern); // 0>True -1 False 
// console.log(sonuc);