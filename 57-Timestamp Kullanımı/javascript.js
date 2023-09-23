//İkiTarihArasındaki Farkı Bulma
const startdate = new Date('08/15/2020 04:30:00');
const now = new Date();
console.log(startdate);

const difference=now.getTime()-startdate.getTime();//İki tarih arasındaki farkı milisecondds
console.log(difference);

const mins = Math.round(difference/10000/60); // iki tarih arasındaki dakika math.raund yakın olan değere yuvarlaydı.
const hours=Math.round(mins/60);
const days = Math.round(hours/24);
const years = Math.round(days/365);
console.log(`${mins} dakika geçmiş`);
console.log(`${hours} saat geçmiş`);
console.log(`${days} gün geçmiş`);
console.log(`${years} yıl geçmiş`);



console.log('timestamp:',now.getTime());
const timestamp=1695446565453;
console.log(new Date(timestamp));