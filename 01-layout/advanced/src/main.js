import './styles.scss';

const topText = document.getElementById('top-text');

function updateTopCount() {
  if (!topText) return;
  topText.textContent = window.innerWidth <= 1280 ? '3' : '5';
}

updateTopCount();
window.addEventListener('resize', updateTopCount);
