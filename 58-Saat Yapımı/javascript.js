const clock = document.querySelector('.clock');

const tick = () => {

    const now = new Date();
    const hours=now.getHours(); 
    const minutes =now.getMinutes();
    const seconds=now.getSeconds();
    
    // console.log(hours,minutes,seconds);

     const html =
     ` 
     <span>${hours}</span> :
     <span>${minutes}</span> : 
     <span>${seconds}</span> 
     `
      clock.innerHTML=html;
  

};
setInterval(tick,1000);

//Her Saniye Güncelleniyor Date objesi sürekli  güncelleniyor.
//Her Saniye çağırabilmek için setınterval metodunu kullanıyorum