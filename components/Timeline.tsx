'use client';

import { timeline } from '../data/timeline';

export default function Timeline() {
  // Sépare en 2 colonnes — gauche et droite
  const left  = timeline.filter((_, i) => i % 2 === 0);
  const right = timeline.filter((_, i) => i % 2 !== 0);
  const rows  = Math.max(left.length, right.length);

  return (
    <section id="timeline" style={{ padding: '100px 0', backgroundColor: 'var(--surface)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <p className="section-label">— 07 / Timeline</p>
          <h2 className="section-title">My Journey</h2>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', maxWidth: '480px' }}>
            Every step that brought me here — and every goal ahead.
          </p>
        </div>

        {/* Timeline grid */}
        <div style={{ position: 'relative' }}>

          {/* Ligne centrale verticale */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '1px',
            background: 'linear-gradient(to bottom, transparent, var(--accent), transparent)',
            transform: 'translateX(-50%)',
          }} />

          {/* Lignes par paire */}
          {Array.from({ length: rows }, (_, rowIndex) => {
            const leftEntry  = left[rowIndex];
            const rightEntry = right[rowIndex];

            return (
              <div
                key={rowIndex}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 40px 1fr',
                  gap: '0',
                  marginBottom: '48px',
                  alignItems: 'start',
                }}
              >
                {/* Colonne gauche */}
                <div style={{ paddingRight: '40px', textAlign: 'right' }}>
                  {leftEntry && <Entry entry={leftEntry} />}
                </div>

                {/* Connecteur central */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  paddingTop: '24px',
                  gap: '4px',
                }}>
                  <div style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    border: '2px solid var(--accent)',
                    background: 'var(--bg)',
                    flexShrink: 0,
                  }} />
                  {rightEntry && (
                    <>
                      <div style={{ width: '1px', height: '80px', background: 'var(--border)' }} />
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        border: '2px solid var(--accent)',
                        background: 'var(--bg)',
                        flexShrink: 0,
                        opacity: 0.5,
                      }} />
                    </>
                  )}
                </div>

                {/* Colonne droite */}
                <div style={{ paddingLeft: '40px' }}>
                  {rightEntry && <Entry entry={rightEntry} />}
                </div>

              </div>
            );
          })}

        </div>
      </div>

      {/* Responsive mobile */}
      <style>{`
        @media (max-width: 768px) {
          .timeline-grid { grid-template-columns: 24px 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* Composant d'une entrée */
function Entry({ entry }: { entry: ReturnType<typeof timeline[0]['type'] extends string ? () => typeof timeline[0] : never> & { date: string; title: string; description: string; type: string } }) {
  return (
    <div>
      {/* Badge type */}
      <span style={{
        display: 'inline-block',
        fontFamily: "'Space Mono', monospace",
        fontSize: '10px',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        padding: '3px 10px',
        border: '1px solid var(--border)',
        borderRadius: '4px',
        color: 'var(--text-secondary)',
        marginBottom: '10px',
      }}>
        {entry.type}
      </span>

      {/* Date */}
      <div style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '12px',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--accent)',
        marginBottom: '8px',
      }}>
        {entry.date}
      </div>

      {/* Titre */}
      <h3 style={{
        fontFamily: "'Space Mono', monospace",
        fontWeight: 700,
        fontSize: '17px',
        color: 'var(--text)',
        marginBottom: '10px',
        lineHeight: 1.3,
      }}>
        {entry.title}
      </h3>

      {/* Description */}
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '14px',
        color: 'var(--text-secondary)',
        lineHeight: 1.7,
      }}>
        {entry.description}
      </p>
    </div>
  );
}
