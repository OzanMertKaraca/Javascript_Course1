const icerik = document.querySelector('p');
console.log(icerik.classList);
icerik.classList.add('newclass');
icerik.classList.remove('error');


//P etiketi içerisinde yazılı olan kelimelere göre class verdim.
const pdegeri = document.querySelectorAll('p');

pdegeri.forEach(eleman => 
    {
         if(eleman.textContent.includes('error'))
         {
            eleman.classList.add('error');
         }
         if(eleman.textContent.includes('succes'))
         {
            eleman.classList.add('succes');
         }
         else
         {
            eleman.classList.remove('error,succes');
         }
    }
    )