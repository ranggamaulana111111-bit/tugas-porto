import { site, navLinks, currently, about, projects, experience, education, skills, learning, notes } from '../data/portfolio.js';
import { $, escapeHtml } from './utils.js';

const iconArrow = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"/></svg>`;
const iconExt = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>`;

export function renderNav() {
  const list = $('#nav-links');
  list.innerHTML = navLinks.map((l) =>
    `<li><a class="nav-link" href="${l.href}" data-nav="${l.href.replace('#', '')}">${escapeHtml(l.label)}</a></li>`
  ).join('');
}

export function renderNow() {
  $('#now-list').innerHTML = currently.map((item) => `
    <article class="now-item">
      <span class="now-num">${item.num}</span>
      <p class="now-title">${escapeHtml(item.title)}</p>
      <div class="now-text">
        <p>${escapeHtml(item.text)}</p>
        ${item.link ? `<a href="${item.link.href}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.link.label)} ${iconArrow}</a>` : ''}
      </div>
    </article>
  `).join('');
}

export function renderAbout() {
  $('#about-body').innerHTML = about.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('');
}

export function renderProjects() {
  $('#projects-list').innerHTML = projects.map((p, i) => {
    const live = p.status === 'Produksi';
    return `
      <article class="project-card reveal" data-project-index="${i}">
        <div class="project-meta">
          <span class="project-category">${escapeHtml(p.category)}</span>
          <span class="project-meta-dot" aria-hidden="true">·</span>
          <span>${escapeHtml(p.year)}</span>
          <span class="project-status"><span class="status-dot ${live ? 'is-live' : ''}" aria-hidden="true"></span>${escapeHtml(p.status)}</span>
        </div>
        <h3 class="project-name">${escapeHtml(p.name)}</h3>
        <p class="project-role">${escapeHtml(p.role)}</p>
        <p class="project-desc">${escapeHtml(p.description)}</p>
        <div class="project-tech">${p.tech.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>
        <div class="project-actions">
          ${p.live ? `<a class="btn btn-sm btn-live" href="${p.live}" target="_blank" rel="noopener noreferrer">Live ${iconExt}</a>` : ''}
          <button class="btn btn-sm btn-detail" type="button" data-open-project="${i}">Detail</button>
          ${p.github ? `<a class="btn btn-sm btn-ghost" href="${p.github}" target="_blank" rel="noopener noreferrer">GitHub ${iconExt}</a>` : ''}
        </div>
      </article>`;
  }).join('');
}

export function renderExperience() {
  $('#timeline').innerHTML = experience.map((e) => `
    <article class="timeline-item reveal">
      <span class="timeline-dot" aria-hidden="true"></span>
      <p class="timeline-year">${escapeHtml(e.year)}</p>
      <h3 class="timeline-title">${escapeHtml(e.title)}</h3>
      <p class="timeline-text">${escapeHtml(e.text)}</p>
    </article>
  `).join('');
}

export function renderEducation() {
  $('#edu-list').innerHTML = education.map((e) => `
    <article class="edu-item reveal">
      <div>
        <h3 class="edu-school">${escapeHtml(e.school)}</h3>
        <p class="edu-program">${escapeHtml(e.program)}</p>
        <p class="edu-note">${escapeHtml(e.note)}</p>
      </div>
      <p class="edu-period">${escapeHtml(e.period)}</p>
    </article>
  `).join('');
}

export function renderSkills() {
  $('#skills-grid').innerHTML = skills.map((g) => `
    <div class="skill-group reveal">
      <p class="skill-group-label">${escapeHtml(g.label)}</p>
      <div class="skill-tags">${g.items.map((i) => `<span class="tag">${escapeHtml(i)}</span>`).join('')}</div>
    </div>
  `).join('');
}

export function renderLearning() {
  $('#learning-grid').innerHTML = learning.map((g) => `
    <div class="learning-card reveal">
      <h3 class="learning-title">${escapeHtml(g.title)}</h3>
      <div class="learning-tags">${g.items.map((i) => `<span class="tag">${escapeHtml(i)}</span>`).join('')}</div>
    </div>
  `).join('');
}

export function renderNotes() {
  $('#notes-list').innerHTML = notes.map((n) => `
    <a class="note-item reveal" href="./catatan.html" target="_blank" rel="noopener noreferrer">
      <p class="note-meta"><span>${escapeHtml(n.date)}</span><span>${escapeHtml(n.category)}</span><span>${escapeHtml(n.read)}</span></p>
      <h3 class="note-title">${escapeHtml(n.title)}</h3>
    </a>
  `).join('');
}

export { site };
