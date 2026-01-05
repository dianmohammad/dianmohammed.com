const words = ["bullying", "oppression", "injustice"];
const typingElement = document.getElementById("typing");
const cursor = "|";

let wordIndex = 0;
let charIndex = 0;
let typing = true;

function type() {
    if (typing) {
        if (charIndex <= words[wordIndex].length) {
            typingElement.textContent = words[wordIndex].substring(0, charIndex) + cursor;
            charIndex++;
            setTimeout(type, 200); // speed of typing
        } else {
            typing = false;
            setTimeout(type, 1000); // pause at the end of word
        }
    } else {
        if (charIndex >= 0) {
            typingElement.textContent = words[wordIndex].substring(0, charIndex) + cursor;
            charIndex--;
            setTimeout(type, 100); // speed of deleting
        } else {
            typing = true;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 200);
        }
    }
}

type();
