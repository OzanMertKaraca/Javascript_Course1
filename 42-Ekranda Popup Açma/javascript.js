const button = document.querySelector('button');//
const mainPopup=document.querySelector('.main-popup'); //main-popup classını çağırdım 
const buttonclose = document.querySelector('.popup-close'); 

button.addEventListener('click', () => { //button click basılsıldığında main-popup classtındaki style değişmesini istiyorum
     mainPopup.style.display='block';
})

buttonclose.addEventListener('click', () => { //X butonuna basıldığında popup kapanacak fonks.
     mainPopup.style.display='none';
})

// X tuşu yerine sayfada herhangi bir alana tıklanıldığında kapatan fonks.
mainPopup.addEventListener('click' , e => {
     console.log(e.target);
     if(e.target.className ==='main-popup')
     {
          mainPopup.style.display='none';
     }
})
