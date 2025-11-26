// Page Navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Animate skills when skills page is shown
    if (pageId === 'skills') {
        setTimeout(animateSkills, 300);
    }
}

// Typing Effect
const typingElement = document.querySelector('.typing');
if (typingElement) {
    const texts = ['Student', 'Web Developer', 'UI/UX Enthusiast', 'Tech Lover'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 120;
    let typingTimeout;

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 60;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 120;
        }

        if (!isDeleting && charIndex === currentText.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500;
        }

        typingTimeout = setTimeout(type, typingSpeed);
    }
    
    setTimeout(type, 1000);
}

// Animate Skills Progress Bars
function animateSkills() {
    const skillBars = document.querySelectorAll('.progress-fill');
    const percentElements = document.querySelectorAll('.skill-percent');
    
    skillBars.forEach((bar, index) => {
        const width = bar.getAttribute('data-width');
        const percentElement = percentElements[index];
        
        // Reset to 0
        bar.style.width = '0%';
        percentElement.textContent = '0%';
        
        // Animate to target width
        setTimeout(() => {
            let current = 0;
            const target = parseInt(width);
            const duration = 1500;
            const increment = target / (duration / 16);
            
            const animate = () => {
                current += increment;
                if (current >= target) {
                    current = target;
                    bar.style.width = target + '%';
                    percentElement.textContent = target + '%';
                } else {
                    bar.style.width = current + '%';
                    percentElement.textContent = Math.floor(current) + '%';
                    requestAnimationFrame(animate);
                }
            };
            
            animate();
        }, index * 200);
    });
}

// Animate skills when page loads if on skills page
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('skills').classList.contains('active')) {
        setTimeout(animateSkills, 500);
    }
});
