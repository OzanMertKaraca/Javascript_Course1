const createpassword = document.querySelector('.createpassword');
const input = document.querySelector('input');
const copyicon = document.querySelector('.copyicon');
const alertpasswordcopied = document.querySelector('.alertpasswordcopied');


createpassword.addEventListener('click',createpass);
copyicon.addEventListener('click',copypassword);

function createpass(){

   const passwordlength=10;
   const characters = '0123456789qwertyuıopğüasdfghjkklşzxcvbnmöç.!^+%&/(()=?{}*\-|_ASDFGHJKLŞİZXCVBNMÖÇQWERTYUIOP';

   let password = '';
   for(let index = 0 ; index < passwordlength ; index++)
   {
        const randomnumber = Math.floor(Math.random() * characters.length);
        password += characters[randomnumber];
   } 
   input.value = password;
   alertpasswordcopied.textContent = password +  '   Password Copied!';
};

function copypassword(){
   if(input.value)
   {
        input.select();
        navigator.clipboard.writeText(input.value); //Kopyalama işlemi
        alertpasswordcopied.classList.remove('active');

        setTimeout( () => 
        {
            alertpasswordcopied.classList.add('active');
           
        },2000);
       
    }
}

