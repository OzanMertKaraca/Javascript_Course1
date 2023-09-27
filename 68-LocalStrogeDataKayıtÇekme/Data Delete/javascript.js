localStorage.setItem('name', 'Ozan');
localStorage.setItem('age', 21); //String olarak tutulacak.

let ad = localStorage.getItem('name');
let yas = localStorage.getItem('age');

console.log(ad,yas);

//localStorage.removeItem('age');

localStorage.clear();

ad = localStorage.getItem('name');
yas = localStorage.getItem('age');
console.log(ad,yas);