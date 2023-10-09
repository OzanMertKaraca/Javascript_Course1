const joke = document.getElementById('joke');
const button = document.getElementById('button');

const apiKey = 'gleftwpcySTXb9yGz5YRUA==wbaOXlRWvwQKZuqs';
const apiUrl = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'; 

const options={
    method:'GET',
    Headers:{
        'X-Api-Key':apiKey
    }
}

async function getjoke(){

    try{
        joke.textContent = 'Updating...';
        joke.textContent = 'Loading ...';
        button.disabled = true;
    
       const response = await fetch(apiUrl,options); //Await ile data gelmesini bekliyoruz diyebilirim.
       const data = await response.json();
    
       button.disabled = false;
       joke.textContent = 'Tell me a joke';
       joke.textContent = data[0].joke;
    }
    catch (error)
    {
        joke.textContent='Try again later';
        button.disabled= false;
        button.textContent = 'Tell me a joke';

    }
 
}

button.addEventListener('click', getjoke);