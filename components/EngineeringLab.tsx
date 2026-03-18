'use client';

const labExperiments = [
  {
    category: 'Sensor Experiments',
    items: [
     
    ],
  },
  {
    category: 'Communication Protocols',
    items: [
      
    ],
  },
  {
    category: 'Linux Automation',
    items: [
      {
        name: 'Bash Script — Auto Backup',
        description: 'Shell script that runs every night to back up project files to an external drive.',
        status: 'Done',
        tools: ['Bash', 'cron', 'Linux'],
      },
      
      
    ],
  },
];

export default function EngineeringLab() {
  return (
    <section
      id="lab"
      className="section-padding"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ marginBottom: '20px' }}>
          <p className="section-label" style={{ marginBottom: '12px' }}>
          Engineering Lab
          </p>
          <h2
            className="section-title"
            style={{ fontSize: 'clamp(30px, 4vw, 48px)', marginBottom: '16px' }}
          >
            Personal Experiment Lab
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '560px', marginBottom: '12px' }}>
            My private engineering space. Not every experiment becomes a project — but every experiment teaches something. These are my active investigations.
          </p>
        </div>

        {/* Lab terminal header bar */}
        <div
          style={{
            background: 'var(--card)',
            borderRadius: '12px 12px 0 0',
            border: '1px solid var(--border)',
            borderBottom: 'none',
            padding: '14px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f43f5e' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} />
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '12px',
              color: 'var(--text-muted)',
              marginLeft: '12px',
            }}
          >
            horaembedded@lab:~$ experiments --list --all
          </span>
        </div>

        {/* Lab content */}
        <div
          style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '0 0 12px 12px',
            padding: '32px 28px',
            marginBottom: '40px',
          }}
        >
          {labExperiments.map((section, sIdx) => (
            <div key={section.category} style={{ marginBottom: sIdx < labExperiments.length - 1 ? '40px' : 0 }}>
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '10px',
                    letterSpacing: '0.12em',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                  }}
                >
                  [{section.category}]
                </span>
                <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
              </div>

              {/* Experiments */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: '16px',
                }}
              >
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: '10px',
                      padding: '20px',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'border-color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget.style.borderColor = 'var(--accent)');
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget.style.borderColor = 'var(--border)');
                    }}
                  >
                    {/* Status indicator */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: item.status === 'Done' ? '#22c55e' : '#f59e0b',
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: '10px',
                          color: item.status === 'Done' ? '#22c55e' : '#f59e0b',
                        }}
                      >
                        {item.status}
                      </span>
                    </div>

                    <h4
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontWeight: 600,
                        fontSize: '14px',
                        color: 'var(--text)',
                        marginBottom: '8px',
                        paddingRight: '80px',
                        lineHeight: 1.4,
                      }}
                    >
                      {item.name}
                    </h4>

                    <p
                      style={{
                        fontSize: '13px',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        marginBottom: '14px',
                      }}
                    >
                      {item.description}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                      {item.tools.map((tool) => (
                        <span key={tool} className="tech-tag" style={{ fontSize: '10px', padding: '3px 8px' }}>
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <blockquote
          style={{
            borderLeft: '3px solid var(--accent)',
            paddingLeft: '20px',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '14px',
            color: 'var(--text-muted)',
            fontStyle: 'italic',
          }}
        >
          "Every experiment, even the failed ones, teaches something a textbook cannot."
        </blockquote>
      </div>
    </section>
  );
}
