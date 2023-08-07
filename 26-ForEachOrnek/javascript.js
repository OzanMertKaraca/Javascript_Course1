// const a = (callBacka) =>
// {
//    let yas = 40 ;
//    callBacka (yas);
// };
// a(function(value)
// {
//     console.log(value);
// }
// )

let ogrenciler = ['Barış' , 'Eda' , 'Uğur' , 'Beril'];

// ogrenciler.forEach(function() 
// {
//     console.log("Meraba!");//Ogrenciler dizisi elemanı kadar Yazdırır.
// })

// ogrenciler.forEach(function(kisi,index)
// {
//     console.log(kisi,index);
// }
// )

const ogrenci = (kisi,index) =>
{
    console.log(`${index} - ${kisi}`);
}
ogrenciler.forEach(ogrenci);

const product = ["Evet","Hayır","Hayır1","Hayır2"];

product.forEach((product,index,array) => array[index] = `${product.toUpperCase() }` )

console.log (product);