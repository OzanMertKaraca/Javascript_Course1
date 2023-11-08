const music = document.querySelector('audio');
const prevbutton = document.getElementById('prev');
const playbutton = document.getElementById('play');
const nextbutton = document.getElementById('next');
const image = document.querySelector('img');
const title = document.getElementById('title');
const creater = document.getElementById('creater');

let isplaying = false;

let songindex = 0


const songs = [{
    name:'bootstrap',
    title:'Muzik Eğitimi',
    creater:'Ozan'
},
{
    name:'c',
    title:'Muzik Eğitimi',
    creater:'Tuana'
},
];

function loadsong(song){
    title.textContent = song.title;
    creater.textContent = song.creater;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.png`
}

loadsong(songs[songindex]);

playbutton.addEventListener('click' , () => isplaying ? pausesong() : playsong());


function playsong(){
    isplaying = true;
    playbutton.classList.replace('fa-play','fa-pause');
    music.play();
}
function pausesong(){
    isplaying = false;
    playbutton.classList.replace('fa-pause','fa-play');
    music.pause();
}

prevbutton.addEventListener('click', prevsong);

nextbutton.addEventListener('click', nextsong);

function prevsong(){
    songindex--;
    // console.log(songindex);
    if(songindex < 0 ){
        songindex = songs.length -1;    //Şarkı listemdeki son eleman
    }
    loadsong(songs[songindex]);
    playsong();
}

function nextsong(){
    songindex++;
    // console.log(songindex);
    if(songindex > songs.length -1)
    {
        songindex = 0;
    }
    loadsong(songs[songindex]);
    playsong();

}

//Play butonuna basıldığında durdur butonu ile değişmesi ve müsic next prev butonlarının çalışması yapıldı.