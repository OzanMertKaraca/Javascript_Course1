// const todolist = document.getElementById('todolist');
// const progresslist = document.getElementById('progresslist');
// const donelist = document.getElementById('donelist');


// let todolistarray = [];
// let progresslistarray = [];
// let donelistarray = [];

// let listArrays=[];

// let updatedOnload = false;

// function getsavedcolumns(){
//    if(localStorage.getItem('todoItems')){
//          todolistarray = JSON.parse(localStorage.getItem('todoItems'));
//          progresslistarray = JSON.parse(localStorage.getItem('progressItems'));
//          donelistarray = JSON.parse(localStorage.getItem('doneItems'));
//    } else{
//       todolistarray = ['React Entegrasyonu' , 'Angular Entegrasyonu'];
//       progresslistarray = ['Sendgrid Entegrasyonu'];
//       donelistarray =  ['Verimor Entegrasoyunu'];
//    }     
// }

// function updatesavedcolumn(){
//  listArrays = [todolistarray , progresslistarray , donelistarray];
//  const arraysname = ['todo' , 'progress' , 'done'];
//  arraysname.forEach((arrayName , index) =>{
//     localStorage.setItem(`${arrayName}Items`, JSON.stringify(listArrays[index]));
//  })
// }

// function createItem(columnItem , column , item , index ){
//    const listItem = document.createElement('li');
//    listItem.classList.add('dragitem');
//    listItem.textContent = item;
//    columnItem.appendChild(listItem);

// }


// function updateDOM (){

//    if(!updatedOnload){
//       getsavedcolumns();
//    }

//    todolist.textContent = '';
//    todolistarray.forEach((todoItem,index) => {
//       createItem(todolist , 0 , todoItem , index);
//    })
//    progresslist.textContent = '';
//    donelist.textContent = '';

//    updatedOnload = true;
   
//    updatesavedcolumn();
// }


// updateDOM();

const todoList = document.getElementById('todo-list');
const progressList = document.getElementById('progress-list');
const doneList = document.getElementById('done-list');

let todoListArray = [];
let progressListArray = [];
let doneListArray = [];
let listArrays = [];

let updatedOnLoad = false;

function getSavedColumns() {
  if (localStorage.getItem('todoItems')) {
    todoListArray = JSON.parse(localStorage.getItem('todoItems'));
    progressListArray = JSON.parse(localStorage.getItem('progressItems'));
    doneListArray = JSON.parse(localStorage.getItem('doneItems'));
  } else {
    todoListArray = ['React Entegrasyonu', 'Angular Entegrasyonu'];
    progressListArray = ['Sendgrid Entegrasyonu'];
    doneListArray = ['Verimor Entegrasyonu'];
  }
}

function updateSavedColumns() {
  listArrays = [todoListArray, progressListArray, doneListArray];
  const arrayNames = ['todo', 'progress', 'done'];
  arrayNames.forEach((arrayName, index) => {
    localStorage.setItem(
      `${arrayName}Items`,
      JSON.stringify(listArrays[index])
    );
  });
}

function createItem(columnItem, column, item, index) {
  console.log('columnItem', columnItem);
  console.log('column', column);
  console.log('item', item);
  console.log('index', index);

  const listItem = document.createElement('li');
  listItem.classList.add('drag-item');
  listItem.textContent = item;
  columnItem.appendChild(listItem);
}

function updateDOM() {
  if (!updatedOnLoad) {
    getSavedColumns();
  }

  todoList.textContent = '';
  todoListArray.forEach((todoItem, index) => {
    createItem(todoList, 0, todoItem, index);
  });

  progressList.textContent = '';
  progressListArray.forEach((progressItem, index) => {
    createItem(progressList, 1, progressItem, index);
  });

  doneList.textContent = '';
  doneListArray.forEach((doneItem, index) => {
    createItem(doneList, 2, doneItem, index);
  });

  updatedOnLoad = true;
  updateSavedColumns();
}

updateDOM();
