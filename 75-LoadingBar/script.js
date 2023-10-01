const counter = document.querySelector('.counter');
const loadingbarfront = document.querySelector('.loadingbarfront');

let number = 0;


updatenumber();

function updatenumber() {
    counter.textContent = number + '%'; 
    loadingbarfront.style.width = number + '%';
    number++;

    if(number < 101){
        setTimeout(updatenumber,15);
    }
}

//İlk olarak müdahele edeceğim classları çağırdım.
//sonrasında function olarak updatenumberda counter.textini number ile eşitledim
//sonrasında loadingbarfront classındaki number değişkenindeki değer ile eşitledim
//bunun da sürekli çalışması için if 101den küçük olana kadar çalışıp settimeout ile süre ekledim
//01.10.2023 Pazar 08:39


