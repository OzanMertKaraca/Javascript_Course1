const students = [
        {name : 'ozan' , point : 70},
        {name : 'ceyda' , point : 30},
        {name : 'beril' , point : 55},
        {name : 'barış' , point : 35},
        {name : 'ahmet' , point : 55},
        {name : 'denis' , point : 75},
];

//Puanı 50 altı olanlara 15 puan eklenip yazdırılacak.
const filtered=students.filter(student => student.point < 50); // puanı 50 den küçük olanları dön

const plusPoint=filtered.map(student => {
        return `${student.name} adlı öğrencinin yeni notu ${student.point +15}` ;  //AltGr ; basılıp = ``      
})

console.log(plusPoint);

const newNotes=students.filter(student => student.point < 50).map(student =>
        `${student.name} adlı öğrencinin yeni notu ${student.point +15}`);

console.log(newNotes);