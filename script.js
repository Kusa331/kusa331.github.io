// Menu Icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

// Scroll Section Active Link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >=offset && top< offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*= '+id+']').classList.add('active');
            })
        }
    });
    


// Stick Navigation Bar
    let header = document.querySelector('.header');

header.classList.toggle('sticky',window.scrollY>100);

// Remove menu icon when navbar link is clicked

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

// darklightmode

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = ()=>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode')
}

// Scroll-Reveal

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { orign: top });