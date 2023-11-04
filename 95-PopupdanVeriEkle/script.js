const menu = document.getElementById('menu');
const mainpopup = document.getElementById('mainpopup');
const popupform = document.getElementById('popupform');
const todos = document.querySelector('.todos');

menu.addEventListener('click', () => {
    mainpopup.style.display= 'block';
});

popupform.addEventListener('submit', e => {
    e.preventDefault();
    const incomingvalue=popupform.formname.value.trim();
    if(incomingvalue.length)
    {
        listadd(incomingvalue)//Formdan aldığım değeri gönderdim.
        
    }
});

const listadd = (incomingvalue) => { //todo =>

    const html = 
    `
        <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${incomingvalue}</span>
                <i class="far fa-trash-alt delete"></i>
         </li>
    `;
    todos.innerHTML+=html;
};