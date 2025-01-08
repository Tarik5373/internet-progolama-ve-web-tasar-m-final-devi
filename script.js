function toggleMenu() {
    const menu = document.querySelector('.menu');
    const isDisplayed = menu.style.display === 'flex';
    menu.style.display = isDisplayed ? 'none' : 'flex';
}

function fadeInText() {
    textElement.style.opacity = 0; 
    textElement.textContent = texts[textIndex]; 

    let opacity = 0;
    const fadeIn = setInterval(() => {
        opacity += 0.05; 
        textElement.style.opacity = opacity;
        if (opacity >= 1) {
            clearInterval(fadeIn);
            setTimeout(fadeOutText, 2000);
        }
    }, 50);
}

function fadeOutText() {
    let opacity = 1;
    const fadeOut = setInterval(() => {
        opacity -= 0.05; 
        textElement.style.opacity = opacity;
        if (opacity <= 0) {
            clearInterval(fadeOut);
            textIndex = (textIndex + 1) % texts.length; 
            fadeInText(); 
        }
    }, 50);
}

window.onload = fadeInText; 

document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.
 
preventDefault();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const texts = document.querySelectorAll('.animated-text p');
    let currentIndex = 0;

    function showText(index) {
        texts[index].style.opacity = '1';
        texts[index].style.transform = 'translateY(0)';
    }

    function hideText(index) {
        texts[index].style.opacity = '0';
        texts[index].style.transform = 'translateY(20px)';
    }

    function animateTexts() {
        hideText(currentIndex);
        currentIndex = (currentIndex + 1) % texts.length;
        showText(currentIndex);
    }

    showText(currentIndex);

    
    setInterval(animateTexts, 3000);
});


