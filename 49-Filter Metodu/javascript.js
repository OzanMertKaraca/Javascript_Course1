const points = [70 , 75 , 25 , 35 , 10 , 80 , 30 ];

// const studentspassed = points.filter(point => {
//     return point > 50;
// })//Yeni dizide 50den büyük olan değerleri yazdırır.
const studentspassed = points.filter(point => point > 50)
console.log(studentspassed);

const students = [
    {name : 'ozan',  passed:true},
    {name : 'barış', passed:false},
    {name : 'fatma', passed:true },
    {name : 'defne', passed:false},
];

const  dersdurum = students.filter(student => {
     return student.passed //true olanları döndüreceğim
     // return !student.passed //false olanları döndüreceğim
})

console.log(dersdurum);