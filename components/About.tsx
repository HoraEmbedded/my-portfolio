'use client';

export default function About() {
  return (
    <section
      id="about"
      className="section-padding"
      style={{ backgroundColor: 'var(--surface)' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section header */}
        <div style={{ marginBottom: '64px' }}>
          <p className="section-label" style={{ marginBottom: '12px' }}>
            About Me
          </p>
          <h2
            className="section-title"
            style={{ fontSize: 'clamp(20px, 3vw, 38px)', maxWidth: '600px' }}
          >
            The engineer behind the system
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px',
            alignItems: 'start',
          }}
        >
          {/* Story text */}
          <div>
            <p
              style={{
                fontSize: '17px',
                color: 'var(--text-secondary)',
                lineHeight: 1.85,
                marginBottom: '24px',
              }}
            >
              My name is <strong style={{ color: 'var(--text)' }}>Horacia Azonhoumon</strong>,
              known in the maker community as <strong style={{ color: 'var(--accent)' }}>HoraEmbedded</strong>.
              I am 22 years old, originally from Benin,engineering student at ENSA Tangier, Morocco, studying Electronic Systems and Automation. I will graduate in June 2027.
            </p>

            <p
              style={{
                fontSize: '17px',
                color: 'var(--text-secondary)',
                lineHeight: 1.85,
                marginBottom: '24px',
              }}
            >
              My journey into engineering began with a simple question:{' '}
              <em style={{ color: 'var(--text)' }}>
                "How do machines know what to do?"
              </em>{' '}
              That curiosity led me to study electronics, programming, and automation.
              Every new project is an attempt to answer that question better.
            </p>

            <p
              style={{
                fontSize: '17px',
                color: 'var(--text-secondary)',
                lineHeight: 1.85,
                marginBottom: '24px',
              }}
            >
              Today, I am pursuing a degree in{' '}
              <strong style={{ color: 'var(--text)' }}>
                Electronic Systems and Automation Engineering
              </strong>
              , expected to graduate in June 2027. My focus is on connecting physical machines
              to digital intelligence — what is called Industrial IoT or IIoT.
            </p>

            <p
              style={{
                fontSize: '17px',
                color: 'var(--text-secondary)',
                lineHeight: 1.85,
              }}
            >
              Outside of engineering, I love anime, DIY electronics, exploring new technologies,
              and discovering new places. I believe the best engineers are curious people who
              never stop asking "what if?"
            </p>
          </div>

          {/* Info cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Current status */}
            <div
              className="card"
              style={{ padding: '24px' }}
            >
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '10px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '12px',
                }}
              >
                Current Status
              </div>
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontWeight: 600,
                  fontSize: '16px',
                  color: 'var(--text)',
                  marginBottom: '6px',
                }}
              >
                Engineering Student — Year 4/5
              </div>
              <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                ENSA Tangier, Morocco
              </div>
            </div>

            {[
              {
                label: 'Degree',
                value: 'Engineering in Electronic Systems & Automation',
                sub: 'Expected Graduation: June 2027',
              },
              {
                label: 'Career Target',
                value: 'Automation & IIoT Engineer',
                sub: 'Automation · IIoT',
              },
              {
                label: 'Currently Seeking',
                value: 'Engineering Internship — 2026',
                sub: 'Open to remote and on-site opportunities',
              },
            ].map((item) => (
              <div key={item.label} className="card" style={{ padding: '24px' }}>
                <div
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '10px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '10px',
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontWeight: 600,
                    fontSize: '15px',
                    color: 'var(--text)',
                    marginBottom: '5px',
                  }}
                >
                  {item.value}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                  {item.sub}
                </div>
              </div>
            ))}

            {/* Personality traits */}
            <div className="card" style={{ padding: '24px' }}>
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '10px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '14px',
                }}
              >
                Engineering Mindset
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Curious', 'Creative', 'Detail-oriented', 'Problem solver', 'Independent learner', 'Team player'].map(
                  (trait) => (
                    <span
                      key={trait}
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '11px',
                        padding: '5px 12px',
                        borderRadius: '4px',
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {trait}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
