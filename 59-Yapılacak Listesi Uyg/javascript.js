const addform = document.querySelector('.add');
const list =  document.querySelector('.todos');
const search = document.querySelector('.search input');//Classı serach olanın altındaki inputları çağırdım.

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

const filterTodos =  term => { //(term)
//    console.log(term);
//    console.log(list.children);
//    console.log(Array.from(list.children));
    Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term)) //term değişkeninden gelen değer içermiyorsa 
    .forEach(todo => todo.classList.add('filtered'));// filtered classına ekliyorum gözükmemesini sağlayacak.
     
    Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));
} 

search.addEventListener('keyup',() =>{
    const term=search.value.trim().toLowerCase();//girilen değeri term değişkeninde tutuyorum. Küçük harfe çevirip kontrlünü yapıyorum
    //console.log(term);
    filterTodos(term);
})
//HTMLCollection da arrowfunction kullanılmaz
