//Sort Metodunu sıralama yapmak istediğimizde kullanırız.

const names = ['ozan' , 'ezgi' , 'ceyda' , 'barış'];
names.sort(); //A-Z doğru sıralama
names.reverse();//Z-A doğru sıralama 
console.log(names);


const points = [70 , 90 , 50 , 65 ];
points.sort((a,b) => );//Büyükten küçüğe sıraladım    //a-b küçükten büyüğe sıralama
console.log(points);


const students = [
        {name:'ozan',point:50},
        {name:'ezgi',point:70},
        {name:'ceyda',point:90},
        {name:'barış',point:100},
];

students.sort((a,b) => {
        if(a.point > b.point)
        {
                return -1;
        }
        if(b.point > a.point)
        {
                return +1;
        }
        else
        {
                return 0;
        }
});
//students.sort((a,b) => b.point - a.point);  kısa hali 


console.log(students);