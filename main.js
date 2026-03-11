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

// Product Walkthrough
(() => {
  const steps = [
    { num: '①', text: 'Upload Regulations' },
    { num: '②', text: 'Generate Policy' },
    { num: '③', text: 'Build Rules' },
    { num: '④', text: 'Rule Details' },
    { num: '⑤', text: 'Screen Address' },
    { num: '⑥', text: 'Evidence Chains' },
    { num: '⑦', text: 'View Graph' },
    { num: '⑧', text: 'Dashboard Overview' },
  ];
  const DURATION = 4000;
  let current = 0;
  let timer = null;
  let startTime = 0;
  let raf = null;

  const slides = document.querySelectorAll('.wt-slide');
  const dots = document.querySelectorAll('.wt-dot');
  const stepNum = document.getElementById('wt-step-num');
  const stepText = document.getElementById('wt-step-text');
  const progressBar = document.getElementById('wt-progress');

  if (!slides.length) return;

  function goTo(index, skipAnim) {
    slides[current]?.classList.remove('active');
    dots[current]?.classList.remove('active');
    current = index;
    slides[current]?.classList.add('active');
    dots[current]?.classList.add('active');

    // Animate step text
    stepText.classList.add('fade-out');
    setTimeout(() => {
      stepNum.textContent = steps[current].num;
      stepText.textContent = steps[current].text;
      stepText.classList.remove('fade-out');
    }, skipAnim ? 0 : 200);

    // Reset progress
    startTime = Date.now();
    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';
  }

  function tick() {
    const elapsed = Date.now() - startTime;
    const pct = Math.min((elapsed / DURATION) * 100, 100);
    progressBar.style.width = pct + '%';
    if (pct >= 100) {
      goTo((current + 1) % steps.length);
    }
    raf = requestAnimationFrame(tick);
  }

  function startAuto() {
    startTime = Date.now();
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(tick);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.index);
      if (idx === current) return;
      goTo(idx);
    });
  });

  goTo(0, true);
  startAuto();
})();
