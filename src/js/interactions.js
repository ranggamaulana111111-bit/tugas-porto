import { projects, site } from '../data/portfolio.js';
import { $, $$, escapeHtml } from './utils.js';

function initReveal() {
  const items = $$('.reveal');
  if (!items.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  items.forEach((el) => obs.observe(el));
}

function initBackTop() {
  const btn = $('#back-top');
  const onScroll = () => btn.classList.toggle('is-visible', window.scrollY > 500);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  });
}

async function copyText(text, trigger) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
  }
  if (!trigger) return;
  const original = trigger.innerHTML;
  const label = trigger.querySelector('span');
  if (label) { label.textContent = 'Tersalin!'; }
  else { trigger.textContent = 'Tersalin!'; }
  setTimeout(() => { trigger.innerHTML = original; }, 1500);
}

function initCopyEmail() {
  ['#copy-email', '#copy-email-inline', '#copy-email-footer'].forEach((sel) => {
    const el = $(sel);
    if (!el) return;
    el.addEventListener('click', () => copyText(el.dataset.email || site.email, el));
  });
}

function trapFocus(container, e) {
  if (e.key !== 'Tab') return;
  const focusable = [...container.querySelectorAll('a[href],button:not([disabled]),input,textarea,select,[tabindex]:not([tabindex="-1"])')].filter((el) => el.offsetParent !== null);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

function initModal() {
  const modal = $('#project-modal');
  const panel = modal.querySelector('.modal-panel');
  const closeBtn = $('#modal-close');
  const title = $('#modal-title');
  const meta = $('#modal-meta');
  const role = $('#modal-role');
  const desc = $('#modal-desc');
  const tech = $('#modal-tech');
  const actions = $('#modal-actions');
  let lastFocus = null;

  const close = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  };

  const open = (index) => {
    const p = projects[index];
    if (!p) return;
    lastFocus = document.activeElement;
    meta.textContent = `${p.category} · ${p.year} · ${p.status}`;
    title.textContent = p.name;
    role.textContent = p.role;
    desc.textContent = p.detail;
    tech.innerHTML = p.tech.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join('');
    actions.innerHTML = `
      ${p.live ? `<a class="btn btn-sm btn-live" href="${p.live}" target="_blank" rel="noopener noreferrer">Live</a>` : ''}
      ${p.github ? `<a class="btn btn-sm btn-secondary" href="${p.github}" target="_blank" rel="noopener noreferrer">GitHub</a>` : ''}
    `;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  };

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-open-project]');
    if (btn) open(Number(btn.dataset.openProject));
    if (e.target.closest('[data-close="modal"]')) close();
  });
  closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('is-open')) return;
    if (e.key === 'Escape') { close(); return; }
    trapFocus(panel, e);
  });
}

function initCommandPalette() {
  const overlay = $('#cmd-overlay');
  const input = $('#cmd-input');
  const list = $('#cmd-list');
  const empty = $('#cmd-empty');
  const openBtn = $('#cmd-btn');
  let active = -1;
  let items = [];

  const commands = [
    { label: 'Beranda', type: 'Section', action: () => go('#home') },
    { label: 'Tentang', type: 'Section', action: () => go('#about') },
    { label: 'Project', type: 'Section', action: () => go('#projects') },
    { label: 'Perjalanan', type: 'Section', action: () => go('#experience') },
    { label: 'Stack', type: 'Section', action: () => go('#skills') },
    { label: 'Workspace', type: 'Section', action: () => go('#workspace') },
    { label: 'Pesan', type: 'Section', action: () => go('#messages') },
    { label: 'Kontak', type: 'Section', action: () => go('#contact') },
    { label: 'Lihat CV', type: 'Aksi', action: () => window.open('./cv.html', '_blank') },
    { label: 'Salin Email', type: 'Aksi', action: () => copyText(site.email, $('#copy-email')) },
  ];

  function go(hash) {
    close();
    const t = document.querySelector(hash);
    if (t) window.scrollTo({ top: Math.max(0, t.getBoundingClientRect().top + window.scrollY - 96), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }

  function render(filter = '') {
    const q = filter.toLowerCase().trim();
    items = commands.filter((c) => c.label.toLowerCase().includes(q));
    list.innerHTML = items.map((c, i) => `
      <li role="option" aria-selected="${i === active}"><button class="cmd-item ${i === active ? 'is-active' : ''}" type="button" data-cmd="${i}">
        <span>${escapeHtml(c.label)}</span><span class="cmd-item-type">${escapeHtml(c.type)}</span>
      </button></li>`).join('');
    empty.hidden = items.length !== 0;
  }

  function open() {
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    input.value = '';
    active = 0;
    render();
    setTimeout(() => input.focus(), 0);
  }
  function close() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
  }

  openBtn.addEventListener('click', open);
  overlay.addEventListener('click', (e) => { if (e.target.closest('[data-close="cmd"]')) close(); });
  input.addEventListener('input', () => { active = 0; render(input.value); });
  list.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-cmd]');
    if (btn) items[Number(btn.dataset.cmd)]?.action();
  });

  document.addEventListener('keydown', (e) => {
    const mod = e.metaKey || e.ctrlKey;
    if (mod && e.key.toLowerCase() === 'k') { e.preventDefault(); overlay.classList.contains('is-open') ? close() : open(); }
    if (!overlay.classList.contains('is-open')) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); openBtn.focus(); return; }
    if (e.key === 'ArrowDown') { e.preventDefault(); active = Math.min(active + 1, items.length - 1); render(input.value); return; }
    if (e.key === 'ArrowUp') { e.preventDefault(); active = Math.max(active - 1, 0); render(input.value); return; }
    if (e.key === 'Enter' && items[active]) { e.preventDefault(); items[active].action(); return; }
    trapFocus(overlay.querySelector('.cmd-palette'), e);
  });
}

function initMessages() {
  const form = $('#message-form');
  const name = $('#msg-name');
  const text = $('#msg-text');
  const count = $('#msg-count');
  const status = $('#msg-status');
  const feed = $('#feed-list');
  const KEY = 'rangga-messages';

  const load = () => { try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch { return []; } };
  const save = (items) => localStorage.setItem(KEY, JSON.stringify(items.slice(0, 20)));

  const renderFeed = () => {
    const items = load();
    if (!items.length) {
      feed.innerHTML = `<p class="feed-empty">Belum ada pesan. Jadi yang pertama mengirim.</p>`;
      return;
    }
    feed.innerHTML = items.map((m, i) => `
      <article class="feed-item">
        <div class="feed-meta">
          <span class="feed-name">${escapeHtml(m.name || 'Anonim')}</span>
          <span>${escapeHtml(m.time)}</span>
          <button class="feed-delete" type="button" data-del-msg="${i}" aria-label="Hapus pesan">Hapus</button>
        </div>
        <p class="feed-msg">${escapeHtml(m.text)}</p>
      </article>`).join('');
  };

  feed.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-del-msg]');
    if (!btn) return;
    const items = load();
    items.splice(Number(btn.dataset.delMsg), 1);
    save(items);
    renderFeed();
  });

  text.addEventListener('input', () => { count.textContent = String(text.value.length); });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = '';
    status.classList.remove('is-error');
    const msg = text.value.trim();
    if (!msg) { status.textContent = 'Pesan tidak boleh kosong.'; status.classList.add('is-error'); text.focus(); return; }
    const items = load();
    items.unshift({
      name: name.value.trim().slice(0, 60),
      text: msg.slice(0, 500),
      time: new Date().toLocaleString('id-ID', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
    });
    save(items);
    renderFeed();
    form.reset();
    count.textContent = '0';
    status.textContent = 'Pesan ditampilkan secara lokal di browser ini (localStorage).';
  });
  renderFeed();
}

export function initInteractions() {
  initReveal();
  initBackTop();
  initCopyEmail();
  initModal();
  initCommandPalette();
  initMessages();
}
