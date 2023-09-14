const points = [70 , 75 , 25 , 35 , 10 , 80 , 27];
//map metodu elemanları tek başına geriye döndürür.

const newpoints = points.map(point => {
    return point + 10; // her elemana 10 puan ekleyip yazdıracak.
})

console.log(points);
console.log(newpoints);


const students = [
    {name : 'ozan',  point:90},
    {name : 'barış', point:70},
    {name : 'fatma', point:20},
    {name : 'defne', point:100},
];

//50 puan altında olanlara 15 puan eklensin.

const newstudentpoints = students.map(student =>{
    if(student.point < 50)
    {
        student.point  += +15;
        return student;
       // return { name:student.name , point:student.point +15}
    }
    else
    {
        return student
    }
})

console.log(newstudentpoints)