const currencyFirst = document.getElementById('currencyFirst');
const currencysecond = document.getElementById('currencysecond');
const count = document.getElementById('count');
const equal = document.getElementById('equal');
const exchangerate = document.getElementById('exchangerate');

updateRate();

function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/47258d02e16b60a13d7698db/latest/${currencyFirst.value}`
    )
    .then((res) => res.json())
    .then((data)=>{
     console.log(data);

     const rate = data.conversion_rates[currencysecond.value]; 
     exchangerate.textContent=`1 ${currencyFirst.value} = ${rate} ${currencysecond.value} `;


     equal.textContent = (count.value * rate).toFixed(2); //toFixed virgülden sonra kaç karakter görünmesi isteğimizi yazar.

    });
}

currencyFirst.addEventListener('change',updateRate);
currencysecond.addEventListener('change',updateRate);
count.addEventListener('input',updateRate);


//Not1
// function updateRate(){
//     fetch(`https://v6.exchangerate-api.com/v6/47258d02e16b60a13d7698db/latest/${currencyFirst.value}`
//     ).then((res) => res.json()).then((data)=>{
//         console.log(data);
//     });
// }
//https://v6.exchangerate-api.com/v6/47258d02e16b60a13d7698db/latest/${currencyFirst.value} seçtiğim değere istek atıyorum
//dönen dataya res dedim json formatına dönüştürdüm data olarak ekrana yazdım.