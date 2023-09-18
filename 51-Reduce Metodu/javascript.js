// const points = [70 , 75 , 25 , 35 , 10 , 80 , 30];

// const result = points.reduce((value,point) => {
//   if (point > 50) //50den büyük olan değerleri ekrana yazdıracaktır.
//   {
//     value++;

//   }
//   return value;
// },0);--

// console.log(result);

const students = [
      {name:'ozan' , point:90},
      {name:'ezgi' , point:85},
      {name:'barış', point:55},
      {name:'ozan', point:50},
      {name:'ezgi', point:50},
];
const ozanpuan = students.reduce((value,student)=> {
      if(student.name =="ozan")
      {
         value+=student.point;
      }
      return value;
    },0) //value başlangıç değerini 0'a eşitledim.

    console.log(ozanpuan);