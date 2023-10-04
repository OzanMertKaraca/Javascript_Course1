const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');



function calculatetemp(event){
    const currentvalue = Number(event.target.value);

    switch(event.target.name){
        case 'celsius' :
            kelvin.value = (currentvalue + 273.32).toFixed(2);;
            fahrenheit.value = (currentvalue * 1.8 + 32).toFixed(2);;
            break;
        case 'fahrenheit' :
            celsius.value = ((currentvalue - 32) / 1.8).toFixed(2);;
            kelvin.value = ((currentvalue - 32) / 1.8 + 273.32).toFixed(2);;
            break;
        case 'kelvin' :
            celsius.value = ((currentvalue - 273.32)).toFixed(2);;
            fahrenheit.value = (currentvalue * 1.8 + 32).toFixed(2);;
            break;   
        default:
            break;
    }

}