const section = document.querySelector('section');
console.log(section.children);

console.log(Array.from(section.children));

Array.from(section.children).forEach(child => {

     child.classList.add('section-element');
})