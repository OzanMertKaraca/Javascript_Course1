const variable = [
    {hobby: "swimming" , "person":"Ozan"},
    {hobby: "football" , "person":"Ozan"},
    {hobby: "tennis"   , "person":"Ozan"}
];

console.log(JSON.stringify(variable));

localStorage.setItem('todos',JSON.stringify(variable));

const storedData = localStorage.getItem('todos');

console.log(JSON.parse(storedData));

//Array dizini json stringy ile json string çevirdim  sonra json parse ile de array haline çevirdim.??