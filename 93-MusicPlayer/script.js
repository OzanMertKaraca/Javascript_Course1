const music = document.querySelector('audio');
const prevbutton = document.getElementById('prev');
const playbutton = document.getElementById('play');
const nextbutton = document.getElementById('next');
const image = document.querySelector('img');
const title = document.getElementById('title');
const creater = document.getElementById('creater');
const progressDiv = document.getElementById('progressDiv');
const progress = document.getElementById('progress');
const currenttimespan = document.getElementById('currenttime');
const totaltimespan = document.getElementById('totaltime');

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

function updateprogressbar(e){
    if(isplaying)
    { 
        const {currentTime,duration} = e.srcElement;
        const progresspercent = (currentTime / duration) * 100;
        progress.style.width= `${progresspercent}%`;

        const durationminutes = Math.floor(duration / 60);
        let durationseconds = Math.floor(duration % 60);
        if(durationseconds < 10){
            durationseconds = `0${durationseconds}`;
        }
        if(durationseconds){
            totaltimespan.textContent = `${durationminutes}:${durationseconds}`
        }

        const currentminutes = Math.floor(currentTime / 60);
        let currentseconds = Math.floor(currentTime % 60);
        if(currentseconds < 10){
            currentseconds = `0${currentseconds}`;
        }
        if(currentseconds){
            currenttimespan.textContent = `${currentminutes}:${currentseconds}`
        } 
    }
}

function setprogressbar(e){
    // console.log(e);
    const  width = e.srcElement.clientWidth;
    // console.log(width);

    const {duration} = music;

    const clickx = e.offsetX;
    music.currentTime = (clickx / width) * duration;
}




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

prevbutton.addEventListener('click', prevsong);
nextbutton.addEventListener('click', nextsong);
music.addEventListener('timeupdate', updateprogressbar);
progressDiv.addEventListener('click', setprogressbar);
music.addEventListener('ended', nextsong);


//Play butonuna basıldığında durdur butonu ile değişmesi ve müsic next prev butonlarının çalışması yapıldı.