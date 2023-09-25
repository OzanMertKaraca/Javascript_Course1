const gettodos = (resource,callback) => {

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

request.open('GET',resource);
request.send();
}

gettodos('example/baris.json',(err,data) =>{
    console.log(data); 
    gettodos('example/ozan.json',(err,data) =>{
        console.log(data); 
    });
});