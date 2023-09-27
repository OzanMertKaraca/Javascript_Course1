const gettodos = async () => {

    let response = await fetch('example/wozan.json') 

    if(response.status !== 200)
    {
        throw new Error("Doğru enpointe istek atmadınız!!!");
    }

    const data = await response.json();//response içindeki promise data değişkenine atadım
    return data;

};

gettodos().then((response) => {
    console.log(response);
}).catch((err) => {
    console.log(err.message );
});

//console.log(gettodos());