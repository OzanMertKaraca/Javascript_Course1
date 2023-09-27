localStorage.setItem('name', 'Ozan');
localStorage.setItem('age', 21); //String olarak tutulacak.

let ad = localStorage.getItem('name');
let yas = localStorage.getItem('age');

console.log(ad,yas);

localStorage.setItem('name', 'Barış');
localStorage.age=22;

ad = localStorage.getItem('name');
yas = localStorage.getItem('age');

console.log(ad,yas);