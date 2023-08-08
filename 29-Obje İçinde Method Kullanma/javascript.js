let ogrenci = {
    ad:'Ozan',
    yas:'20',
    dersler:['Matematik','Türkçe','Tarih'],

    printlessons:function()
    {
        console.log(this.dersler);
        //console.log(this);
        this.dersler.forEach(a =>    // forEach ile Dersler dizisindeki değerleri console yazdırdım.
            {
                console.log(a);
            } )
    }
}

ogrenci.printlessons();
//console.log(this);