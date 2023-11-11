const modal = document.getElementById('modal');
const showmodal = document.getElementById('show-modal');
const closemodalicon = document.getElementById('close-modal');
const websitename = document.getElementById('websitename');
const websiteurl = document.getElementById('websiteurl');
const backlinkform = document.getElementById('backlinkform');
const backlinkscontainer = document.getElementById('backlinkscontainer');

let backlinks = [];

function modalshow(){
    modal.classList.add('showmodalclass');
    websitename.focus();
}

function buildbacklinks(){
    backlinkscontainer.textContent='';
    backlinks.forEach(backlink => {
        const {name,url} = backlink;
        const item = document.createElement('div');
        const closeicon = document.createElement('i');
        closeicon.classList.add('fas' , 'fa-times');
        closeicon.setAttribute('onclick',`deletebacklink('${url})`);

        const linkinfo = document.createElement('div');
        const link = document.createElement('a');
        link.setAttribute('href',`${url}`);
        link.setAttribute('target','_blank');
        link.textContent =name;

        linkinfo.appendChild(link);
        item.append(closeicon,linkinfo);
        // item.appendChild(closeicon);
        // item.appendChild(linkinfo);

        backlinkscontainer.appendChild(item);

    });
}

function fetchbacklinks(){
    if(localStorage.getItem('backlinks')){
        backlinks = JSON.parse(localStorage.getItem('backlinks'));
    }

    buildbacklinks();
}


function storebacklink(e){
    e.preventDefault();

    const namevalue = websitename.value;
    let urlvalue = websiteurl.value;

    if(!urlvalue.includes('https://' && !urlvalue.includes('http://') ))
    {
        urlvalue = `https://${urlvalue}`;
    }

    if(!validate(namevalue,urlvalue)){
        return false;//girilen değerler eşleşmiyor ise kod devam etmeyecek.
    };

   const backlink = {
    name:namevalue,
    url:urlvalue
   }

   backlinks.push(backlink);

   localStorage.setItem("backlinks", JSON.stringify(backlinks));
   fetchbacklinks();
   backlinkform.reset();
}

function validate (namevalue,urlvalue) {
    const  expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/g;
    const  regex = new RegExp(expression);

    if(!namevalue || !urlvalue)
    {
        alert('Gerekli alanlara giriş yapmanız gerekmektedir!');
        return false;
    }

    if(!urlvalue.match(regex)){
        alert('Girdiğiniz Url bilgilerinizi kontrol ediniz.');
        return false;
    }
    return true;
}

showmodal.addEventListener('click', modalshow);

closemodalicon.addEventListener('click', () =>{
   modal.classList.remove('showmodalclass');
} );

backlinkform.addEventListener('submit', storebacklink);
fetchbacklinks();