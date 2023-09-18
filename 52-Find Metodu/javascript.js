const points = [80 , 75 , 20 , 30 , 90 ];
//-içerisindeki koşul true olduğunda diğer değerlere bakmadan sonucu döner.

const highpoint=points.find(point => {
      return point > 70 
});
console.log(highpoint);