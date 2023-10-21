const remainingdiv = document.getElementById('remainingdiv');
const remainingform = document.getElementById('remainingform');
const dateinput = document.getElementById('date-picker');

const timediv = document.getElementById('timediv');
const timespans = document.querySelectorAll('span');
const resetbutton = document.getElementById('resetbutton');

const completediv = document.getElementById('complete');
const completebutton = document.getElementById('completebutton');

//console.log(new Date().toISOString().split('T')[0]); //toISOString metodunda  2023-10-21T05:03:55.131Z tarihi T ile ayırıp arrayda tutup 0. indexini alıyorum.
//*1
let chosendate = '';
let currendatevalue = new Date().getTime();
let currenttimeinterval;
let localstorgetime;

const today = new Date().toISOString().split('T')[0]; 

dateinput.setAttribute('min' , today); //İnput'a minimun tarih değeri ekleyip geçmiş tarihleri seçememesi sağladım.


const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;


function  updateDOM() {

currenttimeinterval = setInterval(() => {

    remainingdiv.hidden = true;

    const now = new Date().getTime();
    const betweendate =  currendatevalue - now; 
    // console.log(betweendate);
    const days = Math.floor(betweendate / day);
    const hours = Math.floor((betweendate % day) / hour );
    const minutes = Math.floor((betweendate % hour ) / minute);
    const seconds = Math.floor((betweendate % minute ) / second);

    if(betweendate < 0){
        timediv.hidden = true;
        clearInterval(currenttimeinterval);
        completediv.hidden = false;
    }
    else{
        remainingdiv.hidden=true; //Hesaplama yapıldıktan sonra bu div'in görünürlüğünü  hidden  ile pasife  çekiyorum.
        timediv.hidden=false;
    
    
        timespans[0].textContent= `${days}`;
        timespans[1].textContent= `${hours}`;
        timespans[2].textContent= `${minutes}`;
        timespans[3].textContent= `${seconds}`;
        
    //console.log(days,hours , minutes , seconds);
    }
    },1000) ;
}




function calculatetime(e) {
    e.preventDefault();
    chosendate  = remainingform.date.value; //Girilen tarihimi değişkenime atıyorum.
    // console.log(new Date(chosendate).getTime());
    // console.log(new Date().getTime());
   
//     localstorgetime = {
//     date : chosendate,
//    };
//    localStorage.setItem('time',JSON.stringify(localstorgetime));

    if(chosendate == '')
    {
        alert('Lütfen Tarih Seçimi Yapınız.');
    }
    else{
        currendatevalue = new Date(chosendate).getTime();
        updateDOM();
    }
}

function reset() {
    clearInterval(currenttimeinterval);
    remainingdiv.hidden=false; 
    timediv.hidden=true;
    remainingform.date.value = '';
    completediv.hidden=true;
}

remainingform.addEventListener('submit', calculatetime);
resetbutton.addEventListener('click' , reset);
completebutton.addEventListener('click', reset);


