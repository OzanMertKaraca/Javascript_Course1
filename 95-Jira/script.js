let todolistarray = [];
let progresslistarray = [];
let donelistarray = [];

let listArrays=[];


function getsavedcolumns(){

}

function updatesavedcolumn(){
 listArrays = [todolistarray , progresslistarray , donelistarray];
 const arraysname = ['todo' , 'progress' , 'done'];
 arraysname.forEach((arrayName , index) =>{
    localStorage.setItem(`${arrayName}Items`, JSON.stringify(listArrays[index]));
 })
}

getsavedcolumns();
updatesavedcolumn();