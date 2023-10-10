const watchbutton = document.getElementById('watchbutton');
const videoactive = document.querySelector('.videocontainer');
const close = document.querySelector('.close');
const video = document.querySelector('video'); //html etiketi olarka videoyu çektim.

watchbutton.addEventListener('click',() =>  {
    videoactive.classList.remove('active');
});

close.addEventListener('click' , () => {
    videoactive.classList.add('active');
    video.pause();//methodu
    video.currentTime = 0;//video her seferinde baştan başlayacak.
});