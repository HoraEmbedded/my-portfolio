'use client';

import { useState } from 'react';
import { Github, Linkedin, Mail, Send, MapPin, GraduationCap } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate sending — in production, connect to Formspree or EmailJS
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('sent');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const socials = [
    {
      label: 'GitHub',
      handle: '@horaembedded',
      href: 'https://github.com/horaembedded',
      icon: <Github size={20} />,
      desc: 'All open source projects',
    },
    {
      label: 'LinkedIn',
      handle: 'Horacia Azonhoumon',
      href: 'https://linkedin.com/in/horacia-azonhoumon',
      icon: <Linkedin size={20} />,
      desc: 'Professional profile',
    },
    {
      label: 'Email',
      handle: 'horacia.azonhoumon@gmail.com',
      href: 'mailto:horacia.azonhoumon@gmail.com',
      icon: <Mail size={20} />,
      desc: 'Best for opportunities',
    },
  ];

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <p className="section-label" style={{ marginBottom: '12px' }}>— 09 / Contact</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(30px, 4vw, 48px)', marginBottom: '16px' }}>
            Let us build something together
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '520px' }}>
            Looking for an engineering intern who is passionate about automation and IoT? I would love to hear from you.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '60px', alignItems: 'start',
        }}>
          {/* Left: contact info */}
          <div>
            {/* Quick info cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
              {[
                { icon: <MapPin size={16} />, label: 'Location', value: 'Tangier, Morocco' },
                { icon: <GraduationCap size={16} />, label: 'School', value: 'ENSA Tangier — Year 3/5' },
                {
                  icon: (
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '13px' }}>✓</span>
                  ),
                  label: 'Status',
                  value: 'Open to Internships — 2025',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '16px 20px', background: 'var(--bg-card)',
                    border: '1px solid var(--border)', borderRadius: '10px',
                  }}
                >
                  <span style={{ color: 'var(--accent-amber)', display: 'flex', flexShrink: 0 }}>
                    {item.icon}
                  </span>
                  <div>
                    <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '2px' }}>
                      {item.label}
                    </div>
                    <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: '14px', color: 'var(--text-primary)' }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '16px 20px', background: 'var(--bg-card)',
                    border: '1px solid var(--border)', borderRadius: '10px',
                    textDecoration: 'none', transition: 'border-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-amber)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; }}
                >
                  <span style={{ color: 'var(--accent-amber)', display: 'flex', flexShrink: 0 }}>{s.icon}</span>
                  <div>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: '14px', color: 'var(--text-primary)', marginBottom: '2px' }}>
                      {s.handle}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{s.desc}</div>
                  </div>
                  <span style={{ marginLeft: 'auto', fontSize: '18px', color: 'var(--text-muted)' }}>↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact form */}
          <div>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: 'var(--text-muted)', display: 'block', marginBottom: '8px', letterSpacing: '0.08em' }}>
                    Your Name
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: 'var(--text-muted)', display: 'block', marginBottom: '8px', letterSpacing: '0.08em' }}>
                    Email Address
                  </label>
                  <input
                    className="form-input"
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: 'var(--text-muted)', display: 'block', marginBottom: '8px', letterSpacing: '0.08em' }}>
                  Subject
                </label>
                <select
                  className="form-input"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  style={{ cursor: 'pointer' }}
                >
                  <option value="">Select a subject</option>
                  <option value="internship">Internship Opportunity</option>
                  <option value="collaboration">Project Collaboration</option>
                  <option value="question">Technical Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: 'var(--text-muted)', display: 'block', marginBottom: '8px', letterSpacing: '0.08em' }}>
                  Message
                </label>
                <textarea
                  className="form-input"
                  name="message"
                  placeholder="Tell me about the opportunity or your question..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  style={{ resize: 'vertical', minHeight: '120px' }}
                />
              </div>

              {status === 'sent' ? (
                <div style={{
                  padding: '16px 20px', background: 'rgba(34,197,94,0.08)',
                  border: '1px solid rgba(34,197,94,0.3)', borderRadius: '10px',
                  fontFamily: "'IBM Plex Mono', monospace", fontSize: '13px', color: '#22c55e',
                }}>
                  Message sent successfully. I will reply within 24–48 hours.
                </div>
              ) : (
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={status === 'sending'}
                  style={{ width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}
                >
                  {status === 'sending' ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send size={15} />
                    </>
                  )}
                </button>
              )}
            </form>

            <p style={{ marginTop: '16px', fontSize: '12px', color: 'var(--text-muted)', fontFamily: "'IBM Plex Mono', monospace" }}>
              Response time: usually within 24 hours. For urgent matters, email directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
