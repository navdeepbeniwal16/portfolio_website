const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach((link) =>
    link.addEventListener('click', () => navLinks.classList.remove('open'))
  );
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const modeCopy = document.getElementById('mode-copy');
const modeButtons = document.querySelectorAll('[data-mode]');
const modeText = {
  builder:
    'Builder mode looks like co-creating product rituals, mapping journeys on whiteboards, and prioritising the smallest shippable slice that creates delight.',
  engineer:
    'Engineer mode digs into architecture diagrams, defends reliability, and automates anything that blocks teams from moving quickly and safely.',
  mentor:
    'Mentor mode means coaching founders and grads, holding space for experiments, and amplifying underrepresented voices in tech.',
};

function setMode(mode) {
  if (!modeCopy) return;
  modeCopy.textContent = modeText[mode];
  modeButtons.forEach((btn) => {
    const isActive = btn.dataset.mode === mode;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}

modeButtons.forEach((button) =>
  button.addEventListener('click', () => setMode(button.dataset.mode))
);
if (modeButtons.length) setMode(modeButtons[0].dataset.mode);

const sections = document.querySelectorAll('section.shell, .projects, .experience, .skills, .education');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.2 }
);
sections.forEach((section) => observer.observe(section));

const intro = document.querySelector('.intro-screen');
const introTexts = document.querySelectorAll('.intro-text');
if (intro && introTexts.length) {
  const first = introTexts[0];
  const second = introTexts[1];
  window.addEventListener('load', () => {
    first.classList.add('show');
    setTimeout(() => {
      first.classList.remove('show');
      second.classList.add('show');
    }, 1900);
    setTimeout(() => {
      intro.classList.add('hide');
      const removeDelay =
        parseFloat(getComputedStyle(intro).transitionDuration || '0') * 1000 + 200;
      setTimeout(() => intro.remove(), removeDelay);
    }, 3800);
  });
}

const headshot = document.querySelector('.headshot-frame img');
const headshotPlaceholder = document.querySelector('.headshot-placeholder');
if (headshot) {
  headshot.addEventListener('load', () => {
    headshotPlaceholder?.classList.add('hide-placeholder');
  });
  headshot.addEventListener('error', () => {
    headshot.classList.add('hide');
  });
}
