// Your code goes here

            //Selectors
const funBus = document.querySelector('.intro h2');
const letsGo = document.querySelector('.content-section .text-content h2');
const advAwaits = document.querySelector('.inverse-content .text-content h2');
const dest = document.querySelector('.content-destination h2');
const sun = document.querySelector('.content-pick .destination h4');
const mount = document.querySelector('.content-pick .destination:nth-of-type(2) h4');
const island = document.querySelector('.content-pick .destination:nth-of-type(3) h4');
const sunBut = document.querySelector('.content-pick .destination .btn');
const mountBut = document.querySelector('.content-pick .destination:nth-of-type(2) .btn');
const islandBut = document.querySelector('.content-pick .destination:nth-of-type(3) .btn');
const nav = document.querySelectorAll('.main-navigation .nav-container .nav');

            // Colored Borders on keystroke Q or E

document.addEventListener('keydown', event => {
    if (event.keyCode === 81){
        funBus.style.borderColor = 'red'
        funBus.style.borderWidth = '10px'
        funBus.style.borderStyle = 'solid'
    };
})

document.addEventListener('keyup', event => {
    if (event.keyCode === 81){
        funBus.style.borderColor = 'white'
    };
})

document.addEventListener('keydown', event => {
    if (event.keyCode === 69){
        letsGo.style.borderColor = 'blue'
        letsGo.style.borderWidth = '10px'
        letsGo.style.borderStyle = 'dotted'
    };
})

document.addEventListener('keyup', event => {
    if (event.keyCode === 69){
        letsGo.style.borderColor = 'white'
    };
})


            //text color on mouse over

advAwaits.addEventListener('mouseenter', event => {
    event.target.style.color = 'purple';
})

dest.addEventListener('mouseenter', event => {
    event.target.style.color = 'green';
})

            //nav perm color change

const changeColor = document.querySelectorAll('nav a');
for (let i = 0; i < changeColor.length; i++){
  changeColor[i].style.color = 'orange';
}

            //dbl click fun

sun.addEventListener('dblclick', event => {
    event.target.style.color = 'purple';
})

mount.addEventListener('dblclick', event => {
    event.target.style.color = 'green';
})

            //button click

sunBut.addEventListener('click', event => {
    event.target.style.color = 'red';
})

mountBut.addEventListener('click', event => {
    event.target.style.background = 'red';
})

