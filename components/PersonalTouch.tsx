'use client';

const interests = [
  {
    title: 'Anime',
    description: 'Anime teaches patience, imagination, and persistence. My favorite series: Fullmetal Alchemist (an engineer who uses science to change the world).',
    icon: '◈',
  },
  
  {
    title: 'Technology Exploration',
    description: 'I follow the latest in robotics, embedded AI, and smart manufacturing. Technology changes fast — I want to be ahead of it.',
    icon: '△',
  },
  {
    title: 'Travel & Discovery',
    description: 'Moving from Benin to Morocco opened my mind to new ways of thinking. I want to work with engineers from all over the world.',
    icon: '◇',
  },
  {
    title: 'Innovation',
    description: 'I believe the best engineering solutions are simple. The most elegant solution to a complex problem is always the goal.',
    icon: '▦',
  },
  {
    title: 'Learning',
    description: 'Courses, documentation, YouTube, books, forums — I read constantly. Every technology I use, I try to understand deeply.',
    icon: '◈',
  },
];

export default function PersonalTouch() {
  return (
    <section id="personal" className="section-padding" style={{ backgroundColor: 'var(--bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <p className="section-label" style={{ marginBottom: '12px' }}>The Person Behind the Engineer</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(30px, 4vw, 28px)', marginBottom: '16px' }}>
            Beyond the code
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', maxWidth: '540px' }}>
            The best engineers are curious humans first. Here is what makes me who I am outside the lab.
          </p>
        </div>

        {/* Interests grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px', marginBottom: '60px' }}>
          {interests.map((item) => (
            <div
              key={item.title}
              style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: '12px', padding: '28px',
                transition: 'border-color 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <div style={{
                fontFamily: "'IBM Plex Mono', monospace", fontSize: '20px',
                color: 'var(--accent)', marginBottom: '14px', lineHeight: 1,
              }}>
                {item.icon}
              </div>
              <h3 style={{
                fontFamily: "'Space Mono', monospace", fontWeight: 600, fontSize: '16px',
                color: 'var(--text)', marginBottom: '10px',
              }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Personal quote */}
        <div style={{
          background: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)',
          padding: '18px', textAlign: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Background decoration */}
          <div style={{
            position: 'absolute', top: '-40px', right: '-40px',
            width: '160px', height: '160px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245,166,35,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <p style={{
            fontFamily: "'Space Mono', monospace", fontWeight: 600,
            fontSize: 'clamp(11px, 3vw, 12px)', color: 'var(--text)',
            lineHeight: 1.5, maxWidth: '700px', margin: '0 auto 20px',
          }}>
            "I did not choose engineering. Engineering chose me the first time I asked how a machine works — and could not stop asking."
          </p>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: 'var(--text-muted)' }}>
            Horacia Azonhoumon / HoraEmbedded
          </div>
        </div>
      </div>
    </section>
  );
}
