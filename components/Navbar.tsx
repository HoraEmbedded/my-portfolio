'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#lab', label: 'Lab' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'var(--surface)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <nav
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none' }}>
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: '18px',
              color: 'var(--accent)',
              letterSpacing: '-0.01em',
            }}
          >
            Hora
            <span style={{ color: 'var(--text)' }}>Embedded</span>
          </span>
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '11px',
              color: 'var(--text-muted)',
              marginLeft: '8px',
            }}
          >
            v1.0
          </span>
        </a>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="hidden-mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--accent)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--text-secondary)')}
            >
              {link.label}
            </a>
          ))}

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              title="Toggle dark/light mode"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '8px',
                cursor: 'pointer',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget.style.borderColor = 'var(--accent)');
                (e.currentTarget.style.color = 'var(--accent)');
              }}
              onMouseLeave={(e) => {
                (e.currentTarget.style.borderColor = 'var(--border)');
                (e.currentTarget.style.color = 'var(--text-secondary)');
              }}
            >
              {resolvedTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
        </div>

        {/* Mobile buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="show-mobile">
          {mounted && (
            <button
              onClick={toggleTheme}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-secondary)',
                display: 'flex',
                padding: '4px',
              }}
            >
              {resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text)',
              display: 'flex',
              padding: '4px',
            }}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div
          style={{
            background: 'var(--surface)',
            borderTop: '1px solid var(--border)',
            padding: '16px 24px 24px',
          }}
          className="show-mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                fontFamily: "'Outfit', sans-serif",
                fontSize: '15px',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 769px) { .show-mobile { display: none !important; } }
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } }
      `}</style>
    </header>
  );
}
