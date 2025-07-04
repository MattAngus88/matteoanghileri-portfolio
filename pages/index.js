import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Funzione per mostrare la sezione e aggiornare hash URL
  function showSection(id) {
    setActiveSection(id);
    if (typeof window !== 'undefined') {
      history.replaceState(null, null, '#' + id);
    }
    setMenuOpen(false); // chiude il menu mobile
  }
  
  // Al caricamento sincronizza sezione con hash URL
  useEffect(() => {
    const hash = window.location.hash.replace('#', '') || 'home';
    setActiveSection(hash);
  }, []);
  
  return (
    <>
    <Head>
    <title>ANGHILERI 3D</title>
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <meta charSet="UTF-8" />
    <link
    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
    />
    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossOrigin="anonymous"
    />
    <link rel="icon" type="image/png" href="/images/LogoME.png" />
    </Head>
    
    <header className={menuOpen ? 'open' : ''}>
    <div className="top">
    <div className="logo" onClick={() => (window.location.href = '/')}>
    <img src="/images/Logo.png" alt="AM Logo" className="logo-img" />
    </div>
    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
    <div></div>
    <div></div>
    <div></div>
    </div>
    </div>
    <nav>
    <a href="#portfolio" onClick={() => showSection('portfolio')}>
    My Portfolio
    </a>
    <a href="#about" onClick={() => showSection('about')}>
    About Me
    </a>
    <a href="#contact" onClick={() => showSection('contact')}>
    Contact Me
    </a>
    <div className="about-icons">
    <a href="docs/CV.pdf" target="_blank" title="Download CV" rel="noreferrer">
    <img src="/images/cv-icon.svg" alt="CV" className="icon-svg" />
    </a>
    <a href="mailto:matteo.anghileri88@gmail.com" title="Email">
    <img src="/images/email-icon.svg" alt="Email" className="icon-svg" />
    </a>
    <a
    href="https://www.linkedin.com/in/matteo-anghileri-016236370/"
    target="_blank"
    title="LinkedIn"
    rel="noreferrer"
    >
    <img src="/images/linkedin-icon.svg" alt="LinkedIn" className="icon-svg" />
    </a>
    </div>
    </nav>
    </header>
    
    {/* HOME Section */}
    <section id="home" style={{ display: activeSection === 'home' ? 'block' : 'none' }}>
    <video src="/video/showreel.webm" autoPlay muted loop playsInline preload="auto"></video>
    <div id="video-click-layer"></div>
    <a href="https://www.youtube.com/watch?v=dJxUDu5DoGo" className="showreel-btn" target="_blank" rel="noreferrer">
    Showreel
    </a>
    </section>
    
    {/* PORTFOLIO Section */}
    <section id="portfolio" style={{ display: activeSection === 'portfolio' ? 'block' : 'none' }}>
    <video className="section-bg" src="/video/overlay.mp4" autoPlay muted loop playsInline></video>
    <h1 className="subheader text-center titolo">My Portfolio</h1>
    <div className="container">
    <div className="row">
    import Link from 'next/link';
    
    {[
      {
        href: '/UE-Cinematic',
        img: '/images/thumb1.png',
        alt: 'Rise-of-the-badlands-vehicle',
        title: 'UE CINEMATIC',
      },
      {
        href: '/The-golden-fall',
        img: '/images/thumb6.png',
        alt: 'Rise-of-the-badlands-vehicle',
        title: 'THE GOLDEN FALL',
      },
      {
        href: '/Rise-of-the-badlands-vehicle',
        img: '/images/thumb2.png',
        alt: 'Rise-of-the-badlands-vehicle',
        title: 'RISE OF THE BADLANDS VEHICLE',
      },
      {
        href: '/Cafe',
        img: '/images/thumb5.png',
        alt: 'Cafe',
        title: 'CAFE',
      },
      {
        href: '/Bar',
        img: '/images/thumb4.png',
        alt: 'Bar',
        title: 'BAR',
      },
      {
        href: '/ZBrush-Project',
        img: '/images/thumb3.png',
        alt: 'zbrush project',
        title: 'ZBRUSH PROJECT',
      },
    ].map(({ href, img, alt, title }) => (
  <Link
    key={title}
    href={href}
    className="text-decoration-none col-6"
    style={{ color: 'black' }}
  >
    <div className="card-hover card mb-3 w-100">
      <div className="row g-0">
        <div className="col-md-8">
          <img src={img} className="img-fluid bordoarrotondato" alt={alt} />
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div className="card-body text-center">
            <h3 className="card-title m-0">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  </Link>
))}
    
    </div>
    </div>
    </section>
    
    {/* ABOUT Section */}
    <section id="about" style={{ display: activeSection === 'about' ? 'block' : 'none' }}>
    <video className="section-bg" src="/video/overlay.mp4" autoPlay muted loop playsInline></video>
    <div className="subheader">About Me</div>
    <div className="about-container">
    <div className="about-card"></div>
    <div className="about-image">
    <img src="/images/Me.png" alt="Matteo Anghileri" />
    </div>
    <div className="about-content">
    <h2>Welcome!</h2>
    <div className="separator"></div>
    <p>
    I'm Matteo, a <mark>3D Artist</mark> from Milan who will soon graduate in Creative Technologies (3D and VFX) at{' '}
    <mark>NABA</mark>.
    My passion is to transform ideas into unforgettable <mark>visual narratives</mark>.
    </p>
    <p>
    Specialized in <mark>Maya</mark> and <mark>Unreal Engine</mark>, I can manage the entire <mark>3D production pipeline</mark>,
    from concept development and modeling to lighting, rendering and final compositing.
    </p>
    <p>
    Fueled by a <mark>tireless curiosity</mark>, I'm always looking for new technical and artistic horizons.
    </p>
    
    <div className="separator" style={{ marginTop: '2rem', marginBottom: '1.5rem' }}></div>
    
    <div className="about-separator"></div>
    </div>
    </div>
    </section>
    
    {/* CONTACT Section */}
    <section id="contact" style={{ display: activeSection === 'contact' ? 'block' : 'none' }}>
    <video className="section-bg" src="/video/overlay.mp4" autoPlay muted loop playsInline></video>
    <div className="contact-wrapper">
    <h1>Contact&nbsp;Me</h1>
    <form action="mailto:yourmail@example.com" method="post" encType="text/plain">
    <input type="text" name="name" placeholder="Your Name" required />
    <input type="email" name="email" placeholder="Your Email" required />
    <textarea name="message" rows={5} placeholder="Your Message" required></textarea>
    <button type="submit">Send</button>
    </form>
    </div>
    </section>
    </>
  );
}
