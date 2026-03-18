'use client';

import { useState } from 'react';
import { blogPosts } from '../data/blog';
import { ArrowRight, X } from 'lucide-react';

const categoryColors: Record<string, string> = {
  Learning: '#00CFEE',
  Project: '#F5A623',
  Industry: '#a855f7',
  Reflection: '#22c55e',
};

export default function Blog() {
  const [activePost, setActivePost] = useState<number | null>(null);

  const post = activePost !== null ? blogPosts.find((p) => p.id === activePost) : null;

  // Simple markdown-ish renderer (h2, bold, paragraphs)
  function renderContent(content: string) {
    const lines = content.trim().split('\n');
    return lines.map((line, i) => {
      if (line.startsWith('## ')) {
        return (
          <h3
            key={i}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontWeight: 700,
              fontSize: '18px',
              color: 'var(--text)',
              marginTop: '28px',
              marginBottom: '10px',
            }}
          >
            {line.replace('## ', '')}
          </h3>
        );
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <p
            key={i}
            style={{
              fontWeight: 600,
              color: 'var(--text)',
              marginBottom: '8px',
              fontSize: '15px',
            }}
          >
            {line.replace(/\*\*/g, '')}
          </p>
        );
      }
      if (line.trim() === '') return <div key={i} style={{ height: '8px' }} />;
      // Handle inline bold
      const parts = line.split(/\*\*(.*?)\*\*/g);
      return (
        <p key={i} style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '4px' }}>
          {parts.map((part, j) =>
            j % 2 === 1 ? (
              <strong key={j} style={{ color: 'var(--text)' }}>
                {part}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    });
  }

  return (
    <section id="blog" className="section-padding" style={{ backgroundColor: 'var(--bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <p className="section-label" style={{ marginBottom: '12px' }}>Engineering Journal</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(30px, 4vw, 48px)', marginBottom: '16px' }}>
            Technical Blog
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '560px' }}>
            Engineering notes, project breakdowns, and reflections on what I am learning. Written in plain language.
          </p>
        </div>

        {/* Blog grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '24px' }}>
          {blogPosts.map((post) => {
            const color = categoryColors[post.category];
            return (
              <article
                key={post.id}
                className="card"
                style={{ padding: '0', overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
                onClick={() => setActivePost(post.id)}
              >
                {/* Top accent */}
                <div style={{ height: '3px', background: `linear-gradient(90deg, ${color}, transparent)` }} />

                <div style={{ padding: '20px', flex: 1 }}>
                  {/* Meta */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span style={{
                      fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', padding: '4px 10px',
                      borderRadius: '4px', border: `1px solid ${color}30`, color: color, backgroundColor: `${color}10`,
                      letterSpacing: '0.06em',
                    }}>
                      {post.category}
                    </span>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', color: 'var(--text-muted)' }}>
                      {post.readTime}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: '17px',
                    color: 'var(--text)', lineHeight: 1.35, marginBottom: '12px',
                  }}>
                    {post.title}
                  </h3>

                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '20px' }}>
                    {post.summary}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {post.tags.map((tag) => (
                      <span key={tag} className="tech-tag" style={{ fontSize: '10px', padding: '3px 8px' }}>#{tag}</span>
                    ))}
                  </div>
                </div>

                <div style={{
                  padding: '14px 28px', borderTop: '1px solid var(--border)',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: 'var(--text-muted)' }}>
                    {post.date}
                  </span>
                  <span style={{
                    display: 'flex', alignItems: 'center', gap: '5px',
                    fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: 'var(--accent)',
                  }}>
                    Read <ArrowRight size={12} />
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Write-more note */}
        <div style={{
          marginTop: '48px', padding: '28px 32px',
          background: 'var(--card)', borderRadius: '12px', border: '1px solid var(--border)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px',
        }}>
          <div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontWeight: 600, fontSize: '16px', color: 'var(--text)', marginBottom: '4px' }}>
              More articles coming soon
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              New articles published regularly — automation, IoT, embedded systems, and industry insights.
            </div>
          </div>
          <span style={{
            fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', padding: '6px 14px',
            borderRadius: '6px', border: '1px solid var(--border)', color: 'var(--text-muted)',
          }}>
            in progress...
          </span>
        </div>
      </div>

      {/* Article modal */}
      {post && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 2000,
            background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)',
            display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
            padding: '24px', overflowY: 'auto',
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setActivePost(null); }}
        >
          <div style={{
            background: 'var(--surface)', borderRadius: '16px', border: '1px solid var(--border)',
            maxWidth: '740px', width: '100%', marginTop: '40px', marginBottom: '40px', overflow: 'hidden',
          }}>
            {/* Modal header */}
            <div style={{
              padding: '24px 32px', borderBottom: '1px solid var(--border)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
            }}>
              <div>
                <span style={{
                  fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', padding: '4px 10px',
                  borderRadius: '4px', border: `1px solid ${categoryColors[post.category]}30`,
                  color: categoryColors[post.category], backgroundColor: `${categoryColors[post.category]}10`,
                  marginBottom: '12px', display: 'inline-block',
                }}>
                  {post.category}
                </span>
                <h2 style={{
                  fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: '22px',
                  color: 'var(--text)', lineHeight: 1.3, marginTop: '8px',
                }}>
                  {post.title}
                </h2>
                <div style={{ marginTop: '8px', display: 'flex', gap: '16px' }}>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: 'var(--text-muted)' }}>{post.date}</span>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: 'var(--text-muted)' }}>{post.readTime}</span>
                </div>
              </div>
              <button
                onClick={() => setActivePost(null)}
                style={{
                  background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px',
                  padding: '8px', cursor: 'pointer', color: 'var(--text-secondary)',
                  display: 'flex', flexShrink: 0, marginLeft: '16px',
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal body */}
            <div style={{ padding: '32px' }}>
              {renderContent(post.content)}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
