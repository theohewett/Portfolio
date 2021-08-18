const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const topText = document.querySelector(".top");
const midText = document.querySelector(".middle");
const bottomText = document.querySelector(".bottom");
const scrollButton = document.querySelector(".scroll");
const mainContent = document.querySelector("main");

const textArray = [
    "Hello, I'm Theo.",
    "I'm a Full-Stack Developer.",
    "Scroll down to learn more."
]
const typingDelay = 80;
const erasingDelay = 40;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

const type = () => {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) {
            cursorSpan.classList.add("typing");
        }
        typedTextSpan.innerHTML += textArray[textArrayIndex][charIndex];
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        if (textArrayIndex >= textArray.length-1) {
            scrollButton.classList.remove("scroll");
            mainContent.classList.remove("unloaded");
            return;
        } else {
            setTimeout(erase, newTextDelay);
        }
    }
}

const log = () => {
    if (textArrayIndex == 1) {
        topText.textContent += textArray[0];
    } else if (textArrayIndex == 2) {
        bottomText.textContent += textArray[1];
    }
}

const erase = () => {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) {
            cursorSpan.classList.add("typing");
        }
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay); 
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) {
            return;
        } else {
            log();
            setTimeout(type, newTextDelay);
        }
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(type, newTextDelay);
});