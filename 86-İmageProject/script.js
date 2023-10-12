const imagecontainer = document.getElementById('imagediv');
const loading = document.getElementById('loading');

const count = 30;
const apiKey = '83oX7hnk4ZPmlMoWmqb9bKHcF3XMuGmSoDUZnr7VFEY';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

let imagesarrray = [];
let imagesloaded = 0;
let totalimages  = 0;

async function getimages(){
    try{
        const response = await fetch(apiUrl); //apiye istek atıyorum.
        imagesarrray = await response.json();
        displayimages();
    }
    catch(error){ }
};

function displayimages(){
    imagesloaded = 0 ;
    totalimages =imagesarrray.length; 
    imagesarrray.forEach((image) => {

        const items = document.createElement('a');
        setAttributes(items , {href : image.urls.regular});
        //items.setAttribute('href',image.urls.regular);
       const img = document.createElement('img');
           
        setAttributes(img , {
                src : image.urls.regular,
                alt : image.alt_description,
        });
        // img.setAttribute('src',image.urls.regular);
        // img.setAttribute('alt',image.alt_description);

        img.addEventListener('load',imageloaded);
        items.appendChild(img);// a etiketi içerisinde img yani eleman ekleme 
        imagecontainer.appendChild(items); //bu sayede ekranda görüntülenecek
    });
}

function imageloaded()
{
    imagesloaded++;
    if(imagesloaded === totalimages)
    {
        loading.hidden = true; //İstenilen fotoğraf sayısı tutat ise yükleniyor pasif olacak.
    }  
}

function setAttributes(element,attributes){ //helper function
    for(const key in attributes){
        element.setAttribute(key,attributes[key])//href veya img içerisinde değer.
    }
}

window.addEventListener('scroll',() => { //Sayfa sonunda resimler bittiğinde yeni resim çekicek.
    if(window.innerHeight + window.scrollY  >= document.body.offsetHeight - 1000 )
    {   
        getimages();
    }
});

getimages();

//window.innerHeight = browser yüksekliği.
//window.scrollY = yukardan kaydırlan mesafe