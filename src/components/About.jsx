const skills = ["React", "Node.js", "Express", "JavaScript", "HTML/CSS", "MongoDB", "Git", "REST APIs"];

export default function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        I'm a developer based in Rwanda, focused on building full-stack
        applications that solve real problems. I enjoy the full pipeline —
        designing the data model, writing the API, and crafting a clean
        interface on top.
      </p>
      <div className="tags">
        {skills.map((s) => <span key={s} className="tag">{s}</span>)}
      </div>
    </section>
  );
}