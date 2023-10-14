const apikey='2d8792fbf879f626f9232a332f8b1562';
const form = document.getElementById('form');
const city = document.getElementById('city');
const weather = document.getElementById('weather');
const icon = document.getElementById('icon');
const temperature = document.getElementById('temperature');
const temperaturedetails = document.getElementById('temperaturedetails');
const description = document.getElementById('description');



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const cityvalue=city.value;
    getWeather(cityvalue);

})


async function getWeather(cityvalue){

    try {
        const response = await 
        fetch(
            //`https://pro.openweathermap.org/data/2.5/forecast/hourly?${cityvalue}&appid=${apikey}`
            `https://.api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=${apikey}&units=metric`
             );
    
        const data = await response.json();
    
        const temperature = Math.round(data.main.temp); //Yuvarlama Math.round
        const icon = data.weather[0].icon;
        const details = [
            `Hissedilen : ${Math.round(data.main.feels_like)}`,
            `Nem : ${data.main.humidity}%`,
            `Rüzgar : ${data.wind.speed} m/s`,
        ];
        
        icon.innerHtml= `<img src = "http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon"`;
        temperature.textContent  = `${temperature}°C`;
        
      let temperaturedetailsnew =  temperaturedetails.map((detail) => 
      ` <div>${detail}</div> `).join(''); //join('') ile virgülleri sildim.
        description.textContent='';
        temperaturedetails.innerHtml =  temperaturedetailsnew;
        
    } catch (error) {
        icon.innerHTML='';
        temperature.textContent='';
        temperaturedetails.innerHtml='';
        description.textContent='Lütfen Geçerli Bir Şehir Giriniz:'
        

    }

};

