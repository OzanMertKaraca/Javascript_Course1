const ulum=document.querySelector('.main');

let ogrencilerim = ['Barış','Eda','Uğur','Beril'];

let html=``;

ogrencilerim.forEach(ogrenci => 
{
     html +=` <li> ${ogrenci} </li> `
})

console.log(html);

ulum.innerHTML = html;