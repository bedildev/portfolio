import { useState } from 'react'
import yahdillahImg from './assets/yahdillah.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const skills = {
    management: ['Manajemen Proyek', 'Metodologi Scrum', 'Sprints & User Stories', 'Sequence Diagrams', 'Timeline & Anggaran', 'Delegasi Tugas', 'Kepemimpinan Tim'],
    development: ['Laravel', 'React.js', 'REST API', 'PHP', 'MySQL', 'PostgreSQL', 'HTML5 & CSS3', 'JavaScript (ES6+)', 'Bootstrap'],
    toolsAI: ['Machine Learning (Decision Tree, Random Forest)', 'Git & GitHub', 'VS Code', 'XAMPP', 'Postman', 'Kotlin (Basic)']
  }

  const projects = [
    {
      id: 'mindmetrics',
      title: 'Website Tes DISC (Self-Assessment)',
      tag: 'Project Lead & Backend Developer',
      desc: 'Merancang dan memimpin pengembangan platform digitalisasi tes kepribadian psikologis dengan peta jalan eksekusi selama 3 bulan. Menyusun rincian anggaran proyek, menentukan milestone pengembangan, dan menyusun User Stories.',
      tech: ['Laravel', 'React', 'REST API', 'MySQL', 'CSS'],
      link: 'https://github.com/ascicode2025-boop/MindMetrics.git',
      featured: true
    },
    {
      id: 'beacukai',
      title: 'DISC Self Assessment',
      tag: 'Backend Developer',
      desc: 'Mengembangkan REST API backend untuk sistem asesmen kepribadian DISC mandiri, melacak respon pengguna, serta menyusun skema basis data PostgreSQL untuk penarikan data hasil tes.',
      tech: ['Laravel', 'PostgreSQL', 'Bootstrap', 'REST API'],
      link: 'https://github.com/ascicode2025-boop/BeaCukai.git',
      featured: false
    },
    {
      id: 'nutrition',
      title: 'Nutrition Optimization',
      tag: 'AI Engineer',
      desc: 'Mengembangkan kecerdasan buatan optimasi gizi dalam program Coding Camp 2026 (DBS Foundation & Dicoding), mencakup pengerjaan proyek akhir, penyusunan progress report, dan presentasi teknis.',
      tech: ['Python', 'Machine Learning', 'Jupyter Notebook', 'Optimization Algorithm'],
      link: 'https://github.com/bedildev/Nutrition-optimization.git',
      featured: false
    },
    {
      id: 'silab-ipb',
      title: 'SILAB-NTDK',
      tag: 'Technical Lead & Backend Developer',
      desc: 'Memimpin aspek teknis sistem informasi laboratorium IPB University. Berkoordinasi langsung dengan PIC institusi dalam merumuskan design brief dan memetakan alur logika sistem melalui sequence diagrams.',
      tech: ['Laravel', 'MySQL', 'Bootstrap', 'jQuery', 'PDF Engine'],
      link: 'https://github.com/ascicode2025-boop/SILAB-NTDK-IPB.git',
      featured: false
    },
    {
      id: 'web-perpus',
      title: 'Web Perpustakaan',
      tag: 'Full Stack Developer',
      desc: 'Membangun website sirkulasi perpustakaan mandiri berbasis localhost untuk kelulusan sertifikasi KKNI Level II Rekayasa Perangkat Lunak.',
      tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/bedildev/perpustakaan.git',
      featured: false
    }
  ]

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container navbar-container">
          <a href="#home" className="navbar-logo">
            Yahdillah<span>.dev</span>
          </a>
          <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
          <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Beranda</a></li>
            <li><a href="#about" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Tentang</a></li>
            <li><a href="#skills" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Keahlian</a></li>
            <li><a href="#projects" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Proyek</a></li>
            <li><a href="#contact" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Kontak</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home">
        <div className="container hero-wrapper">
          <div className="hero-content">
            <span className="hero-subtitle">Halo, Selamat Datang!</span>
            <h1 className="hero-title">
              Saya <span>Yahdillah</span>,<br />
              Project Lead &amp; Web Developer.
            </h1>
            <p className="hero-desc">
              Mahasiswa S1 Teknik Informatika (Semester 7) Universitas YARSI. Berfokus pada manajemen proyek perangkat lunak dan pengembangan web full-stack.
            </p>
            <div className="hero-actions">
              <a href="/cv_yahdillah.pdf" download="CV_Yahdillah.pdf" className="btn btn-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Unduh CV Saya
              </a>
              <a href="#contact" className="btn btn-secondary">Hubungi Saya</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-img-wrapper">
              <div className="hero-blob"></div>
              <img src={yahdillahImg} alt="Yahdillah" className="hero-avatar" />
            </div>
            <div className="hero-code-box">
              <div className="hero-code-line" style={{ color: '#64748b' }}>// Profil Developer</div>
              <div className="hero-code-line"><span style={{ color: '#0ea5e9' }}>const</span> developer = &#123;</div>
              <div className="hero-code-line" style={{ paddingLeft: '16px' }}>name: <span style={{ color: '#0d9488' }}>'Yahdillah'</span>,</div>
              <div className="hero-code-line" style={{ paddingLeft: '16px' }}>status: <span style={{ color: '#d97706' }}>'Technical Lead &amp; PM'</span></div>
              <div className="hero-code-line">&#125;;</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Tentang Saya</span>
            <h2 className="section-title">Kenal Lebih Dekat</h2>
            <p className="section-desc">Berkomitmen memimpin siklus pengembangan perangkat lunak secara efisien, terstruktur, dan tepat waktu.</p>
          </div>
          <div className="about-grid">
            <div className="about-info">
              <h3>Profil Singkat</h3>
              <p>
                Saya adalah mahasiswa S1 Teknik Informatika Universitas YARSI yang berdedikasi tinggi dengan minat mendalam pada pengembangan web full-stack dan manajemen proyek (Project Management). Memiliki keahlian praktis dalam membangun antarmuka yang responsif serta merancang dan mengintegrasikan REST API menggunakan Laravel dan React.
              </p>
              <p>
                Berpengalaman memimpin siklus pengembangan perangkat lunak dengan metodologi Scrum, menerjemahkan kebutuhan bisnis menjadi solusi teknis, dan mengelola alokasi sumber daya. Terbukti mampu memelopori pengembangan sistem informasi berdampak nyata seperti SILAB-NTDK dan platform self-assessment Tes DISC.
              </p>
              <div className="about-stats">
                <div className="stat-card">
                  <div className="stat-number">S1</div>
                  <div className="stat-label">Mahasiswa Aktif (Semester 7)</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">2+</div>
                  <div className="stat-label">Project Lead / Tech Lead</div>
                </div>
              </div>
            </div>
            <div className="about-timeline">
              <h3>Pendidikan &amp; Pelatihan</h3>
              <div className="timeline-item">
                <div className="timeline-date">2023 - Sekarang</div>
                <div className="timeline-title">S1 Teknik Informatika (Sem. 7)</div>
                <div className="timeline-org">Universitas YARSI, Jakarta</div>
                <p className="timeline-desc">Fokus studi: Pengembangan Perangkat Lunak, Kecerdasan Buatan (AI), dan Basis Data. Aktif dalam proyek pengembangan sistem informasi.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2026</div>
                <div className="timeline-title">Coding Camp AI Engineer</div>
                <div className="timeline-org">DBS Foundation &amp; Dicoding</div>
                <p className="timeline-desc">Lulus learning path AI Engineer, mencakup pengerjaan proyek akhir, pelaporan kemajuan (progress reports), dan tugas soft skill.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2020 - 2023</div>
                <div className="timeline-title">Rekayasa Perangkat Lunak (RPL)</div>
                <div className="timeline-org">SMK 1 Perguruan Cikini, Jakarta Utara</div>
                <p className="timeline-desc">Mata pelajaran relevan: Website Development, MySQL, Basis Data. Lulus Uji Sertifikasi LSP KKNI Level II.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">Pelatihan PPKD</div>
                <div className="timeline-title">Pembuatan Aplikasi Android</div>
                <div className="timeline-org">PPKD Jakarta Utara</div>
                <p className="timeline-desc">Mempelajari dasar pembuatan aplikasi Android menggunakan Android Studio dan Kotlin.</p>
              </div>

              <h3 style={{ marginTop: '32px' }}>Organisasi &amp; Kepemimpinan</h3>
              <div className="timeline-item">
                <div className="timeline-date">2025 - 2026</div>
                <div className="timeline-title">Wakil Ketua UKM SMAKA</div>
                <div className="timeline-org">Smarakaryadwani</div>
                <p className="timeline-desc">Mendampingi Ketua dalam memimpin, mengoordinasikan, dan memantau kinerja seluruh anggota divisi untuk memastikan program kerja tercapai. Mengelola operasional administrasi strategis.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2025</div>
                <div className="timeline-title">Ketua Pelaksana Acara</div>
                <div className="timeline-org">Pelatihan Kepemimpinan UKM SMAKA</div>
                <p className="timeline-desc">Memimpin komite penyelenggara (kepanitiaan) untuk acara inagurasi dan pelatihan kepemimpinan tingkat mahasiswa. Mengelola timeline, delegasi tugas, dan pengawasan eksekusi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Keahlian</span>
            <h2 className="section-title">Teknologi &amp; Kemampuan</h2>
            <p className="section-desc">Kombinasi keahlian pemrograman frontend, backend, database, dan metodologi kerja tim.</p>
          </div>
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="skill-category-title">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent)' }}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                Manajemen Proyek &amp; Kepemimpinan
              </h3>
              <div className="skill-list">
                {skills.management.map((s, idx) => (
                  <span key={idx} className="skill-badge">{s}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-sec)' }}><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
                Pengembangan Web &amp; Basis Data
              </h3>
              <div className="skill-list">
                {skills.development.map((s, idx) => (
                  <span key={idx} className="skill-badge">{s}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-warm)' }}><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>
                Kecerdasan Buatan &amp; Alat
              </h3>
              <div className="skill-list">
                {skills.toolsAI.map((s, idx) => (
                  <span key={idx} className="skill-badge">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Portofolio</span>
            <h2 className="section-title">Proyek Pilihan</h2>
            <p className="section-desc">Berikut adalah beberapa proyek utama yang telah saya selesaikan.</p>
          </div>
          <div className="projects-grid">
            {projects.map((p) => (
              <div key={p.id} className="project-card">
                <div className="project-header">
                  <span className={`project-tag ${p.featured ? 'project-tag-featured' : 'project-tag-normal'}`}>
                    {p.tag}
                  </span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-muted)' }}><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <div className="project-body">
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tech">
                    {p.tech.map((t, idx) => (
                      <span key={idx} className="project-tech-badge">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="project-footer">
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    Lihat di GitHub
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Kontak</span>
            <h2 className="section-title">Hubungi Saya</h2>
            <p className="section-desc">Mari berkolaborasi atau diskusikan kesempatan kerja menarik.</p>
          </div>
          <div className="contact-wrapper">
            <div className="contact-info">
              <h3>Hubungi Saya Langsung</h3>
              <p>Silakan hubungi saya melalui media di bawah ini. Saya akan merespons secepat mungkin.</p>
              
              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-icon-wrapper">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <div className="contact-detail-label">Email</div>
                    <div className="contact-detail-value">
                      <a href="mailto:adiyahdillah434@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>adiyahdillah434@gmail.com</a>
                    </div>
                  </div>
                </div>
                
                <div className="contact-detail-item">
                  <div className="contact-icon-wrapper" style={{ backgroundColor: 'var(--accent-sec-light)', color: 'var(--accent-sec)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </div>
                  <div>
                    <div className="contact-detail-label">GitHub</div>
                    <div className="contact-detail-value">
                      <a href="https://github.com/bedildev" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>github.com/bedildev</a>
                    </div>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon-wrapper" style={{ backgroundColor: 'var(--accent-warm-light)', color: 'var(--accent-warm)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </div>
                  <div>
                    <div className="contact-detail-label">Instagram</div>
                    <div className="contact-detail-value">
                      <a href="https://instagram.com/yahdiillah" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>@yahdiillah</a>
                    </div>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon-wrapper" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </div>
                  <div>
                    <div className="contact-detail-label">LinkedIn</div>
                    <div className="contact-detail-value">
                      <a href="https://linkedin.com/in/yahdillah" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn Yahdillah</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-logo">Yahdillah<span>.dev</span></div>
          <div className="footer-copy">&copy; {new Date().getFullYear()} Yahdillah. Semua hak cipta dilindungi.</div>
        </div>
      </footer>
    </>
  )
}

export default App
