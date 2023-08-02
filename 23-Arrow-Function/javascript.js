// const karealan = kenar => //Eğer Birden fazla parametre alınır ise (kenar) ile  yazılır.
// {
//     return kenar**2;   //Return tek satır ise süslü parantez açılmasına gerek yoktur.
// }

const karealan1 = kenar1 =>
{
    return kenar1**2;
}

const sonuc1 = karealan1(6);
console.log(sonuc1);


const karealan = kenar => kenar**2;

const sonuc = karealan(6);
console.log(sonuc);


const bars = () => 'Barış';     //Parametre olmadığında arrow function yazımı
// {
//     return 'Barış';
// }
const sonuc2=bars();
console.log(sonuc2);   

const fatura = function(urun,vergi)
{
       let toplam=0;
       for(let i=0; i < urun.length; i++ )
       {
           toplam += urun[i] + urun[i] * vergi;
       }

    return toplam;
}

console.log(fatura([10,20],0.25));

const fatura1 = (urun1,vergi1) => {
    let toplam1=0;
    for(let i = 0 ; i < urun1.length ; i++)
    {
        toplam1 += urun1[i] + urun1[i] * vergi1;
    }
    return toplam1;
} 

console.log(fatura1([40,40],0.25));