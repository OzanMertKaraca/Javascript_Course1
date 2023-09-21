const now = new Date();
console.log(now);
console.log(typeof now);

console.log('Year:',now.getFullYear());
console.log('Month:',now.getMonth()+1);//Ocak 0 indexde tutuldu için 1 ay eksik gibi gösterir.Ondan dolayı +1 yazdım
console.log('Date:',now.getDate());
console.log('Day:',now.getDay());
console.log('Hours:',now.getHours());
console.log('Minute:',now.getMinutes());
console.log('Seconds:',now.getSeconds());

console.log('timestamp:',now.getTime());

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleTimeString());