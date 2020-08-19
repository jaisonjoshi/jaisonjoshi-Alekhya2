var navbar = document.querySelector('.navbar');
var toggleIcon = document.querySelector('.toggle-collapse');
var navbarnav = document.querySelector('navbar-nav');
toggleIcon.addEventListener('click', function(){
    toggleIcon.classList.toggle('open');
    navbar.classList.toggle('nav-collapse');
});

bgSite = document.querySelector('.bg-site');
bgTop = bgSite.offsetTop;
window.addEventListener('scroll', function(){
    if(window.scrollY>0){
        navbar.classList.add('nav-scroll');
    }
    else{
        navbar.classList.remove('nav-scroll');
    }
})
function navlink(){
    navbar.classList.remove('nav-collapse');
    toggleIcon.classList.remove('open');
}