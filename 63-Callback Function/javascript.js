const gettodos = (callback) => {

const request = new XMLHttpRequest();

request.addEventListener('readystatechange',()=> {
   // console.log(request,request.readyState);
    if(request.readyState === 4 && request.status === 200)
    {
       const data =JSON.parse(request.responseText);//Gelen datayı json formata dönüştürdüm.
        callback(undefined,data);
    }
    
    else if(request.readyState === 4)
    {
       //console.log("Başarısız");
       callback('Başarısız',undefined);
    }
   
});

request.open('GET','https://jsonplaceholder.typicode.com/todos');
request.send();
}

gettodos((err,data) =>{
   // console.log(err,data);
   if(err)
   {
    console.log(err);
   }
   else
   {
    console.log(data);
   }
});