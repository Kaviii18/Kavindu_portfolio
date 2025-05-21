const roles = ["Full Stack Developer", "UI/UX Designer", "Freelancer"];
let index = 0;
let charIndex = 0;
const typingSpeed = 150;
const erasingSpeed = 80;
const delayBetween = 2000;
const typedText = document.querySelector(".typed-text");

function type() {
  if (charIndex < roles[index].length) {
    typedText.textContent += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetween);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = roles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 1000);
});
