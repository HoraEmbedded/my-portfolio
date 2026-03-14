'use client';

import { timeline } from '../data/timeline';

const typeColors: Record<string, string> = {
  education: '#00CFEE',
  project: '#F5A623',
  internship: '#22c55e',
  certification: '#a855f7',
  goal: '#f43f5e',
};

const typeLabels: Record<string, string> = {
  education: 'Education',
  project: 'Project',
  internship: 'Internship',
  certification: 'Certificate',
  goal: 'Goal',
};

export default function Timeline() {
  return (
    <section id="timeline" className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <p className="section-label" style={{ marginBottom: '12px' }}>— 07 / Engineering Timeline</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(30px, 4vw, 48px)', marginBottom: '16px' }}>
            My Journey
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '520px' }}>
            From my first circuit to my future career. Every step builds toward the engineer I am becoming.
          </p>
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '48px' }}>
          {Object.entries(typeLabels).map(([type, label]) => (
            <div key={type} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: typeColors[type] }} />
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: 'var(--text-secondary)' }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '32px' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: '11px', top: '8px', bottom: '8px',
            width: '1px', background: 'linear-gradient(to bottom, var(--accent-amber), var(--border), var(--accent-cyan))',
          }} />

          {timeline.map((entry, i) => {
            const color = typeColors[entry.type];
            return (
              <div
                key={i}
                style={{
                  position: 'relative',
                  marginBottom: i < timeline.length - 1 ? '36px' : 0,
                  paddingLeft: '28px',
                }}
              >
                {/* Dot */}
                <div style={{
                  position: 'absolute', left: '-22px', top: '6px',
                  width: entry.highlight ? '14px' : '10px',
                  height: entry.highlight ? '14px' : '10px',
                  borderRadius: '50%',
                  background: color,
                  border: entry.highlight ? `2px solid ${color}` : 'none',
                  boxShadow: entry.highlight ? `0 0 12px ${color}60` : 'none',
                  marginLeft: entry.highlight ? '-2px' : '0',
                  zIndex: 1,
                }} />

                <div style={{
                  background: entry.highlight ? 'var(--bg-card)' : 'transparent',
                  border: entry.highlight ? `1px solid ${color}30` : 'none',
                  borderRadius: '10px',
                  padding: entry.highlight ? '20px 24px' : '4px 0',
                  transition: 'all 0.2s ease',
                }}>
                  {/* Year + type */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px', flexWrap: 'wrap' }}>
                    <span style={{
                      fontFamily: "'IBM Plex Mono', monospace", fontWeight: 500, fontSize: '12px',
                      color: color,
                    }}>
                      {entry.year}
                    </span>
                    <span style={{
                      fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px',
                      padding: '2px 8px', borderRadius: '3px',
                      border: `1px solid ${color}30`, color: color, backgroundColor: `${color}10`,
                      textTransform: 'uppercase', letterSpacing: '0.08em',
                    }}>
                      {typeLabels[entry.type]}
                    </span>
                    {entry.type === 'goal' && (
                      <span style={{
                        fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px',
                        color: 'var(--text-muted)',
                      }}>
                        upcoming
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontFamily: "'Syne', sans-serif", fontWeight: 600,
                    fontSize: entry.highlight ? '17px' : '15px',
                    color: 'var(--text-primary)', marginBottom: '4px', lineHeight: 1.3,
                  }}>
                    {entry.title}
                  </h3>

                  <div style={{
                    fontFamily: "'Outfit', sans-serif", fontSize: '13px',
                    color: 'var(--text-muted)', marginBottom: '6px',
                  }}>
                    {entry.subtitle}
                  </div>

                  <p style={{
                    fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65,
                    maxWidth: '640px',
                  }}>
                    {entry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
