// Example: handle “Get Started” button click and read the email input
document.getElementById('startBtn').addEventListener('click', () => {
  const email = document.getElementById('emailInput').value.trim();
  if (!email) {
    alert('Please enter your email');
    return;
  }
  // Here you can redirect or send the email to backend
  console.log('User wants to get started with email:', email);
  // For demo, redirect to signup page
  window.location.href = '/signup.html?email=' + encodeURIComponent(email);
});

// You can also add scroll animations, smooth scroll, etc.
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
