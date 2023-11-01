const menu = document.getElementById('menu');
const mainpopup = document.getElementById('mainpopup');
const contentdiv = document.getElementById('contentdiv');
const form = document.getElementById('form');
const formcontent = document.getElementById('formcontent');
const closepopup = document.getElementById('closepopup');
const delet = document.getElementById('delete');


menu.addEventListener('click' , () =>{
    mainpopup.style.display='block';
});

 form.addEventListener('submit' , e =>{
        e.preventDefault();
         const adform = form.name.value;
         formcontent.contentname.value = adform;
 });

mainpopup.addEventListener('click' , e => { //X tuşu dışında popup kapama işlemi yapmaktayım.
    if(e.target.className ==='mainpopup')
    {
        mainpopup.style.display='none';
    }
})

closepopup.addEventListener('click', () => {
    mainpopup.style.display='none';
})

delet.addEventListener('click' , e =>{
   if( e.target.classList.contains('delete'))
   {
     
   }
})

//Aslında Kurgulamam baştan yanlış oldu
//1. Popupdan kaydedilen değerleri  dinamic olarak  oluşturan fonskiyon yazılacak.
//2.Sonrasında  ad soay icon bütününde delete iconuna basıldığında silme işlemi

//Tasarımsal Eksiklikler