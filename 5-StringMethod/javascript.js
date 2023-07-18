//Karakterin en son kaçınçı indexde kullanıldığını gösterir
let adSoyad="Semiramis Altın Geliyor";
let son=adSoyad.lastIndexOf('i'); 
console.log(son);

//Başlangıç ve Bitiş indexleri arasındaki değerleri ekrana yazdırır
let bastanSona=adSoyad.slice(0,9);
console.log(bastanSona);

//Başlagıçdan SOnra Belirtilen Değer kadar yazdırır
let bastanSonaSubstr=adSoyad.substring(1,6);
console.log(bastanSonaSubstr);

//Değiştirme
let yerDegistir=adSoyad.replace('n','o');
console.log(yerDegistir);

//Genel olarka çok kullanılan methodlar.