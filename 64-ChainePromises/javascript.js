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


gettodos('example/ozan.json')
    .then((data) =>{
        console.log("Promise 1",data);
    return gettodos('example/baris.json');
      })  .then((data) =>{
        console.log("Promise 2",data);
    })
    .catch((err) => {
        console.log(err);
    });
