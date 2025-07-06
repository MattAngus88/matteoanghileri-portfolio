// pages/The-golden-fall.js
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Bar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const playVideo = () => setVideoPlaying(true);

  return (
    <>
      <Head>
        <title>ANGHILERI 3D – BAR</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/images/LogoME.png" />
      </Head>

      {/* Background video */}
      <video
        id="bgVideo"
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onEnded={e => {
          e.currentTarget.currentTime = 0;
          e.currentTarget.play();
        }}
      >
        <source src="/video/overlay.mp4" type="video/mp4" />
      </video>

      {/* HEADER */}
      <header className={menuOpen ? 'open' : ''}>
        <div className="top">
          <img
            src="/images/logo.png"
            alt="MB Logo"
            className="logo-img"
            onClick={() => (window.location.href = '/')}
            style={{ cursor: 'pointer' }}
          />
          <div className="hamburger" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <nav style={{ display: menuOpen ? 'flex' : 'none' }}>
          <Link href="/#portfolio" legacyBehavior>
            <a>My Portfolio</a>
          </Link>
          <Link href="/#about" legacyBehavior>
            <a>About Me</a>
          </Link>
          <Link href="/#contact" legacyBehavior>
            <a>Contact Me</a>
          </Link>
        </nav>
      </header>

      {/* PAGE CONTENT */}
      <main className="wrapper">
        <section className="card">
          <div className="project-heading">
            <h2>BAR</h2>
            <h3>Environment Design</h3>
          </div>

          {/* Video Card */}
          <div className="video-card" onClick={playVideo} style={{ cursor: 'pointer' }}>
            {!videoPlaying ? (
              <div className="thumbnail">
                <img className="static" src="/images/thumb4.png" alt="BAR cover" />
                <video className="animated" autoPlay muted loop playsInline>
                  <source src="/video/BAR.webm" type="video/webm" />
                </video>
                <div className="overlay">
                  <span className="play-button">&#9658;</span>
                </div>
              </div>
            ) : (
              <div className="video-embed">
                <iframe
                  src="https://www.youtube.com/embed/CN-SaXSH6Vk?autoplay=1&mute=1&rel=0"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ width: '100%', height: '100%' }}
                  title="BAR Video"
                />
              </div>
            )}
          </div>

          {/* Description */}
          <div className="description">
            <p><mark>BAR</mark> is a 3D diorama inspired by the original concept by Fin Downes.</p>
        <p>I modeled the entire scene in <mark>Autodesk Maya</mark>, taking care of every detail of furnishings and architecture. The textures were created in <mark>Substance Painter</mark>, while lighting and rendering were managed with <mark>Arnold</mark> to obtain a photorealistic look. In <mark>NukeX</mark> I then performed compositing and color grading, defining atmosphere and color palette.</p>
        <p>The result is a short sequence that portrays a bar lost in the heart of the hot, arid and motionless desert.</p>
          </div>

          <Link href="/#portfolio" legacyBehavior>
            <a className="back-arrow" title="Back to Portfolio">
              &lt;
            </a>
          </Link>
        </section>
      </main>

      {/* Styled JSX */}
      <style jsx>{`
        .bg-video {
          position: fixed;
          top: 0;
          left: 0;
          z-index: -2;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .logo-img {
          height: 52px;
          width: auto;
          cursor: pointer;
        }
        .wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 7rem 1rem 4rem;
        }
        .card {
          border-radius: 20px;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2.5rem;
          width: 100%;
          max-width: 900px;
          position: fixed;
        }
          @media screen and (max-width:1920px) {
            .card {
              position: static;
            }
          } 
          .card p {
          color: white;
          }
        .project-heading h2 {
          font-size: 3rem;
          font-weight: 600;
          color: #3cb0dd
          text-align: center;
          margin: 0;
        }
          mark {
          background: #3cb0dd;
          }
        .project-heading h3 {
          font-size: 1.8rem;
          font-weight: 300;
          color:rgb(255, 255, 255);
          text-align: center;
          margin-top: 0.4rem;
          margin-bottom: 0;
        }
        .video-card {
          position: relative;
          width: 100%;
          max-width: 700px;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: 12px;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.28);
        }
        .video-card img,
        .video-card video,
        .video-card iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border: none;
        }
        .thumbnail img.static {
          z-index: 1;
        }
        .thumbnail video.animated {
          opacity: 0;
          z-index: 2;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }
        .thumbnail:hover video.animated {
          opacity: 1;
        }
        .thumbnail .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.46);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
          transition: opacity 0.35s ease;
        }
        .thumbnail:hover .overlay {
          opacity: 0;
        }
        .play-button {
          font-size: 4.8rem;
          color: #ffffffd0;
          pointer-events: none;
        }
        @media (max-width: 768px) {
          .play-button {
            font-size: 3.5rem;
          }
        }
        .description {
          max-width: 520px;
          font-size: 1.4rem;
          line-height: 1.45;
          font-weight: 500;
          text-align: justify;
        }
        .description p {
          margin-bottom: 1.5rem;
        }
        .back-arrow {
          align-self: flex-start;
          font-size: 2.6rem;
          color:rgb(255, 255, 255);
          text-decoration: none;
          transition: color 0.25s ease;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        @keyframes arrow-move {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-6px);
          }
          100% {
            transform: translateX(0);
          }
        }
        .back-arrow:hover {
          color: #3cb0dd;
          animation: arrow-move 0.5s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
