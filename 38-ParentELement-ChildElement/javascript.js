const section = document.querySelector('section');
console.log(section.children);

console.log(Array.from(section.children));

Array.from(section.children).forEach(child => {

     child.classList.add('section-element');
}); 

const baslik = document.querySelector('h2');
console.log(baslik.parentElement);
console.log(baslik.parentElement.parentElement);
console.log(baslik.nextElementSibling); //Kardeş elementi getirir.
console.log(baslik.previousElementSibling);//Üstündeki Değeri Yazdırır

console.log(baslik.nextElementSibling.parentElement.children);
