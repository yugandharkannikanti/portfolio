import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Fitness Tracker',
    period: 'Oct 2025 – Nov 2025',
    stack: ['Python', 'ChatGPT', 'Pandas', 'Matplotlib'],
    desc: 'An AI-assisted fitness tracking system that generates personalized workout and diet plans based on user inputs and activity patterns.',
    bullets: [
      'Analyzed fitness data using Pandas and visualized weekly performance trends with Matplotlib',
      'Reduced manual analysis effort by 70% through intelligent data processing',
      'Integrated ChatGPT API for dynamic, personalized health recommendations',
    ],
    github: 'https://github.com/yugandharkannikanti',
  },
  {
    id: 2,
    title: 'Steward Assessment Voice Agent',
    period: 'Jun 2025 – Jul 2025',
    stack: ['Python', 'OpenAI API', 'Speech-To-Text', 'Text-To-Speech'],
    desc: 'A web-based steward assessment system with voice interaction and automated evaluation achieving 90% accuracy.',
    bullets: [
      'Implemented an AI adapter pattern for modular LLM integration',
      'Built response processing and scoring logic with 90% evaluation accuracy',
      'Designed end-to-end voice interaction flow with STT/TTS pipeline',
    ],
    github: 'https://github.com/yugandharkannikanti',
  },
];

function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-inner">

        <div className="projects-header">
          <p className="section-tag">// selected work</p>
          <h1 className="projects-title">Projects</h1>
          <p className="projects-sub">
            A collection of work built with Python, AI APIs, and modern tooling.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((p) => (
            <article key={p.id} className="project-card">
              <div className="project-top">
                <div>
                  <span className="project-num">0{p.id}</span>
                  <h2 className="project-title">{p.title}</h2>
                  <p className="project-period">{p.period}</p>
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  GitHub ↗
                </a>
              </div>

              <p className="project-desc">{p.desc}</p>

              <ul className="project-bullets">
                {p.bullets.map((b, i) => (
                  <li key={i} className="project-bullet">
                    <span className="bullet-dot">▸</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="project-stack">
                {p.stack.map((s, i) => (
                  <span key={i} className="stack-tag">{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Projects;
