// Landing page animation
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const topText = document.querySelector(".top");
const bottomText = document.querySelector(".bottom");
const scrollButton = document.querySelector(".landing-page button");
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
            mainContent.classList.remove("unloaded");
            reveal();
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

const reveal = () => {
    scrollButton.style.setProperty("opacity", 1);
    topText.style.setProperty("opacity", 1);
    bottomText.style.setProperty("opacity", 1);
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
        log();
        setTimeout(type, newTextDelay);
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(type, newTextDelay);
});

// Contact card dropdown
const contactList = document.querySelector(".contact");

const revealContact = () => {
    contactList.style.setProperty("opacity", 1);
    contactList.style.setProperty("pointer-events", "all");
    contactList.style.setProperty("transform", "translateY(0px)");
}

const closeContact = () => {
    contactList.style.setProperty("opacity", 0);
    contactList.style.setProperty("pointer-events", "none");
    contactList.style.setProperty("transform", "translateY(-10px)");
}