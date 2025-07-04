function toggleMenu() {
  document.querySelector('header').classList.toggle('open');
}

function showSection(id) {
  document.querySelectorAll('section').forEach(s => s.style.display = 'none');
  const section = document.getElementById(id);
  if (section) section.style.display = 'block';
  document.querySelector('header').classList.remove('open');
}

window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace('#', '');
  if (hash) showSection(hash);

  const videoLayer = document.getElementById('video-click-layer');
  const btn = document.querySelector('.showreel-btn');

  videoLayer.addEventListener('click', () => {
    btn.classList.toggle('hidden');
  });
});
