const typingElement = document.getElementById('typing');
const words = ["bullying.", "hatred.", "racism.", "prejudice.", "injustice."];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const currentWord = words[wordIndex];
  
  if (!deleting) {
    typingElement.textContent = currentWord.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentWord.length) {
      deleting = true;
      setTimeout(type, 1000); // pause at full word
      return;
    }
  } else {
    typingElement.textContent = currentWord.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  
  // Smooth typing: random delay between 80–200ms
  const delay = deleting ? 50 : 100 + Math.random() * 100;
  setTimeout(type, delay);
}

type();
