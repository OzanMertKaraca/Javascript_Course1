const menu = document.getElementById('menu');
const mainpopup = document.getElementById('mainpopup');
const popupform = document.getElementById('popupform');
const todos = document.querySelector('.todos');
const closebutton = document.querySelector('.closebutton');

menu.addEventListener('click', () => {
    mainpopup.style.display= 'block';
});

popupform.addEventListener('submit', e => {
    e.preventDefault();
    const incomingvalue=popupform.formname.value.trim();
    if(incomingvalue.length > 0)
    {
        listadd(incomingvalue)//Formdan aldığım değeri gönderdim.
        popupform.reset();
    }
});

const listadd = (incomingvalue) => { //todo =>

    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <input type="text" class="edit-input">
    <span class="task-text">${incomingvalue}</span>
    <i class="far fa-trash-alt delete"></i>
    <button class="edit-button">Düzenle</button>`;
    // `
    //     // <li class="list-group-item d-flex justify-content-between align-items-center">
    //     //         <input type="text"><span>${incomingvalue}</span>
    //     //         <i class="far fa-trash-alt delete"></i>
    //     //         <button class="edit-button">Düzenle</button>
    //     //  </li>
    // `;
    todos.innerHTML+=html;
};

mainpopup.addEventListener('click' , e =>{ //Popup açıksa ve ekrana backgrounda tıklanıldığında popupu kapatacağım.
    if(e.target.className === 'mainpopup')
    {
        mainpopup.style.display= 'none';
    }
})

closebutton.addEventListener('click' , ()=>{
    mainpopup.style.display= 'none';
})


todos.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    } else if (e.target.classList.contains('edit-button')) {
        goreviGuncelle(e);
    }
}); 

function goreviGuncelle(e) {
    const li = e.target.parentElement;
    const taskText = li.querySelector('.task-text');
    const editInput = li.querySelector('.edit-input');
    const editButton = li.querySelector('.edit-button');
    const isEditing = li.classList.contains('editing');

    if (isEditing) {

        taskText.textContent = editInput.value;
        li.classList.remove('editing');
    } else {
        // Düzenleme işlemine başla
        editInput.value = taskText.textContent;
        li.classList.add('editing');
        editButton.textContent='Düzenlemeyi Kaydet';
    }
}



