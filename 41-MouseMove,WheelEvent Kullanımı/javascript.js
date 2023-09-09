const kutu = document.querySelector('.kutu');//.kutu olan classı seçtim 

kutu.addEventListener('mousemove', e => { //mouse hareket
     // console.log(e);//verip mouse koordinatlarını yazdırdım.
     // console.log(e.offsetX,e.offsetY);//Tıklanıldığında x , y koordinatlarını yazdırdım.
     kutu.textContent=`X Koordinatı : ${e.offsetX} , Y Koordinatı ${e.offsetY} `;//Mouse ile önyüzde bulunan kutuda 
     //hareket ettirildiğinde konumun bilgilerini yazdırdım.
})

document.addEventListener('wheel', e => {
     console.log(e.pageX,e.pageY);
})