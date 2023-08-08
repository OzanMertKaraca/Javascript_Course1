let ogrenci = {
    ad:'Ozan',
    yas:'20',
    email:'a@gmail.com',
    sinif:'12',
    dersler:['Matematik','Biyoloji','Türkçe']
};
console.log(ogrenci);
console.log(ogrenci.yas);

ogrenci.yas=21;
console.log(ogrenci.yas);

console.log(ogrenci['ad']);

ogrenci['ad']='Ozii';
console.log(ogrenci['ad']);

console.log(typeof ogrenci);