const coorectanswers = ['E','E','E','E'];
const form = document.querySelector('.questions-form');

form.addEventListener('submit', e => {
    e.preventDefault();

    let baspuan = 0;
    const useranswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];

    useranswers.forEach((answer,index) => {
       if(answer === coorectanswers[index])
       {
            baspuan += 25;
       }
    })
      
    console.log(baspuan);
})