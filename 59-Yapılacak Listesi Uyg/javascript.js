const addform = document.querySelector('.add');
const list =  document.querySelector('.todos');

const listadd = (todo) => { //todo =>

    const html = 
    `
        <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
         </li>
    `;
    list.innerHTML+=html;
};

addform.addEventListener('submit',e => {
    e.preventDefault();//Sayfa yenilemesini engellemek için kullanıyorum.
    const todo=addform.add.value.trim();//Name add olan classın verisini çektim. trim() baştanve sondan boşluk kaldırır. sadece karakteri alır.
    // console.log(todo);
    if(todo.length)
    {
        listadd(todo)//Formdan aldığım değeri gönderdim.
        addform.reset();//Veri eklenildikten sonra silme text temizleme
    }
    
    
})

list.addEventListener('click',e =>{  
    if(e.target.classList.contains('delete'))//e.target tıkladığım yer
    {
        e.target.parentElement.remove();    
    }   
})