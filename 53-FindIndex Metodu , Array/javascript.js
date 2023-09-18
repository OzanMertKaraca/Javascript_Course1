const points = [70 , 80 , 90  , 50 , 40 , 20];
const arrayIndex = points.findIndex(point => point == 50);
points[arrayIndex]=100;
console.log(points);  //Dizideki spesifik değeri güncelleme 



const students = [ //Barış ismini değiştireceğim sırası aynı kalacak.
        {name:'ozan' , point:50},
        {name:'ezgi' , point:80},
        {name:'barış', point:70},
        {name:'ceyda', point:90},
];
//== eşitmi?
// const objectIndex = students.findIndex(student => student.name == 'barış');
// students[objectIndex].name='deniz';
// console.log(students);

//ceyda puanı güncelle 50 yap
const objectIndex = students.findIndex(student => student.name == 'ceyda');
students[objectIndex].point=50;
console.log(students);
