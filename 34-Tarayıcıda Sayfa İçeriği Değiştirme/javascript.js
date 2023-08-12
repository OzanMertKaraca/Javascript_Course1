// const pdegeri = document.querySelector('p');
// console.log(pdegeri.innerText); //innerText ile sadece çağrılan p etiketi içindeki text yazdırılır.

// pdegeri.innerText='Ozan Mert Karaca Javascript , React'; //P etiketindeki değeri güncelledim

// const pdegeri=document.querySelectorAll('p');
// pdegeri.forEach(ekle =>
//     {
//         console.log(ekle.innerText);
//         ekle.innerText+=' Yeni';  //+= olanı koruyup ekleme yapar
//     }
//     )

const icerik = document.querySelector('.icerik');
console.log(icerik.innerHTML);

//icerik.innerHTML ='<h2>Vue Js , React Js , Angular Js</h2>'; // içerik etiketi yerine h2 formatda yazdırır.

icerik.innerHTML +='<h2>Vue Js , React Js , Angular Js</h2>'; //içerik etiketi +  h2 formatda yazdırır.


//Js tarafında dizi oluşturup ekrana yazdırma.

const ogrenciler = ['Ozan','İlayda','Barış','Cansel'];
ogrenciler.forEach(ogrenciyaz => 
    {
        icerik.innerHTML +=`<p> ${ogrenciyaz} </p>`;
    }
    )
