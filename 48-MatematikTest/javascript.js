const coorectanswers = ['10','20','3','25'];//Kullanıcıdan gelen yanıtları E
const form = document.querySelector('.questions-form');
const result = document.querySelector('.result');
const succesmessage = document.querySelector('#succesmessage');//id ye göre çağırdım
const button = document.querySelector('.btn');

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
    
     
    let puan = 0;
    const yazdir = setInterval(() => {
     
      result.querySelector('span').textContent = `${puan}%`;//result classı içerisdeki span etiketine puanı yazdırdım
      if(puan == baspuan)
      {
        clearInterval(yazdir);
      }
      else
      {
        puan++;
      }

    },15); //Anımasyonlu yazdırmamı sağladım.
      
     if(baspuan == 100)
     {
       succesmessage.classList.remove('d-none');//Bravo Hepsi Doğru yazısı aktfileşeçek
       button.setAttribute('disabled',''); //Cevap 100 ise buton tıklanılamaz hale gelicektir.
     }
     else
     {
      succesmessage.classList.add('d-none');//Değilse Pasif olacak.
     }

    result.classList.remove('d-none');//kaldırmak istediğim classı yazdım
    result.querySelector('#sonuc').textContent = `${baspuan}%`;//result classı içerisdeki span etiketine puanı yazdırdım

    })

  
    // setTimeout(() => { //setTimeout da içerisine yazılan kod 1 kere çalışır
    //       console.log('ozii');
    // },2000); // Saniye sonra yazırılır.

    //  setInterval(() => {  //setInterval da içerisine yazılan kod hep çalışır
    // console.log('ozii');
    //   }, 2000); Her iki saniyede bir console ozii yazdırmaya devam eder.

// let i = 0 ;
// const yazdir = setInterval(() => {
//     console.log('Ozii');
//     i++;
//     if(i == 5)
//     {
//         clearInterval(yazdir);
//     } 
// },1000); //setInterval in sürekli  çalışmasını önlemek amacıyla bu şekilde kullandım.

