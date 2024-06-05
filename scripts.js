const coinRange = document.getElementById("coinRange");
const rangeValue = document.getElementById("rangeValue");
const priceValue = document.getElementById("priceValue"); 
const progressBar = document.querySelector(".progress-bar");

coinRange.addEventListener("input", () => {
    const value = coinRange.value;
    rangeValue.textContent = value;

    // Calcula a largura da barra de progresso
    const progressWidth = (value / coinRange.max) * 100;
    progressBar.style.width = progressWidth + "%";

    document.addEventListener('DOMContentLoaded', function() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('nav ul li a');
    
        navLinks.forEach(link => {
            if (link.href.includes(currentPath)) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });



});




