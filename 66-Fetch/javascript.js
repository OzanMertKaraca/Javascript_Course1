// fetch('https://rickandmortyapi.com/api/episode/37')
// .then((response) => response.json())
// .then((json) => console.log(json));

//Aynı İşlem
// .then(response => {
//     console.log(response);
//     //return response.json();
// })
// .then(json => console.log(json)); 


fetch('example/ozan.json')
.then((response) => response.json())
.then(json => console.log(json));

// fetch('example/ozan.json')
// .then((response) => {
//     return response.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// });
