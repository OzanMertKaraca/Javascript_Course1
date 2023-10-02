const textarea = document.querySelector('textarea');
const totalcounter = document.getElementById('totalcounter');
const remainingcounter = document.getElementById('remainingcounter');

textarea.addEventListener('keyup',updatecounter);

function updatecounter(){
    totalcounter.textContent=textarea.value.length;//Textareadan girilen değer uzunluğunu totalcounter yazdırdım.
    remainingcounter.textContent = textarea.getAttribute('maxLength') - textarea.value.length;//Textareadan girilen
    //değerden maxlength değerine çıkararak kalan karakter sayısını yazdırdım.
   // console.log(textarea.value.length);
}

updatecounter();

