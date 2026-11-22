import './css/main.css';
import { renderNav, renderNow, renderAbout, renderProjects, renderExperience, renderEducation, renderSkills, renderLearning, renderNotes } from './js/render.js';
import { initNavigation } from './js/navigation.js';
import { initInteractions } from './js/interactions.js';

renderNav();
renderNow();
renderAbout();
renderProjects();
renderExperience();
renderEducation();
renderSkills();
renderLearning();
renderNotes();

initNavigation();
initInteractions();

const loadThree = () => import('./js/three-scene.js').then((m) => m.initThreeScene()).catch(() => {
  document.getElementById('hero-canvas-fallback')?.classList.add('is-visible');
});

if ('requestIdleCallback' in window) {
  requestIdleCallback(loadThree, { timeout: 1200 });
} else {
  setTimeout(loadThree, 300);
}
