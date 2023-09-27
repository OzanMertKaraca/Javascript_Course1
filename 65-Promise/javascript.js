const gettodos = (resource) => {

    return new Promise((resolve,reject) => {

const request = new XMLHttpRequest();

request.addEventListener('readystatechange',()=> {
  
    if(request.readyState === 4 && request.status === 200)
    {
       const data =JSON.parse(request.responseText);//Gelen datayı json formata dönüştürdüm.
       resolve(data);
      
    }
    
    else if(request.readyState === 4)
    {
        reject("Başarılı değil");

    }
   
});

request.open('GET',resource);
request.send();

    })
};

//gettodos('example/baris.json',(err,data) =>{
 //   console.log(data); 
gettodos('example/ozan.json')
    .then((data) =>{
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });


// const getIt = () => {

//     return new Promise((resolve,reject) => {
//       //  resolve("Başarılı Data");
//         reject("Başarısız Data");
//     });
// };

// getIt().then(data  => {  //(data)
//     console.log("Başarılı",data);
// },err => { //(err)
//     console.log("Başarısız",data);
// });

// getIt().then(
//   (data) => {
//     console.log('Başarılı',data);
//   }).catch(err => {
//     console.log('Başarısız',err);
//   });

