const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});

navLinks?.querySelectorAll('a').forEach((link) =>
  link.addEventListener('click', () => navLinks.classList.remove('open'))
);

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const revealTargets = document.querySelectorAll('section, .card, .timeline li');
revealTargets.forEach((el) => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.2 }
);

revealTargets.forEach((el) => revealObserver.observe(el));

const skillBars = document.querySelectorAll('.skill-bar');
const skillObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const level = entry.target.dataset.level || 0;
      entry.target.style.setProperty('--level', `${level}%`);
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.5 }
);

skillBars.forEach((bar) => skillObserver.observe(bar));
