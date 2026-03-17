'use client';

import { skills } from '../data/skills';

const categories = [
  "Programming",
  "Hardware & Embedded",
  "Communication & IoT",
  "Tools & Platforms",
] as const;

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '100px 0', backgroundColor: 'var(--bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
          <p className="section-label">Engineering Identity</p>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        {/* Grid de catégories */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '20px',
        }}>
          {categories.map((cat) => {
            const catSkills = skills.filter((s) => s.category === cat);
            return (
              <div key={cat} className="card" style={{ padding: '28px' }}>

                {/* Nom de la catégorie */}
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: '24px',
                }}>
                  {cat}
                </div>

                {/* Skills */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {catSkills.map((skill) => (
                    <div key={skill.name}>

                      {/* Nom + score */}
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '8px',
                      }}>
                        <span style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: '11px',
                          color: 'var(--text)',
                          fontWeight: 400,
                        }}>
                          {skill.name}
                        </span>
                        <span style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: '11px',
                          color: 'var(--text-secondary)',
                        }}>
                          {skill.level}/10
                        </span>
                      </div>

                      {/* Barre */}
                      <div style={{
                        width: '100%',
                        height: '3px',
                        background: 'var(--border)',
                        borderRadius: '2px',
                        overflow: 'hidden',
                      }}>
                        <div style={{
                          height: '100%',
                          width: `${skill.level * 10}%`,
                          background: 'var(--accent)',
                          borderRadius: '2px',
                          transition: 'width 1.2s ease',
                        }} />
                      </div>

                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Note bas */}
        <p style={{
          marginTop: '32px',
          fontFamily: "'Space Mono', monospace",
          fontSize: '11px',
          color: 'var(--muted)',
          fontStyle: 'italic',
        }}>
          * Scale based on current proficiency level - not years of experience.
        </p>

      </div>
    </section>
  );
}