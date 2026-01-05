const typingElement = document.getElementById("typing"); // <-- THIS IS THE LINK
const words = ["bullying"]; // you can add more words here if needed
const cursor = "|";

let wordIndex = 0;
let charIndex = 0;
let typing = true;

function type() {
    if (typing) {
        if (charIndex <= words[wordIndex].length) {
            typingElement.textContent = words[wordIndex].substring(0, charIndex) + cursor;
            charIndex++;
            setTimeout(type, 200);
        } else {
            typing = false;
            setTimeout(type, 1000);
        }
    } else {
        if (charIndex >= 0) {
            typingElement.textContent = words[wordIndex].substring(0, charIndex) + cursor;
            charIndex--;
            setTimeout(type, 100);
        } else {
            typing = true;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 200);
        }
    }
}

type();
