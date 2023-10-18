const menubar = document.getElementById('menubar');
const overlay = document.getElementById('overlay');
const navmainpage = document.getElementById('navmainpage');
const navabout = document.getElementById('navabout');
const navservices = document.getElementById('navservices');
const navprices = document.getElementById('navprices');
const navcontact = document.getElementById('navcontact');
const navitems =[navmainpage,navabout,navservices,navprices,navcontact];

function navanimation(direction1,direction2){
    navitems.forEach((nav,i)=>{
        nav.classList.replace(
            `slide-${direction1}-${ i + 1 }`, //slide-out-1
            `slide-${direction2}-${ i + 1 }`  //slide-in-1 çıktı 
    );
    });
}


function togglenav(){ //Menü tıklanıldığında animasyonu
    menubar.classList.toggle('change');
    overlay.classList.toggle('overlay-active');

    if(overlay.classList.contains('overlay-active')){
        // overlay.classList.remove('overlay-slide-left');
        // overlay.classList.add('overlay-slide-right');
        
        overlay.classList.replace('overlay-slide-left','overlay-slide-right');

        navanimation('out','in');

        // navmainpage.classList.remove('slide-out-1');
        // navmainpage.classList.add('slide-in-1');
        // navabout.classList.remove('slide-out-2');
        // navabout.classList.add('slide-in-2');
        // navservices.classList.remove('slide-out-3');
        // navservices.classList.add('slide-in-3');
        // navprices.classList.remove('slide-out-4');
        // navprices.classList.add('slide-in-4');
        // navcontact.classList.remove('slide-out-5');
        // navcontact.classList.add('slide-in-5');
        
    }
    else{
        // overlay.classList.remove('overlay-slide-right');
        // overlay.classList.add('overlay-slide-left');

        overlay.classList.replace('overlay-slide-right','overlay-slide-left');

        navanimation('in','out');
        // navmainpage.classList.remove('slide-in-1');
        // navmainpage.classList.add('slide-out-1');
        // navabout.classList.remove('slide-in-2');
        // navabout.classList.add('slide-out-2');
        // navservices.classList.remove('slide-in-3');
        // navservices.classList.add('slide-out-3');
        // navprices.classList.remove('slide-in-4');
        // navprices.classList.add('slide-out-4');
        // navcontact.classList.remove('slide-in-5');
        // navcontact.classList.add('slide-out-5');
    }
}

menubar.addEventListener('click',togglenav);
navitems.forEach((nav) => {
    nav.addEventListener('click',togglenav);
})