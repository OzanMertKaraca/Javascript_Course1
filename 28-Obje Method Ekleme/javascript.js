let ogrenci = 
{
    ad:'Barış',
    yas:'28',
    email:'a@gmail.com',
    sinif:'12',
    dersler:['Matematik','Türkçe','Tarih'],
    login:function()  //function ları kaldırıp tek parante ile () de yazabiliriz login()
    {
        console.log("Öğrenci Giriş Yaptı");
    },
    logout:function() //logout() gibi
    {
        console.log('Öğrenci Çıkış Yaptı');
    },
}
//Obje İçerisinde arrow function kullanılmaz düzenli function kullanırız.
ogrenci.login();
ogrenci.logout();
console.log(ogrenci);