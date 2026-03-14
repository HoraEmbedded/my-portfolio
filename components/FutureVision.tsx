'use client';

const visionPillars = [
  {
    number: '01',
    title: 'Smart Factories',
    description:
      'I want to build automated production systems where machines communicate, self-monitor, and adapt in real time — with zero unplanned downtime.',
    keywords: ['Production Optimization', 'Machine-to-Machine', 'Digital Twin'],
  },
  {
    number: '02',
    title: 'Intelligent Connected Machines',
    description:
      'Every industrial machine should generate useful data. My goal is to design systems that collect this data, analyze it, and act on it — automatically.',
    keywords: ['IIoT', 'Edge Computing', 'OPC-UA', 'MQTT'],
  },
  {
    number: '03',
    title: 'AI-Driven Maintenance',
    description:
      'Machines should predict their own failures before they happen. I want to deploy ML models on the factory floor that detect problems in real time.',
    keywords: ['Predictive Maintenance', 'Anomaly Detection', 'TinyML'],
  },
  {
    number: '04',
    title: 'Industry 4.0 Infrastructure',
    description:
      'Building the communication backbone of smart factories: from field devices to cloud dashboards — secure, reliable, and scalable.',
    keywords: ['SCADA', 'Cloud Integration', 'Cybersecurity', 'Protocols'],
  },
];

export default function FutureVision() {
  return (
    <section
      id="vision"
      className="section-padding"
      style={{ backgroundColor: 'var(--bg-surface)' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <p className="section-label" style={{ marginBottom: '12px' }}>
            — 05 / Future Vision
          </p>
          <h2
            className="section-title"
            style={{ fontSize: 'clamp(30px, 4vw, 48px)', marginBottom: '16px', maxWidth: '620px' }}
          >
            Where I am going
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '560px' }}>
            My engineering ambition is clear: become an AIoT Industrial Engineer who builds the intelligent infrastructure for the factories of the future.
          </p>
        </div>

        {/* Vision pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '72px',
          }}
        >
          {visionPillars.map((pillar) => (
            <div key={pillar.number} className="card" style={{ padding: '32px' }}>
              {/* Number */}
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: '48px',
                  color: 'var(--border)',
                  lineHeight: 1,
                  marginBottom: '20px',
                  letterSpacing: '-0.02em',
                }}
              >
                {pillar.number}
              </div>

              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: '20px',
                  color: 'var(--text-primary)',
                  marginBottom: '12px',
                }}
              >
                {pillar.title}
              </h3>

              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '20px',
                }}
              >
                {pillar.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {pillar.keywords.map((kw) => (
                  <span
                    key={kw}
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '10px',
                      padding: '4px 9px',
                      borderRadius: '4px',
                      background: 'rgba(245,166,35,0.08)',
                      border: '1px solid rgba(245,166,35,0.2)',
                      color: 'var(--accent-amber)',
                    }}
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Career path */}
        <div
          style={{
            background: 'var(--bg-card)',
            borderRadius: '16px',
            border: '1px solid var(--border)',
            padding: '48px',
          }}
        >
          <h3
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: '22px',
              color: 'var(--text-primary)',
              marginBottom: '32px',
            }}
          >
            My Engineering Roadmap
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            {[
              { phase: 'Now', title: 'Student Engineer', focus: 'Automation + Embedded + IIoT fundamentals' },
              { phase: '2025', title: 'Engineering Intern', focus: 'Real factory environment + industrial protocols' },
              { phase: '2027', title: 'Junior Engineer', focus: 'IIoT projects + AI integration' },
              { phase: '2030+', title: 'AIoT Industrial Engineer', focus: 'Lead smart factory systems worldwide' },
            ].map((step, i) => (
              <div key={step.phase} style={{ position: 'relative' }}>
                {/* Connector line */}
                {i < 3 && (
                  <div
                    style={{
                      position: 'absolute',
                      right: '-12px',
                      top: '14px',
                      width: '24px',
                      height: '1px',
                      background: 'var(--accent-amber)',
                      opacity: 0.3,
                    }}
                    className="hidden-mobile"
                  />
                )}

                <div
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '10px',
                    letterSpacing: '0.12em',
                    color: 'var(--accent-amber)',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                  }}
                >
                  {step.phase}
                </div>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 600,
                    fontSize: '16px',
                    color: 'var(--text-primary)',
                    marginBottom: '6px',
                  }}
                >
                  {step.title}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{step.focus}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 768px) { .hidden-mobile { display: none !important; } }`}</style>
    </section>
  );
}
