var sidenav = document.querySelector( '.side-navbar' );

function showNavbar(){
    sidenav.style.left = "0"
}

function classNavbar(){
    sidenav.style.left = "-70%"
}

// animation for header

document.addEventListener('DOMContentLoaded', () => {
    const typewriterSecond = document.querySelector('.typewriter-second');
    const dynamicText = document.getElementById('dynamic-text');
    const words = ['CA', 'CMA', 'CS'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    // Display second typing animation after first completes
    setTimeout(() => {
        typewriterSecond.style.visibility = 'visible';
        typewriterSecond.style.animation = 'typing-second 3s steps(25, end) forwards';
        
        // Stop blinking after typing-second completes
        setTimeout(() => {
            typewriterSecond.style.borderRight = 'none';
            typeDynamicText();
        }, 3000); // Matches typing-second duration
    }, 2000); // Matches typing-first duration

    function typeDynamicText() {
        const currentWord = words[wordIndex];
        const typingSpeed = isDeleting ? 100 : 200;

        if (!isDeleting && charIndex < currentWord.length) {
            dynamicText.textContent += currentWord.charAt(charIndex);
            charIndex++;
        } else if (isDeleting && charIndex > 0) {
            dynamicText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            isDeleting = !isDeleting;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeDynamicText, 1000);
            return;
        }

        setTimeout(typeDynamicText, typingSpeed);
    }
});
