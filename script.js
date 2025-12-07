// Typing Animation
const typingText = document.querySelector(".typing-text");
const texts = ["IoT Developer","Networking Enthusiast","User Experience Designer", "EMI/EMC Tester ","Problem Solver"];
let index = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < texts[index].length) {
    typingText.textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingText.textContent = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(typeEffect, 300);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeEffect, 500);
});

// Scroll Reveal Animation
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(section => {
    const windowHeight = window.innerHeight;
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight - 100) section.classList.add("active");
  });
});
