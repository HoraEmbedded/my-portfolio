'use client';

import { useEffect, useState } from 'react';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

// The words that cycle in the hero title
const roles = [
  'Automation Engineer',
  'Control Systems Engineer',
];

// Circuit background SVG nodes
const nodes = [
  { x: '8%', y: '20%' }, { x: '92%', y: '15%' },
  { x: '15%', y: '70%' }, { x: '85%', y: '65%' },
  { x: '50%', y: '10%' }, { x: '25%', y: '45%' },
  { x: '75%', y: '40%' }, { x: '60%', y: '80%' },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((r) => (r + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'var(--bg)',
      }}
    >
      {/* Grid background */}
      <div
        className="grid-bg"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          opacity: 0.8,
        }}
      />

      {/* Circuit SVG background */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          opacity: 0.12,
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Circuit paths */}
        <path d="M8 20 L25 20 L25 45 L50 45" stroke="var(--accent)" strokeWidth="0.2" fill="none" />
        <path d="M50 10 L50 45 L75 45 L75 40" stroke="var(--accent)" strokeWidth="0.2" fill="none" />
        <path d="M92 15 L75 15 L75 40" stroke="var(--accent)" strokeWidth="0.15" fill="none" />
        <path d="M15 70 L25 70 L25 45" stroke="var(--accent)" strokeWidth="0.15" fill="none" />
        <path d="M85 65 L75 65 L75 40" stroke="var(--accent)" strokeWidth="0.2" fill="none" />
        <path d="M60 80 L60 45 L50 45" stroke="var(--accent)" strokeWidth="0.15" fill="none" />
        {/* Nodes */}
        {nodes.map((node, i) => (
          <circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="0.8"
            fill="var(--accent)"
            opacity={i % 2 === 0 ? 1 : 0.6}
          />
        ))}
      </svg>

      {/* Gradient orbs */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,166,35,0.06) 0%, transparent 70%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,207,238,0.05) 0%, transparent 70%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Main content */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          paddingTop: '80px',
          position: 'relative',
          zIndex: 2,
          width: '100%',
        }}
      >
        <div style={{ maxWidth: '780px' }}>
          {/* Status badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '100px',
              padding: '6px 14px 6px 10px',
              marginBottom: '32px',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: '#22c55e',
                display: 'inline-block',
                animation: 'pulse2 2s ease-in-out infinite',
              }}
            />
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '11px',
                color: 'var(--text-secondary)',
                letterSpacing: '0.08em',
              }}
            >
              Available for Internships — 2025
            </span>
          </div>

          {/* Name */}
          <div style={{ marginBottom: '16px' }}>
            <span className="section-label">Engineering Portfolio</span>
          </div>

          <h1
            style={{
              fontFamily: "'Space Mono', monospace",
              fontWeight: 800,
              fontSize: 'clamp(16px, 3vw, 52px)',
              lineHeight: 1.05,
              color: 'var(--text)',
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}
          >
            Houénoumè Horacia Gloriéta
            <br />
            <span style={{ color: 'var(--accent)' }}>AZONHOUMON</span>
          </h1>

          {/* Typewriter role */}
          <div
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 'clamp(16px, 2.5vw, 22px)',
              color: 'var(--text-secondary)',
              marginBottom: '28px',
              minHeight: '34px',
            }}
          >
            {displayText}
            <span className="cursor-blink" style={{ color: 'var(--accent)' }}>
              _
            </span>
          </div>

          {/* Short description */}
          <p
            style={{
              fontSize: '17px',
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              marginBottom: '44px',
              maxWidth: '600px',
            }}
          >
            Engineering student at <strong style={{ color: 'var(--text)' }}>ENSA Tangier</strong>{' '}
            specializing in <strong style={{ color: 'var(--text)' }}>in Electronic Systems and Automation</strong>,{' '}
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '56px' }}>
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="/cv-horacia-azonhoumon.pdf"
              download
              className="btn-outline"
            >
              Download CV
              <Download size={16} />
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '11px',
                color: 'var(--text-muted)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Find me on
            </span>
            <div style={{ width: '30px', height: '1px', background: 'var(--border)' }} />
            {[
              { href: 'https://github.com/HoraEmbedded', icon: <Github size={18} />, label: 'GitHub' },
              { href: 'https://linkedin.com/in/horacia-azonhoumon', icon: <Linkedin size={18} />, label: 'LinkedIn' },
              { href: 'mailto:azonhoumonhoracia@gmail.com', icon: <Mail size={18} />, label: 'Email' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                style={{
                  color: 'var(--text-muted)',
                  transition: 'color 0.2s ease',
                  display: 'flex',
                }}
                onMouseEnter={(e) => ((e.currentTarget.style.color = 'var(--accent)'))}
                onMouseLeave={(e) => ((e.currentTarget.style.color = 'var(--text-muted)'))}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Floating stats */}
        <div
          style={{
            position: 'absolute',
            right: '24px',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
          className="stats-panel hidden-mobile"
        >
          {[
            { value: '6+', label: 'Projects' },
            { value: '2026', label: 'Seeking' },
            { value: 'IoT', label: 'Specialty' },
            { value: '22', label: 'Years old' },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                padding: '16px 20px',
                textAlign: 'center',
                minWidth: '90px',
              }}
            >
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontWeight: 700,
                  fontSize: '22px',
                  color: 'var(--accent)',
                  lineHeight: 1,
                  marginBottom: '4px',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '10px',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          zIndex: 2,
        }}
      >
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
          SCROLL
        </span>
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, var(--accent), transparent)',
            animation: 'pulse2 2s ease-in-out infinite',
          }}
        />
      </div>

      <style>{`
        @media (max-width: 768px) { .stats-panel { display: none !important; } }
      `}</style>
    </section>
  );
}
