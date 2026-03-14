'use client';

import { useState } from 'react';
import { skills, engineeringDomains } from '../data/skills';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', 'Programming', 'Hardware', 'Tools', 'Concepts'];

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      className="section-padding"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section header */}
        <div style={{ marginBottom: '64px' }}>
          <p className="section-label" style={{ marginBottom: '12px' }}>
          Engineering Identity
          </p>
          <h2
            className="section-title"
            style={{ fontSize: 'clamp(30px, 4vw, 48px)', marginBottom: '16px' }}
          >
            What I build with
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '500px' }}>
            My technical toolkit — the languages, tools, and hardware I use to turn ideas into working systems.
          </p>
        </div>

        {/* Engineering domains */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginBottom: '80px',
          }}
        >
          {engineeringDomains.map((domain) => (
            <div
              key={domain.id}
              className="card"
              style={{ padding: '28px' }}
            >
              {/* Domain icon */}
              <div
                style={{
                  fontSize: '22px',
                  marginBottom: '16px',
                  fontFamily: "'IBM Plex Mono', monospace",
                  color: 'var(--accent)',
                  lineHeight: 1,
                }}
              >
                {domain.icon}
              </div>

              <h3
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontWeight: 700,
                  fontSize: '18px',
                  color: 'var(--text)',
                  marginBottom: '10px',
                }}
              >
                {domain.title}
              </h3>

              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  marginBottom: '18px',
                }}
              >
                {domain.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {domain.skills.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill bars section */}
        <div>
          <h3
            style={{
              fontFamily: "'Space Mono', monospace",
              fontWeight: 600,
              fontSize: '22px',
              color: 'var(--text)',
              marginBottom: '28px',
            }}
          >
            Technical Skill Level
          </h3>

          {/* Category filter */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '36px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '11px',
                  letterSpacing: '0.06em',
                  padding: '7px 16px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? 'var(--accent)' : 'var(--border)',
                  background: activeCategory === cat ? 'var(--accent)' : 'transparent',
                  color: activeCategory === cat ? '#07070E' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textTransform: 'capitalize',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skill bars grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '18px',
            }}
          >
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  padding: '18px 20px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '10px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 500,
                      fontSize: '14px',
                      color: 'var(--text)',
                    }}
                  >
                    {skill.name}
                  </span>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '11px',
                      color: 'var(--accent)',
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div
                  style={{
                    height: '3px',
                    borderRadius: '2px',
                    background: 'var(--border)',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${skill.level}%`,
                      borderRadius: '2px',
                      background: 'linear-gradient(90deg, var(--accent), var(--accent))',
                    }}
                  />
                </div>

                {/* Category label */}
                <div
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '10px',
                    color: 'var(--text-muted)',
                    marginTop: '8px',
                    letterSpacing: '0.08em',
                  }}
                >
                  {skill.category}
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <p
            style={{
              marginTop: '32px',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '12px',
              color: 'var(--text-muted)',
              fontStyle: 'italic',
            }}
          >
            * Skill levels represent current proficiency, not years of experience. I am actively learning and improving every day.
          </p>
        </div>
      </div>
    </section>
  );
}
