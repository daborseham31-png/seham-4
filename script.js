// Simple interactivity: Toggle visibility of a section
document.addEventListener('DOMContentLoaded', function() {
    // Example: Add a simple quiz on the home page
    if (document.querySelector('.hero')) {
        const hero = document.querySelector('.hero');
        const quizBtn = document.createElement('button');
        quizBtn.textContent = 'Take a Quick Quiz';
        quizBtn.className = 'btn';
        quizBtn.style.marginTop = '1rem';
        hero.appendChild(quizBtn);

        quizBtn.addEventListener('click', function() {
            alert('Quiz: What does AWS stand for? (Answer: Amazon Web Services)');
        });
    }

    // Smooth scrolling for navigation (optional)
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // For same-page anchors, but since pages are separate, this is minimal
        });
    });
});