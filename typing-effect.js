// typing-effect.js
const words = ["bullying", "failure", "the Mandem", "destruction"];
const textElement = document.getElementById("typing-text");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 150;
const deletingSpeed = 100;
const pauseAfterWord = 800;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    textElement.textContent = currentWord.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentWord.length) {
      setTimeout(() => isDeleting = true, pauseAfterWord);
    }
  } else {
    textElement.textContent = currentWord.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

typeEffect();
