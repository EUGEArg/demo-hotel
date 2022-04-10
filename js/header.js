const btnResponsive = document.querySelector('.btn-responsive');
const barraNav = document.querySelector('.menu-nav');
const barras = document.querySelectorAll('.btn-responsive span')

btnResponsive.addEventListener('click', () => {
    barraNav.classList.toggle('activado');
    console.log(barraNav)
    barras.forEach(child => { child.classList.toggle('animado')});
})
