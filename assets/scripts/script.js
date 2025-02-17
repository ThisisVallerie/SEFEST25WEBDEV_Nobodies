window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.input-field');
    
    inputs.forEach(input => {
        input.addEventListener('input', function(e) {

            
            console.log('Input changed:', e.target.value);
        });
        
        input.addEventListener('focus', function() {
            input.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            input.parentElement.style.transform = 'scale(1)';
        });
    });
});