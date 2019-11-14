let aboutLink = document.getElementById('about-link');

aboutLink.addEventListener('click', ()=>{
    aboutLink.className = 'animated zoomOut slow';
})

let page = document.querySelector('.starter');
let textSizeToggler = document.getElementById('toggler');

textSizeToggler.addEventListener('click', ()=>{
    textSizeToggler.parentNode.classList.toggle('larger');
})