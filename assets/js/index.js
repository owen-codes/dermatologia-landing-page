AOS.init({
    duration: 1200,  
    once: true       
});

window.addEventListener('load', () => {
    const loadingCircle = document.querySelector('.loading-circle');
    const loadingScreen = document.getElementById('loading-screen');

    
    setTimeout(() => {
        loadingCircle.style.strokeDashoffset = '0'; 
    }, 100); 

    
    setTimeout(() => {
        loadingScreen.classList.add('fade-out'); 
    }, 2000); 

    
    setTimeout(() => {
        loadingScreen.style.display = 'none'; 
        document.body.classList.remove('loading'); 
    }, 2500); 
});



const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a'); 



hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show');
    });
});