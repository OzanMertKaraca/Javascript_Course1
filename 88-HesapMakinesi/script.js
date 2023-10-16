const calculatortitle = document.querySelector('h1');
const buttons = document.querySelectorAll('button');
const resetButton = document.getElementById('resetButton');


let initialValue = 0;
let operatorValue = '';
let isWaiting = false;



function sendnumbervalue(number){
    // calculatortitle.textContent = number;
  
    if(isWaiting)
    {
     
        calculatortitle.textContent = number;
        isWaiting = false;
    }
    else{
        const displayvalue = calculatortitle.textContent;
        calculatortitle.textContent = displayvalue === '0' ? number : displayvalue+number;
        //İlk başta yazılan değer 0 ise buttondan gönderilen değeri yazdırır sonucunda iki değeri toplar

    }

}

function adddecimal(){
    if(!calculatortitle.textContent.includes('.'))
    { //Noktayı içermiyorsa ekleyecek !
        calculatortitle.textContent = `${calculatortitle.textContent}.`;
    }
}

function useoperator(operator){
    const currentvalue = Number(calculatortitle.textContent); //Number türüne convert

    if(operatorValue && isWaiting){
        operatorValue = operator;
        return;
    }

    if(!initialValue){
        initialValue = currentvalue;
    }
    else{
        const calculation = calc[operatorValue](initialValue,currentvalue)
        calculatortitle.textContent = calculation;
        initialValue = calculation;
    }
    isWaiting = true;
    operatorValue = operator;
    

}

const calc = {
    '/' : (firstnumber , secondnumber) => firstnumber / secondnumber,
    '*' : (firstnumber , secondnumber) => firstnumber * secondnumber,
    '+' : (firstnumber , secondnumber) => firstnumber + secondnumber,
    '-' : (firstnumber , secondnumber) => firstnumber - secondnumber,
    '=' : (firstnumber , secondnumber) => secondnumber,
}

buttons.forEach((button) => {
    if(button.classList.length === 0 ){//Herhangi bir class yok ise tıklanıldığında çağıralacak fonks.
        button.addEventListener('click',() => sendnumbervalue(button.value));
    }
    else if(button.classList.contains('operator')){ //contains operator classını içeriyor ise
        button.addEventListener('click',() => useoperator(button.value));
    }
    else if(button.classList.contains('decimal')){
        button.addEventListener('click',() => adddecimal());
    }
});


resetButton.addEventListener('click', resetAll);

function resetAll(){
    calculatortitle.textContent = '0';
    initialValue = 0;
    operatorValue = '';
    isWaiting = false;
}