const coorectanswers = ['E','E','E','E'];//Kullanıcıdan gelen yanıtları E
const form = document.querySelector('.questions-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let baspuan = 0;
    const useranswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value]; //Kullanıcıdan gelen yanıtları useranswers değişkenine atadım

    useranswers.forEach((answer,index) => { //useranswers değişkenini kullanıcıdan gelen değerleri forEach döngüsünde döndürüp 
       if(answer === coorectanswers[index]) //coorectanswers değişkeninde değerle uyaşanlar için baslangıç puanına 
       {
            baspuan += 25; //25 puan ekleyerek ekrana yazdırdım.
       }
    })
      
    // console.log(baspuan);
    result.classList.remove('d-none');//kaldırmak istediğim classı yazdım

    result.querySelector('span').textContent = `${baspuan}%`;//result classı içerisdeki span etiketine puanı yazdırdım

    })
