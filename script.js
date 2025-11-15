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
