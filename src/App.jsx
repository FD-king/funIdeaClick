import React, { useEffect, useState } from "react";

const confetti = Array.from({ length: 34 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 11) % 100}%`,
  delay: `${(i % 9) * 0.12}s`,
  duration: `${2.8 + (i % 5) * 0.35}s`,
}));

function Envelope({ onOpen }) {
  return (
    <button
      className="envelope-button"
      onClick={onOpen}
      aria-label="Open your birthday letter"
      type="button"
    >
      <span className="envelope-shadow" />
      <span className="envelope">
        <span className="envelope-back" />
        <span className="letter-peek">
          <i />
          <i />
          <b>♡</b>
        </span>
        <span className="envelope-front" />
        <span className="envelope-flap" />
        <span className="wax-seal">N</span>
      </span>
      <span className="envelope-hint">A little something for you</span>
    </button>
  );
}

function BirthdayLetter({ onClose }) {
  return (
    <section className="letter-wrap" aria-label="Birthday letter">
      <article className="letter-paper">
        <div className="paper-topline">
          <span>A NOTE JUST FOR YOU</span>
          <span className="paper-star">✳</span>
        </div>
        <div className="letter-content">
          <p className="letter-date">A little note for a special day</p>
          <h1>
            Happy Birthday,
            <br />
            <em>Nira!</em>
          </h1>
          <div className="title-divider">
            <span>♡</span>
          </div>
          <p className="letter-greeting">Dear Nira,</p>
          <p>
            Happy Birthday to you! May ALLAH bless you with luck and happyness.
            I hope your special day is filled with genuine smiles and warm
            moments. May the year ahead bring you new adventures, beautiful
            memories, exciting opportunities, and plenty of reasons to feel
            proud of yourself.
          </p>
          <p>
            Keep being your wonderful self, keep dreaming big, and never forget
            how much joy you bring to the people around you. I hope life is
            extra kind to you today and throughout the year. May ALLAH make your
            life easy and simple.
          </p>
          <p className="letter-signoff">Wishing you the loveliest birthday,</p>
          <p className="signature">
            With warm wishes <span>♡</span>
          </p>
        </div>
        <div className="paper-bottom">
          <span>MADE WITH A LITTLE EXTRA CARE</span>
          <span>✦</span>
        </div>
      </article>
      <button className="close-letter" type="button" onClick={onClose}>
        Close letter <span>↗</span>
      </button>
    </section>
  );
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <main className={`page-shell ${isOpen ? "is-open" : ""}`}>
      <div className="grain" aria-hidden="true" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="site-header">
        <a className="brand" href="#home">
          <span className="brand-mark">n.</span>
          <span>a little letter</span>
        </a>
        <span className="header-note">SOMETHING SPECIAL, JUST FOR YOU</span>
      </header>
      <div className="main-content" id="home">
        {!isOpen ? (
          <section className="intro" aria-labelledby="intro-title">
            <div className="eyebrow">
              <span />A DAY TO CELEBRATE
              <span />
            </div>
            <h1 id="intro-title">
              A little note for
              <br />
              <em>someone lovely.</em>
            </h1>
            <p className="intro-copy">
              Some wishes are better when they're opened.
              <br className="desktop-break" />
              This one was made especially for you, Nira.
            </p>
            <Envelope onOpen={() => setIsOpen(true)} />
            <p className="tap-hint">
              <span>↗</span> Tap the envelope to open your surprise
            </p>
          </section>
        ) : (
          <>
            <div className="confetti-layer" aria-hidden="true">
              {confetti.map((p) => (
                <span
                  key={p.id}
                  className="confetti-piece"
                  style={{
                    left: p.left,
                    animationDelay: p.delay,
                    animationDuration: p.duration,
                  }}
                />
              ))}
            </div>
            <BirthdayLetter onClose={() => setIsOpen(false)} />
          </>
        )}
      </div>
      <footer className="site-footer">
        <span>WITH LOVE & GOOD THOUGHTS</span>
        <span className="footer-heart">♥</span>
        <span>FOR NIRA</span>
      </footer>
    </main>
  );
}
