import React from 'react';
import './Home.css';

function Home() {
  const skills = ['Python', 'C', 'HTML/CSS', 'SQL', 'Git/GitHub', 'VS Code', 'Generative AI', 'Prompt Engineering'];
  const interests = ['Generative AI', 'Large Language Models', 'Voice Interfaces', 'Data Visualization', 'Full-Stack Web Development'];

  return (
    <div className="home">

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-label">// computer science student</p>
            <h1 className="hero-name">
              Yugandhar<br />
              <span className="name-accent">Krishna</span>
            </h1>
            <p className="hero-sub">
              Building at the intersection of AI and software — focused on LLMs,
              voice interfaces, and intelligent systems.
            </p>
            <div className="hero-links">
              <a href="https://github.com/yugandharkannikanti" target="_blank" rel="noreferrer" className="pill-btn">
                GitHub ↗
              </a>
              <a href="https://linkedin.com/in/Yugandhar-krishna-kannikanti" target="_blank" rel="noreferrer" className="pill-btn">
                LinkedIn ↗
              </a>
            </div>
          </div>
          <div className="hero-avatar">
            <div className="avatar-ring">
              <div className="avatar-inner">
                <span>YK</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section" id="about">
        <div className="section-inner">
          <p className="section-tag">01 — about me</p>
          <h2 className="section-title">A bit about me</h2>
          <p className="about-text">
            I'm a Computer Science undergraduate at Mahindra University, Hyderabad (graduating June 2027),
            passionate about AI systems and modern software development. I've worked as a web development
            intern and software development intern, gaining hands-on experience with LLMs and real-world
            product building.
          </p>
        </div>
      </section>

      {/* Research Interests */}
      <section className="section" id="interests">
        <div className="section-inner">
          <p className="section-tag">02 — research interests</p>
          <h2 className="section-title">What I explore</h2>
          <div className="interests-grid">
            {interests.map((item, i) => (
              <div key={i} className="interest-card">
                <span className="interest-num">0{i + 1}</span>
                <span className="interest-name">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section" id="skills">
        <div className="section-inner">
          <p className="section-tag">03 — skills</p>
          <h2 className="section-title">Tools & Languages</h2>
          <div className="skills-list">
            {skills.map((s, i) => (
              <span key={i} className="skill-tag">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Details */}
      <section className="section" id="contact">
        <div className="section-inner">
          <p className="section-tag">04 — personal details</p>
          <h2 className="section-title">Get in touch</h2>
          <div className="details-grid">
            <div className="detail-row">
              <span className="detail-label">Name</span>
              <span className="detail-val">Yugandhar Krishna Kannikanti</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Phone</span>
              <span className="detail-val">+91 9515148199</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Personal Email</span>
              <a href="mailto:kannikantiyugandharkrishna@gmail.com" className="detail-val detail-link">
                kannikantiyugandharkrishna@gmail.com
              </a>
            </div>
            <div className="detail-row">
              <span className="detail-label">College Email</span>
              <a href="mailto:se23ucse210@mahindrauniversity.edu.in" className="detail-val detail-link">
                se23ucse210@mahindrauniversity.edu.in
              </a>
            </div>
            <div className="detail-row">
              <span className="detail-label">University</span>
              <span className="detail-val">Mahindra University, Hyderabad</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">GPA</span>
              <span className="detail-val">6.75 / 10.0</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
