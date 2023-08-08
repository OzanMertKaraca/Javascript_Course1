let ogrenci = {
    ad:'Ozan',
    yas:'20',
    dersler:[
         {isim:'Matematik', puan:90},
         {isim:'Tarih', puan:80},
         {isim:'Fen', puan:70},
   ],

    printlessons:function()
    {
        console.log(this.dersler);
        //console.log(this);
        this.dersler.forEach(a =>    // a = derslerdeki her bir objeyi temsil etmektedir.
            {
                console.log(a.isim,a.puan); 
            } )
    }
}

ogrenci.printlessons();
//console.log(this);