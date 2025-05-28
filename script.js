// Canvas Animation on Home Section
const canvas = document.getElementById('homeCanvas');
const ctx = canvas.getContext('2d');
let x = 0;
let direction = 1;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw a moving circle
    ctx.beginPath();
    ctx.arc(50 + x, 100, 30, 0, Math.PI * 2);
    ctx.fillStyle = '#007bff';
    ctx.fill();
    ctx.closePath();

    x += direction * 2;
    if (x > 300 || x < 0) direction *= -1;

    requestAnimationFrame(animate);
}
animate();

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    const password = contactForm.password.value;

    if (!name || !email || !message || !password) {
        alert('Please fill in all fields.');
        return;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    // Basic email pattern check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Message sent successfully! Thank you, ' + name + '.');
    contactForm.reset();
});

// Auth Form Validation
const authForm = document.getElementById('authForm');
authForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = authForm.username.value.trim();
    const email = authForm.authEmail.value.trim();
    const password = authForm.authPassword.value;

    if (!username || !email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    // Basic email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Registration successful! Welcome, ' + username + '.');
    authForm.reset();
});
