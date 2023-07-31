const notlar = [10,40,50,20,90,100];

for(let i = 0 ; i < notlar.length; i++)
{ 
   if(notlar[i] === 50)
   {
    continue;
   }
   console.log(notlar[i]);


   if(notlar[i] === 100)
   {
    console.log("En Yüksek Not!");
    break;
   }


}