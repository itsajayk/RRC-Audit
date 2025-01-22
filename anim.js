var sidenav = document.querySelector( '.side-navbar' );

function showNavbar(){
    sidenav.style.left = "0"
}

function classNavbar(){
    sidenav.style.left = "-70%"
}

// animation for header

const words = ["CA", "CMA", "CS"];
let index = 0;
const textElement = document.getElementById("textElement");

function updateText() {
  textElement.classList.add("animate__flipOutX");

  setTimeout(() => {
    textElement.textContent = words[index]; // Update the text
    index = (index + 1) % words.length; // Cycle through the words

    textElement.classList.remove("animate__flipOutX");
    textElement.classList.add("animate__flipInX");

    setTimeout(() => {
      textElement.classList.remove("animate__flipInX");
    }, 1000); // Reset after flipInX animation
  }, 1000); // Duration of flipOutX animation
}

setInterval(updateText, 3000); // Change text every 3 seconds
updateText(); // Initialize first word


setTimeout(() => {
    const typewriter = document.querySelector('.typewriter');  
    typewriter.classList.add('stop-blink'); // Stop blinking cursor
  }, 3000); // Adjust to match the duration of typing animations
  
