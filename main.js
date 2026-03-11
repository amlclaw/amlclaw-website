// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.problem-card, .agent-card, .value-card, .card, .code-block, .stats-bar, .compare-table').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Staggered animation for pipeline
document.querySelectorAll('.pipeline .agent-card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.1}s`;
});

document.querySelectorAll('.pipeline .pipeline-arrow').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transition = 'opacity 0.4s ease';
  el.style.transitionDelay = `${i * 0.1 + 0.15}s`;
  observer.observe(el);
});
