export default function Hero() {
  return (
    <header id="home" className="hero">
      <div className="hero-text">
        <p className="eyebrow">Hello, I'm</p>
        <h1>Ndanyuzwe Samuel</h1>
        <p className="tagline">
          Full-Stack Developer building clean, practical web applications —
          from database to interface.
        </p>
        <div className="buttons">
          <a href="#projects" className="btn primary">View My Work</a>
          <a href="#contact" className="btn">Get in Touch</a>
        </div>
      </div>
      <div className="hero-photo">
        <img src="/images/profile.jpg.png" alt="Ndanyuzwe Samuel" />
      </div>
    </header>
  );
}