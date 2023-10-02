const menuopen = document.querySelector('.menuopen');
const sidebar = document.querySelector('.sidebar');
const closebutton = document.querySelector('.menuclose');

menuopen.addEventListener('click',() => {

    sidebar.classList.toggle('showsidebar');//sidebar classına showsidebarı ekledim toogle yoksa ekler. varsa çıkarır.
});

closebutton.addEventListener('click',() => {
    
    sidebar.classList.remove('showsidebar');//showsidebar clasını kaldırıyorum.
});