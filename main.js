/* ======================================================
   AMLClaw Website - Interactive JavaScript
   ====================================================== */

// ── Copy-to-clipboard for code blocks ──────────────────
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const code = btn.getAttribute('data-code') || btn.closest('.code-block').querySelector('code').textContent;
    navigator.clipboard.writeText(code.trim()).then(() => {
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
    });
  });
});

// ── Navbar scroll behavior ──────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 20
    ? '0 4px 24px rgba(0,0,0,0.4)'
    : 'none';
}, { passive: true });

// ── Animated network canvas ─────────────────────────────
(function initCanvas() {
  const canvas = document.getElementById('network-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, nodes = [], animId;

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function createNodes(count) {
    nodes = [];
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 2 + 1,
        color: Math.random() > 0.75 ? '#ef4444' : Math.random() > 0.5 ? '#10b981' : '#52525b'
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Draw edges
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(63, 63, 70, ${(1 - dist / 140) * 0.7})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = n.color;
      ctx.globalAlpha = 0.7;
      ctx.fill();
      ctx.globalAlpha = 1;

      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    });

    animId = requestAnimationFrame(draw);
  }

  function init() {
    cancelAnimationFrame(animId);
    resize();
    createNodes(55);
    draw();
  }

  window.addEventListener('resize', init, { passive: true });
  init();
})();

// ── Intersection Observer for fade-in animations ────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-card, .arch-card, .juris-card, .install-step').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// ── Terminal Demo Typing Animation ──────────────────────
const initTerminal = (termId) => {
  const container = document.getElementById(termId);
  if (!container) return;
  
  const typingSpan = container.querySelector('.typing');
  const fullText = typingSpan.getAttribute('data-text');
  const outputBlock = container.querySelector('.output-line');
  
  typingSpan.textContent = '';
  outputBlock.classList.add('hidden');
  typingSpan.classList.add('typing');
  
  let i = 0;
  const typeChar = () => {
    if (i < fullText.length) {
      typingSpan.textContent += fullText.charAt(i);
      i++;
      setTimeout(typeChar, Math.random() * 30 + 15); // Fast typing speed
    } else {
      setTimeout(() => {
        typingSpan.classList.remove('typing'); // stop cursor blink
        outputBlock.classList.remove('hidden');
      }, 300);
    }
  };
  
  setTimeout(typeChar, 400);
};

document.querySelectorAll('.term-tab').forEach(tab => {
  tab.addEventListener('click', (e) => {
    // hide all contents
    document.querySelectorAll('.term-content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.term-tab').forEach(t => t.classList.remove('active'));
    
    // activate clicked tab
    e.target.classList.add('active');
    const targetId = 'term-' + e.target.getAttribute('data-term');
    document.getElementById(targetId).classList.add('active');
    
    // trigger animation
    initTerminal(targetId);
  });
});

// Observer specifically for the terminal to initialize typing when scrolled into view
const termObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.hasAttribute('data-init')) {
      entry.target.setAttribute('data-init', 'true');
      if (document.getElementById('term-claude')) {
        initTerminal('term-claude');
      }
    }
  });
}, { threshold: 0.5 });
const termDemo = document.querySelector('.terminal-demo');
if (termDemo) termObserver.observe(termDemo);
