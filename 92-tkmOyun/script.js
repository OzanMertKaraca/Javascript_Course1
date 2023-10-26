const playerturn = document.getElementById('playerturn');
const playerscore = document.getElementById('playerscore');
const computerturn = document.getElementById('computerturn');
const computerscore = document.getElementById('computerscore');

const playerrock = document.getElementById('playerrock');
const playerpaper = document.getElementById('playerpaper');
const playerscissors = document.getElementById('playerscissors');

const computerrock = document.getElementById('computerrock');
const computerpaper = document.getElementById('computerpaper');
const computerscissors = document.getElementById('computerscissors');

const resulttext = document.getElementById('resulttext');

const allgameicons = document.querySelectorAll('.icon');

let computerchoice ='';
let playerscorenumber = 0;
let computerscorenumber = 0;


const choices = {
    rock : {name: 'Rock' , win:['scissors']},
    paper : {name: 'Paper' , win:['rock']},
    scissors : {name: 'Scissors' , win:['paper']},
}

function resetselected(){
    allgameicons.forEach((icon) => {
        icon.classList.remove('selected');
        stopConfetti();
    })
}

function computerrandomchoice(){
    const computerchoicenumber = Math.random();
    // console.log(computerchoicenumber);

    if(computerchoicenumber < 0.3 )
    {
        computerchoice = 'rock';
    }
    else if (computerchoicenumber <= 0.65 )
    {
        computerchoice = 'paper'
    }
    else if(computerchoicenumber <=1 )
    {
        computerchoice = 'scissors';
    }
    
}


function displaycomputerchoice(){


    switch(computerchoice){
        case 'rock':
          computerrock.classList.add('selected');
          computerturn.textContent = '--- Taş ';
            break;
        case 'paper':
        computerpaper.classList.add('selected');
        computerturn.textContent = '--- Kağıt ';
            break;
        case 'scissors':
        computerscissors.classList.add('selected');
        computerturn.textContent = '--- Makas ';
            break;
        default:
        }
    } 

function updatescore(playerchoice){
    // console.log(playerchoice , computerchoice);

    if(playerchoice === computerchoice)
    {
        resulttext.textContent = 'Eş Seçim Berabere!';
    }
    else{
        const choice = choices[playerchoice];
        if(choice.win.indexOf(computerchoice) == 0)
        {
            playerscorenumber++;
            resulttext.textContent = 'Kullanıcı 1 Kazandı!';
            playerscore.textContent = playerscorenumber;
            startConfetti();
        }
        else{
            computerscorenumber++;
            resulttext.textContent = 'Kullanıcı 2 Kazandı!';
            computerscore.textContent = computerscorenumber;
        }
    }
 

}


function checkresult(playerchoice){
    resetselected();
    computerrandomchoice();
    displaycomputerchoice();
    updatescore(playerchoice);
}

function select(playerchoice){

    checkresult(playerchoice);
    
  
    switch(playerchoice){
      case 'rock':
        playerrock.classList.add('selected');
        playerturn.textContent = '--- Taş ';
        break;
    case 'paper':
        playerpaper.classList.add('selected');
        playerturn.textContent = '--- Kağıt ';
        break;
    case 'scissors':
        playerscissors.classList.add('selected');
        playerturn.textContent = '--- Makas ';
        break;
    default:
    }  
   
}

function resetAll(){
    playerscorenumber = 0;
    computerscorenumber = 0;
    playerscore.textContent = playerscorenumber;
    computerscore.textContent = computerscorenumber;
    playerturn.textContent = '';
    computerturn.textContent = '';
    resulttext.textContent = '';
    resetselected();
}