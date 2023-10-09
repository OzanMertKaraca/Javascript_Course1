const word = document.getElementById('word');
const button = document.getElementById('button');
const transleteddiv = document.getElementById('transleteddiv');
const title = document.getElementById('title');
const meaning = document.getElementById('Meaning');
const audio = document.getElementById('audio');
const hata = document.getElementById('hata');

async function fetchApi(){
    transleteddiv.style.display='none';
    hata.style.display='none';

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`;//Girilen değeri APİ istek atıyoruz.
    const result = await fetch(url).then((res) => res.json()); //Api dönen cevap result değişekninde tutuyorum.
    console.log(result);
    if(result.title){
        hata.style.display='block'; //Hatalı Sonuç Döndüğünde ekrana hata mesajı yazdıracak.
       hata.textContent = result.message;
    }
    else{
        transleteddiv.style.display='block';
        title.textContent = result[0].word;
        Meaning.textContent = result[0].meanings[0].definitions[0].definition;
        audio.src = result[0].phonetics[0].audio;
    }
}

button.addEventListener('click' , fetchApi); //Tıklanıldığında çalışacak olan fonks.
