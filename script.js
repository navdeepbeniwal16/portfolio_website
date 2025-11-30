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

const experienceDetails = {
  sought: {
    title: 'Sought Software · Software Developer',
    meta: 'Jan 2025 – Present · Brisbane, Australia',
    points: [
      'Migrated a legacy document platform towards an AWS-native architecture with clearer boundaries.',
      'Tightened security and access patterns while keeping developer workflows practical.',
      'Worked directly with the founder from idea to shipped features.'
    ],
    tags: ['AWS', 'API Gateway', 'Lambda', 'DynamoDB', 'CloudFormation', 'TypeScript', 'Node.js']
  },
  aicarer: {
    title: 'AICarer · Contract Mobile Developer',
    meta: 'Oct 2024 – Feb 2025 · Brisbane, Australia',
    points: [
      'Built real-time health-monitoring experiences across iOS and Android.',
      'Investigated reliability and latency edge cases to keep data streams dependable.',
      'Collaborated with medical and engineering teams to refine user flows.'
    ],
    tags: ['Swift', 'Kotlin', 'Garmin APIs', 'SSE', 'Push notifications']
  },
  startmate: {
    title: 'Startmate · Student Fellow (Winter24)',
    meta: 'Jun 2024 – Aug 2024 · Melbourne, Australia',
    points: [
      'Prototyped ideas quickly with founders and operators.',
      'Practiced fast feedback loops from sketch to working demo.',
      'Strengthened a builder-first mindset around experimentation.'
    ],
    tags: ['Rapid prototyping', 'Product discovery', 'Workshops']
  },
  manhattan: {
    title: 'Manhattan Associates · Software Engineer',
    meta: 'Mar 2021 – Feb 2022 · Bengaluru, India',
    points: [
      'Contributed to microservices and UI for large retail supply chains.',
      'Helped improve performance and reliability in high-volume systems.',
      'Worked closely with cross-functional teams to debug and ship features.'
    ],
    tags: ['Java', 'Spring', 'Angular', 'Microservices', 'REST APIs', 'GCP Pub/Sub']
  },
  hpe: {
    title: 'Hewlett Packard Enterprise · Academic Intern',
    meta: 'Jul 2019 – Dec 2019 · Bengaluru, India',
    points: [
      'Explored how data and automation can improve customer support.',
      'Prototyped ML classifiers and integrated results into workflows.',
      'Learned to communicate findings to non-technical stakeholders.'
    ],
    tags: ['Python', 'Machine learning', 'Automation', 'Data pipelines']
  },
  nus: {
    title: 'National University of Singapore · Academic Intern',
    meta: 'May 2019 – Jul 2019 · Singapore',
    points: [
      'Experimented with early ML ideas in a research environment.',
      'Helped turn rough concepts into working prototypes.',
      'Gained confidence working on open-ended technical problems.'
    ],
    tags: ['Keras', 'Computer vision', 'Prototyping', 'Research']
  }
};

const modalBackdrop = document.querySelector('[data-modal-backdrop]');
const modalTitle = document.getElementById('experience-modal-title');
const modalMeta = document.getElementById('experience-modal-meta');
const modalPoints = document.getElementById('experience-modal-points');
const modalTags = document.getElementById('experience-modal-tags');
const modalClose = document.querySelector('.experience-modal-close');

function closeExperienceModal() {
  if (!modalBackdrop) return;
  modalBackdrop.classList.remove('open');
  modalBackdrop.setAttribute('hidden', 'true');
  document.body.classList.remove('modal-open');
}

function openExperienceModal(key) {
  if (!modalBackdrop) return;
  const data = experienceDetails[key];
  if (!data) return;

  if (modalTitle) modalTitle.textContent = data.title;
  if (modalMeta) modalMeta.textContent = data.meta;

  if (modalPoints) {
    modalPoints.innerHTML = '';
    data.points.forEach((point) => {
      const li = document.createElement('li');
      li.textContent = point;
      modalPoints.appendChild(li);
    });
  }

  if (modalTags) {
    modalTags.innerHTML = '';
    data.tags.forEach((tag) => {
      const li = document.createElement('li');
      li.textContent = tag;
      modalTags.appendChild(li);
    });
  }

  modalBackdrop.removeAttribute('hidden');
  requestAnimationFrame(() => modalBackdrop.classList.add('open'));
  document.body.classList.add('modal-open');
}

document.querySelectorAll('.timeline-more').forEach((button) => {
  button.addEventListener('click', () => {
    const key = button.getAttribute('data-experience');
    if (key) openExperienceModal(key);
  });
});

modalClose?.addEventListener('click', closeExperienceModal);
modalBackdrop?.addEventListener('click', (event) => {
  if (event.target === modalBackdrop) closeExperienceModal();
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeExperienceModal();
});
