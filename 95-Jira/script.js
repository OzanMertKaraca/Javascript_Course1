const listColumns = document.querySelectorAll('.drag-item-list');

const todoList = document.getElementById('todo-list');
const progressList = document.getElementById('progress-list');
const doneList = document.getElementById('done-list');


const addbuttons = document.querySelectorAll('.add-btn:not(.update)');//classı add-btn olan elemanları çağır update olanları değil.
const savebuttons = document.querySelectorAll('.update');
const addItemcontainers = document.querySelectorAll('.add-container');
const addItems = document.querySelectorAll('.add-item');


let todoListArray = [];
let progressListArray = [];
let doneListArray = [];
let listArrays = [];

let draggedItem;
let currentColumn;

let updatedOnLoad = false;

let dragging = false;

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
  //   console.log('columnItem', columnItem);
  //   console.log('column', column);
  //   console.log('item', item);
  //   console.log('index', index);

  const listItem = document.createElement('li');
  listItem.classList.add('drag-item');
  listItem.textContent = item;
  listItem.draggable = true;
  listItem.contentEditable = true;
  listItem.setAttribute('onfocusout' , `updateItem(${index},${column})`);
  listItem.setAttribute('ondragstart', 'drag(event)');
  columnItem.appendChild(listItem);
}

 function updateItem(id,column){
  const selectedarray = listArrays[column];
  const selectedColumn = listColumns[column].children;
  console.log(selectedarray);
 

  if (dragging === false)//!dragging 
  {
    if(!selectedColumn[id].textContent){
      delete selectedarray[id];
    }else {
      selectedarray[id] = selectedColumn[id].textContent;
    }
    updateDOM();
  } 
 

  }


function allowDrop(e) {
  e.preventDefault();
}
function dragEnter(column) {
  //   console.log(listColumns[column]);
  listColumns[column].classList.add('over');
  currentColumn = column;
}

function updateInsideArrays() {
  todoListArray = [];
  for (let i = 0; i < todoList.children.length; i++) {
    todoListArray.push(todoList.children[i].textContent);
  }
  progressListArray = [];
  for (let i = 0; i < progressList.children.length; i++) {
    progressListArray.push(progressList.children[i].textContent);
  }
  doneListArray = [];
  for (let i = 0; i < doneList.children.length; i++) {
    doneListArray.push(doneList.children[i].textContent);
  }

  updateDOM();
}

function drop(e) {
  e.preventDefault();
  const parent = listColumns[currentColumn];

  listColumns.forEach((column) => {
    column.classList.remove('over');
  });
  parent.appendChild(draggedItem);
  updateInsideArrays();
  dragging = false;
}

function drag(e) {
  draggedItem = e.target;
  console.log(draggedItem);
  dragging = true;
}

function filterarray(array){
  const filteredarray =  array.filter((item) => item !== null);
  return filteredarray;

}

function updateDOM() {
  if (!updatedOnLoad) {
    getSavedColumns();
  }

  todoList.textContent = '';
  todoListArray.forEach((todoItem, index) => {
    createItem(todoList, 0, todoItem, index);
  });
  todoListArray = filterarray(todoListArray);

  progressList.textContent = '';
  progressListArray.forEach((progressItem, index) => {
    createItem(progressList, 1, progressItem, index);
  });
  progressListArray = filterarray(progressListArray);

  doneList.textContent = '';
  doneListArray.forEach((doneItem, index) => {
    createItem(doneList, 2, doneItem, index);
  });
  doneListArray = filterarray(doneListArray);

  updatedOnLoad = true;
  updateSavedColumns();
}

function showitemdiv(column){
   addbuttons[column].style.visibility = 'hidden'; 
   addItemcontainers[column].style.display = 'flex';
   savebuttons[column].style.display = 'flex';

}

function hideitemdiv(column){
  addbuttons[column].style.visibility = 'visible'; 
  addItemcontainers[column].style.display = 'none';
  savebuttons[column].style.display = 'none';
  addtocolumn(column);
}

function addtocolumn(column){
  // console.log( addItems[column].textContent);
  const Itemtext = addItems[column].textContent;
   const selectedarray = listArrays[column];
   selectedarray.push(Itemtext);
   addItems[column].textContent = '';
   updateDOM();
  
}

updateDOM();