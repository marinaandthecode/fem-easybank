const hamburgerButton = document.querySelector(".header__hamburger");
const menu = document.querySelector(".menu"); 

hamburgerButton.addEventListener('click', function(){
    if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
        hamburgerButton.classList.remove('is-active');
    } else {
        menu.classList.add('is-active'); 
        hamburgerButton.classList.add('is-active');
    }
});