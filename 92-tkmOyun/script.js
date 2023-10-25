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

const allgameicons = document.querySelectorAll('.icon');

function resetselected(){
    allgameicons.forEach((icon) => {
        icon.classList.remove('selected');
    })
}

function select(playerchoice){
    console.log(playerchoice);
    resetselected();
    switch(playerchoice){
      case'rock':
        playerrock.classList.add('selected');
        playerturn.textContent = '--- Taş ';
        break;
    case'paper':
        playerpaper.classList.add('selected');
        playerturn.textContent = '--- Kağıt ';
        break;
    case'scissors':
        playerscissors.classList.add('selected');
        playerturn.textContent = '--- Makas ';
        break;
    default:
    }
    
}