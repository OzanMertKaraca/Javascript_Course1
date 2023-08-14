// a etiketi içerisindeki linki ve  içerik adını değiştirdim.
const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href','https://github.com/OzanMertKaraca/Javascript_Course1/commits/main');
link.textContent='Ozan Github';

// p classının ismini değiştirdim ve yeni class oluşturdum.
const pdegeri=document.querySelector('p');
console.log(pdegeri.getAttribute('class'));
pdegeri.setAttribute('class','new');

pdegeri.setAttribute('style','color:red');