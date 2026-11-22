import * as THREE from 'three';
import { prefersReducedMotion } from './utils.js';

export function initThreeScene() {
  const canvas = document.getElementById('hero-canvas');
  const wrap = document.getElementById('hero-canvas-wrap');
  const fallback = document.getElementById('hero-canvas-fallback');
  if (!canvas || !wrap) return;

  const reduceMotion = prefersReducedMotion();
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch {
    fallback?.classList.add('is-visible');
    return;
  }

  if (!renderer.getContext()) {
    fallback?.classList.add('is-visible');
    return;
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0.2, 7);

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);

  const ambient = new THREE.AmbientLight(0xffffff, 0.95);
  scene.add(ambient);
  const key = new THREE.DirectionalLight(0xffffff, 0.9);
  key.position.set(3, 4, 5);
  scene.add(key);
  const warm = new THREE.PointLight(0xb55220, 0.8, 20);
  warm.position.set(-3, 1, 3);
  scene.add(warm);

  const group = new THREE.Group();
  scene.add(group);

  const material = new THREE.MeshStandardMaterial({ color: 0xe8ddd1, roughness: 0.45, metalness: 0.08 });
  const accentMat = new THREE.MeshStandardMaterial({ color: 0xb55220, roughness: 0.35, metalness: 0.15 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.3, metalness: 0.2 });

  const shapes = [];
  const addShape = (geo, mat, pos, scale, rotSpeed) => {
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(...pos);
    mesh.scale.setScalar(scale);
    mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
    group.add(mesh);
    shapes.push({ mesh, rotSpeed, baseY: pos[1], phase: Math.random() * Math.PI * 2 });
  };

  addShape(new THREE.IcosahedronGeometry(1, 0), material, [1.4, 0.8, 0], 0.72, [0.003, 0.004, 0.002]);
  addShape(new THREE.OctahedronGeometry(1, 0), accentMat, [-1.5, -0.7, -0.4], 0.55, [0.004, 0.003, 0.002]);
  addShape(new THREE.TorusGeometry(0.85, 0.22, 20, 48), darkMat, [0.1, -0.1, -0.8], 0.8, [0.002, 0.005, 0.001]);
  addShape(new THREE.BoxGeometry(1, 1, 1), material, [-0.9, 1.2, -1.2], 0.38, [0.003, 0.003, 0.004]);
  addShape(new THREE.SphereGeometry(0.5, 24, 24), new THREE.MeshStandardMaterial({ color: 0xf6f0e8, roughness: 0.25, metalness: 0.1 }), [1.6, -1.1, -0.6], 0.55, [0.002, 0.002, 0.001]);

  const grid = new THREE.GridHelper(10, 20, 0xd8cdc0, 0xe6ddd1);
  grid.position.y = -2.1;
  grid.material.transparent = true;
  grid.material.opacity = 0.55;
  scene.add(grid);

  const particlesCount = 80;
  const posArr = new Float32Array(particlesCount * 3);
  for (let i = 0; i < particlesCount; i++) {
    posArr[i * 3] = (Math.random() - 0.5) * 9;
    posArr[i * 3 + 1] = (Math.random() - 0.5) * 6;
    posArr[i * 3 + 2] = (Math.random() - 0.5) * 4 - 1;
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
  const pMat = new THREE.PointsMaterial({ color: 0xb55220, size: 0.025, transparent: true, opacity: 0.45 });
  const points = new THREE.Points(pGeo, pMat);
  scene.add(points);

  let w = 0, h = 0;
  const resize = () => {
    const rect = wrap.getBoundingClientRect();
    w = Math.max(1, Math.floor(rect.width));
    h = Math.max(1, Math.floor(rect.height));
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(wrap);

  let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
  const onMove = (e) => {
    const r = wrap.getBoundingClientRect();
    targetX = ((e.clientX - r.left) / r.width - 0.5) * 0.6;
    targetY = ((e.clientY - r.top) / r.height - 0.5) * 0.4;
  };
  wrap.addEventListener('pointermove', onMove);

  let raf = 0;
  let visible = true;
  let running = false;
  let t = 0;

  const render = () => {
    mouseX += (targetX - mouseX) * 0.03;
    mouseY += (targetY - mouseY) * 0.03;
    group.rotation.y = mouseX;
    group.rotation.x = mouseY * 0.5;
    shapes.forEach((s) => {
      s.mesh.rotation.x += s.rotSpeed[0];
      s.mesh.rotation.y += s.rotSpeed[1];
      s.mesh.rotation.z += s.rotSpeed[2];
      s.mesh.position.y = s.baseY + Math.sin(t * 0.001 + s.phase) * 0.08;
    });
    points.rotation.y += 0.0008;
    renderer.render(scene, camera);
  };

  const animate = (now) => {
    if (!running) return;
    t = now;
    render();
    raf = requestAnimationFrame(animate);
  };

  const start = () => {
    if (running || reduceMotion) { if (reduceMotion) render(); return; }
    running = true;
    raf = requestAnimationFrame(animate);
  };
  const stop = () => { running = false; cancelAnimationFrame(raf); };

  const onVis = () => {
    if (document.hidden) stop();
    else if (visible) start();
  };
  document.addEventListener('visibilitychange', onVis);

  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible && !document.hidden) start();
    else stop();
  }, { threshold: 0.05 });
  io.observe(wrap);

  if (reduceMotion) {
    render();
  } else {
    start();
  }

  return () => {
    stop();
    document.removeEventListener('visibilitychange', onVis);
    wrap.removeEventListener('pointermove', onMove);
    ro.disconnect();
    io.disconnect();
    pGeo.dispose(); pMat.dispose();
    grid.geometry.dispose(); grid.material.dispose();
    shapes.forEach(({ mesh }) => { mesh.geometry.dispose(); mesh.material.dispose(); });
    renderer.dispose();
  };
}
