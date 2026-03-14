'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      padding: '48px 24px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '24px',
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: "'Space Mono', monospace", fontWeight: 800, fontSize: '18px',
              color: 'var(--accent)', marginBottom: '6px',
            }}>
              HoraEmbedded
            </div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: 'var(--text-muted)' }}>
              Automation · Embedded Systems · Industrial IoT
            </div>
          </div>

          {/* Nav links */}
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {['About', 'Projects', 'Lab', 'Blog', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: '13px',
                  color: 'var(--text-muted)', textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'var(--accent)'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'var(--text-muted)'; }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            {[
              { href: 'https://github.com/HoraEmbedded', icon: <Github size={17} />, label: 'GitHub' },
              { href: 'https://linkedin.com/in/horacia-azonhoumon', icon: <Linkedin size={17} />, label: 'LinkedIn' },
              { href: 'mailto:azonhoumonhoracia@gmail.com', icon: <Mail size={17} />, label: 'Email' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                style={{
                  color: 'var(--text-muted)', transition: 'color 0.2s ease',
                  display: 'flex', padding: '6px',
                  background: 'var(--card)', border: '1px solid var(--border)',
                  borderRadius: '7px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent)';
                  e.currentTarget.style.borderColor = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div style={{
          marginTop: '36px', paddingTop: '24px',
          borderTop: '1px solid var(--border)',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px',
        }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: 'var(--text-muted)' }}>
            © {year} Horacia Azonhoumon — HoraEmbedded. All rights reserved.
          </span>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: 'var(--text-muted)' }}>
            ENSA Tangier · Morocco · 2025
          </span>
        </div>
      </div>
    </footer>
  );
}
