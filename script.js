// Section & Navbar
const allSections = document.querySelectorAll('header, section, footer');
const navLinks = document.querySelectorAll('.nav-links a');
let currentSection = document.querySelector('#home');
currentSection.classList.add('active', 'fade-in');

function goToSection(targetId) {
  const targetSection = document.querySelector(targetId);
  if (targetSection === currentSection) return;

  // Hapus class dari section sebelumnya
  currentSection.classList.remove('active', 'fade-in');

  // Tambahin class ke section baru
  targetSection.classList.add('active', 'fade-in');

  currentSection = targetSection;
}

// Navbar click
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    goToSection(link.getAttribute('href'));
    document.querySelector('.nav-links').classList.remove('show');
  });
});

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navLinksContainer = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  navLinksContainer.classList.toggle("show");
});

// Typing effect
const typingElement = document.querySelector('.typing');
if (typingElement) {
  const text = typingElement.textContent;
  typingElement.textContent = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      typingElement.textContent += text.charAt(i);
      i++;
      setTimeout(type, 120);
    }
  }
  type();
}

// Skills animation
let skillsAnimated = false;
function runSkillAnimation() {
  const skills = document.querySelectorAll('#skills .skill');
  skills.forEach((skill, index) => {
    const bar = skill.querySelector('.progress span');
    const percentText = skill.querySelector('.percent');
    const target = parseInt(bar.getAttribute('data-target'));
    bar.style.width = "0%";
    percentText.textContent = "0%";
    setTimeout(() => {
      let start = null;
      function animate(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const duration = 2000;
        const ease = progress / duration;
        const easing = 1 - Math.pow(1 - ease, 3);
        const value = Math.min(Math.floor(target * easing), target);
        bar.style.width = value + "%";
        percentText.textContent = value + "%";
        if (progress < duration) requestAnimationFrame(animate);
      }
      requestAnimationFrame(animate);
    }, index * 300);
  });
  skillsAnimated = true;
}

function resetSkills() {
  const skills = document.querySelectorAll('#skills .skill');
  skills.forEach(skill => {
    const bar = skill.querySelector('.progress span');
    const percentText = skill.querySelector('.percent');
    bar.style.width = "0%";
    percentText.textContent = "0%";
  });
  skillsAnimated = false;
}

setInterval(() => {
  if (currentSection.id === "skills" && !skillsAnimated) runSkillAnimation();
  if (currentSection.id !== "skills" && skillsAnimated) resetSkills();
}, 500);
