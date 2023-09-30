const nextIcon = document.querySelector('.next');
const prevIcon = document.querySelector('.prev');
const imagecontainer = document.querySelector('.imagecontainer');
const imgsay = document.querySelector('img');


let currentImage = 1;
let timeout;

nextIcon.addEventListener('click',() => {
    currentImage++;
    clearTimeout(timeout);//Süre beklemeden geçiş yapıldıktan sonra süre bozulduğu için süreyi sıfırladım
    updateImg();
});

prevIcon.addEventListener('click',() => {
    currentImage--;
    clearTimeout(timeout);
    updateImg();
})

function updateImg() {
    if(currentImage > imgsay.length){
        currentImage = 1;
    }else if(currentImage < 1){
        currentImage = imgsay.length;
    }
    imagecontainer.style.transform = `translateX(-${(currentImage - 1) * 700}px)`;
    timeout=setTimeout(()=>{
        currentImage++;
        updateImg();

    },2000)//Milisaniye cinsiden yazılır sonrasında çalışır.
};

updateImg();

//Son Resimden sonra beyaz sayfa çıkıyor  ve ilk resimden geri işlemi yapamıyorum  araştırdım 
//şuanda çözümü göremedim şimdilik plandan ayrılmamak için üzerinde durmuyorum geri gelip düzelteceğim
//Buraya comment atacağım.


