import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Matteo Anghileri – 3D Generalist</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      {loading && (
        <div className="preloader">
          <p>Loading reel...</p>
        </div>
      )}

      {!loading && (
        <>
          <header className="hero">
            <div className="hero-overlay" />
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/IL_T9ZvaHtQ?rel=0&autoplay=1&mute=1&controls=1&loop=1&playlist=IL_T9ZvaHtQ"
                title="Showreel"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
              <button className="watch-button" onClick={() => window.open('https://www.youtube.com/watch?v=IL_T9ZvaHtQ', '_blank')}>
                ▶ Watch Showreel
              </button>
            </div>
          </header>

          <main>
            <section id="portfolio" className="gallery">
              {[1,2,3,4].map(i => (
                <a key={i} href="#"><img src={`/images/thumb${i}.jpg`} alt={`Project ${i}`} /></a>
              ))}
            </section>

            <section id="about" className="about">
              <div><p>I&apos;m Matteo Anghileri, a 3D Generalist specializing in modeling, texturing, lighting, and animation.</p></div>
              <div><img src="/images/me.jpg" alt="Matteo Anghileri" /></div>
            </section>

            <section id="contact" className="contact">
              <a href="mailto:matteo@example.com">matteo@example.com</a>
            </section>
          </main>

          <footer>
            <p>&copy; 2025 Matteo Anghileri</p>
          </footer>
        </>
      )}
    </>
  );
}
