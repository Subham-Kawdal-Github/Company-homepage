burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
leftnav = document.querySelector('.left-nav')
rightnav = document.querySelector('.right-nav')

burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-class-resp');
    leftnav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})