export const site = {
  name: 'Rangga Maulana Ramadhan Wiharto',
  shortName: 'rangga.mrw',
  location: 'Serang, Banten',
  role: 'Mahasiswa Sistem Informasi',
  heroDesc: 'Mahasiswa Sistem Informasi. Berada di Serang, Banten.',
  heroBuilding: 'Project yang sedang saya bangun: AlkonekPlus, RabegLab, dan site ini.',
  email: 'ranggamaulana111111@gmail.com',
  github: 'https://github.com/ranggamaulana111111-bit',
  linkedin: 'https://www.linkedin.com/in/rangga-maulana-ramadhan-wiharto-022077337/',
  whatsapp: 'https://wa.me/6285774138047',
  cv: '/cv',
  spotify: 'https://open.spotify.com/playlist/1dd0RgxyoiRiFLptOChO6e?si=02ad28709f664a86',
};

export const navLinks = [
  { label: 'Beranda', href: '#home' },
  { label: 'Tentang', href: '#about' },
  { label: 'Project', href: '#projects' },
  { label: 'Perjalanan', href: '#experience' },
  { label: 'Stack', href: '#skills' },
  { label: 'Workspace', href: '#workspace' },
  { label: 'Pesan', href: '#messages' },
  { label: 'Kontak', href: '#contact' },
];

export const currently = [
  { num: '01', title: 'KULIAH', text: 'Semester 5, Sistem Informasi di Universitas Pamulang. Kuliah berjalan sambil terus membangun dan belajar dari project.' },
  { num: '02', title: 'BANGUN', text: 'AlkonekPlus (speed test untuk ISP), RabegLab (homelab), dan site ini sendiri (porto).' },
  { num: '03', title: 'JELAJAH', text: 'Next.js, Laravel, infrastruktur, networking. Hal-hal yang saya dalami lewat project nyata, bukan teori saja.' },
  { num: '04', title: 'DENGAR', text: 'Mix Harian, playlist lo-fi yang sedang menemani beberapa waktu ini.', link: { label: 'Buka daftar putar di Spotify', href: site.spotify } },
  { num: '05', title: 'HIDUP', text: 'Berada di Serang, Banten. Terbuka untuk magang, part-time, dan freelance.' },
];

export const about = {
  label: 'TENTANG SAYA',
  title: 'Mahasiswa yang belajar lewat membangun.',
  paragraphs: [
    'Mahasiswa Sistem Informasi di Universitas Pamulang, Kampus Serang. Ketertarikan utama saya di pengembangan software, dengan minat yang terus tumbuh di networking dan infrastructure.',
    'Saya lebih banyak memahami teknologi dengan membangun langsung, dari aplikasi web, pengelolaan database dan API, konfigurasi jaringan, sampai menjalankan aplikasi di server dan homelab.',
    'Tidak semua hal sudah saya kuasai, beberapa masih dalam eksplorasi. Yang saya kejar bukan hafal semua tools, tapi paham bagaimana sebuah sistem berjalan menyeluruh, dan setiap project jadi tempat untuk menguji pemahaman itu.',
  ],
};

export const projects = [
  {
    id: 'alkonek',
    category: 'ISP Billing System',
    year: '2025',
    status: 'Produksi',
    name: 'ALKONEK',
    role: 'Pembuat & Developer',
    description: 'Sistem billing ISP FTTH berbasis Laravel untuk penagihan otomatis, pembayaran online, hingga monitoring jaringan fiber real-time.',
    tech: ['Laravel 12', 'MySQL', 'MikroTik API', 'OLT multi-brand', 'Midtrans', 'Leaflet'],
    live: 'https://billing.alkonek.online/',
    github: 'https://github.com/ranggamaulana111111-bit/billing',
    detail: 'ALKONEK adalah sistem billing ISP FTTH yang saya bangun untuk membantu operasional ISP kecil. Sistem ini menangani penagihan otomatis, integrasi pembayaran online, manajemen pelanggan, hingga monitoring jaringan fiber secara real-time. Dibangun dengan Laravel 12 dan terintegrasi dengan MikroTik API serta berbagai OLT multi-brand.',
  },
  {
    id: 'prodesa',
    category: 'Digital Village · e-Government Platform',
    year: '2025–2026',
    status: 'Produksi',
    name: 'Prodesa',
    role: 'Pembuat & Developer',
    description: 'Sistem pelayanan administrasi desa: pengajuan surat online dengan workflow approval berjenjang, RBAC 8 role, versioning dokumen, verifikasi QR, dan dashboard analitik per peran.',
    tech: ['Laravel 11', 'MySQL', 'Spatie Permission', 'Blade', 'Tailwind CSS', 'Chart.js'],
    live: '#',
    github: 'https://github.com/ranggamaulana111111-bit/desamoderen',
    detail: 'Prodesa adalah platform e-Government untuk pelayanan administrasi desa. Fitur utamanya meliputi pengajuan surat online, workflow approval berjenjang, RBAC dengan 8 role berbeda, versioning dokumen, verifikasi QR code, dan dashboard analitik yang disesuaikan per peran pengguna.',
  },
  {
    id: 'alkonekplus',
    category: 'Network Speed Test',
    year: '2026',
    status: 'Dibangun',
    name: 'AlkonekPlus',
    role: 'Pembuat & Developer',
    description: 'Aplikasi pengujian kecepatan internet profesional berbasis Next.js 16. Ukur unduh, unggah, ping, jitter, dan packet loss dengan visualisasi real-time.',
    tech: ['Next.js 16', 'TypeScript', 'Zustand', 'TanStack Query', 'Recharts', 'Playwright'],
    live: '',
    github: 'https://github.com/ranggamaulana111111-bit/speedtest',
    detail: 'AlkonekPlus adalah aplikasi speed test profesional yang dirancang untuk ISP. Mengukur download, upload, ping, jitter, dan packet loss dengan visualisasi real-time. Dibangun dengan Next.js 16 dan fokus pada akurasi pengukuran serta pengalaman pengguna yang bersih.',
  },
  {
    id: 'rabeglab',
    category: 'Personal HomeLab',
    year: '2026',
    status: 'Dibangun',
    name: 'RabegLab',
    role: 'Arsitek & Operator',
    description: 'HomeLab pribadi berarsitektur enterprise. Proxmox VE, Docker, dan dokumentasi lengkap dari fase analisis sampai deployment.',
    tech: ['Proxmox VE', 'Docker', 'Ansible', 'Terraform', 'MkDocs', 'Cloudflare Tunnel'],
    live: '',
    github: 'https://github.com/ranggamaulana111111-bit/homelab',
    detail: 'RabegLab adalah homelab pribadi yang dirancang dengan pendekatan enterprise. Menggunakan Proxmox VE sebagai hypervisor, Docker untuk containerization, serta Ansible dan Terraform untuk automation. Seluruh proses didokumentasikan dari fase analisis hingga deployment.',
  },
];

export const experience = [
  { year: '2021', title: 'Pertama kali menyentuh kode', text: 'Masuk SMKN 4 Pandeglang jurusan PPLG / RPL. Belum paham apa itu variabel, fungsi, atau loop. Tapi saya penasaran.' },
  { year: '2022', title: 'HTML pertama kali jalan di browser', text: "Belajar HTML, CSS, JavaScript secara mandiri lewat YouTube dan dokumentasi. Membuat website pertama yang isinya cuma 'Hello World', tapi rasanya seperti menaklukkan dunia." },
  { year: '2023', title: 'Project pertama yang selesai', text: 'Mengerjakan project kecil untuk tugas sekolah. Saya belajar satu hal penting: menyelesaikan project itu lebih sulit dari memulainya.' },
  { year: '2024', title: 'Masuk kuliah, dunia lebih luas', text: 'Diterima di UNPAM jurusan Sistem Informasi. Mulai belajar backend, database, dan bagaimana sistem bekerja secara keseluruhan. Baru sadar ada banyak yang belum saya tahu.' },
  { year: '2025', title: 'Membangun untuk orang lain', text: 'Membangun portal desa untuk Desa Kumpay, sistem billing untuk ISP kecil. Belajar bahwa software yang baik bukan yang paling canggih, tapi yang menyelesaikan masalah nyata.' },
  { year: '2026', title: 'Masih belajar, masih membangun', text: 'Mendalami Next.js, Docker, Linux, networking. Menerima bahwa menjadi developer adalah proses yang tidak pernah benar-benar selesai, dan itu OK.' },
];

export const education = [
  { school: 'Universitas Pamulang', program: 'Program Studi Sistem Informasi, Kampus Serang', note: 'Masuk 2024. Fokus belajar software development, database, dan bagaimana sistem bekerja secara menyeluruh.', period: '2024–Sekarang' },
  { school: 'SMKN 4 Pandeglang', program: 'Rekayasa Perangkat Lunak', note: 'Awal masuk 2021. Fondasi pertama mengenal pemrograman dan pengembangan perangkat lunak.', period: '2021–2024' },
];

export const skills = [
  { label: 'BAHASA', items: ['PHP', 'TypeScript', 'JavaScript', 'Dart'] },
  { label: 'FRAMEWORK', items: ['Laravel', 'Next.js', 'React', 'Flutter', 'Blade'] },
  { label: 'BASIS DATA', items: ['MySQL', 'SQLite'] },
  { label: 'INFRASTRUKTUR', items: ['Linux', 'Docker', 'Nginx', 'Proxmox', 'Cloudflare'] },
  { label: 'JARINGAN', items: ['MikroTik', 'OLT', 'FTTH'] },
  { label: 'ALAT', items: ['Git', 'GitHub', 'Postman', 'Playwright', 'Figma'] },
];

export const learning = [
  { title: 'Software Development', items: ['Laravel', 'Next.js', 'React', 'TypeScript', 'REST API', 'Database', 'Authentication', 'RBAC'] },
  { title: 'Networking', items: ['MikroTik', 'FTTH', 'OLT', 'ONU', 'Network Monitoring', 'Network Troubleshooting'] },
  { title: 'Infrastructure', items: ['Linux', 'Docker', 'Nginx', 'Proxmox', 'Cloudflare Tunnel', 'Deployment'] },
  { title: 'System Architecture', items: ['Database Design', 'API Integration', 'System Architecture', 'Security', 'Documentation', 'Testing'] },
];

export const notes = [
  { date: 'Jun 2025', category: 'Belajar', read: '6 min baca', title: 'Cara Saya Belajar Coding Tanpa Burnout', href: '/catatan/0' },
  { date: 'Mei 2025', category: 'Project', read: '5 min baca', title: 'Membangun Project Pertama yang Benar-benar Selesai', href: '/catatan/1' },
  { date: 'Apr 2025', category: 'Catatan', read: '4 min baca', title: 'Kenapa Saya Mulai Menulis Tiap Selesai Belajar', href: '/catatan/2' },
];
