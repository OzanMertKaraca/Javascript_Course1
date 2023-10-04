const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
    const accordionbutton = accordion.querySelector('.accordionbutton');
    accordionbutton.addEventListener('click',() => {
        accordion.querySelector('.minusicon').classList.toggle('active');
        accordion.querySelector('.plusicon').classList.toggle('active');
        accordion.querySelector('.accordiontext').classList.toggle('active');
    });
});


//İlk olarak accordion butonunu accordions değişkenine atadım
//accordions değişkeninnin elemanlarını foreach ile dönüyorum her elemaa accordion dedim
//accordion içerisindeki accordionbutton ' u = accordionbutton değişkenine atadım
//accordionbutton classına click event'i ekledim ve içerisindeki basıldığında toggle methodu ile active classını
//varsa eklenmesi yoksa kaldırılmasını sağladım

//toggle methodu varsa kaldırır yoksa ekler.