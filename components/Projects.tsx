'use client';

import { useState } from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

type Category = 'All' | 'Automation' | 'Embedded' | 'IoT' | 'AI' | 'Electronics';

const categoryColors: Record<string, string> = {
  Automation: '#F5A623',
  Embedded: '#00CFEE',
  IoT: '#22c55e',
  AI: '#a855f7',
  Electronics: '#f43f5e',
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Category>('All');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const categories: Category[] = ['All', 'Automation', 'Embedded', 'IoT', 'AI', 'Electronics'];

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="section-padding"
      style={{ backgroundColor: 'var(--surface)' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section header */}
        <div style={{ marginBottom: '16px' }}>
          <p className="section-label" style={{ marginBottom: '12px' }}>
            — 03 / Engineering Problems Solved
          </p>
          <h2
            className="section-title"
            style={{ fontSize: 'clamp(30px, 4vw, 48px)', marginBottom: '16px' }}
          >
            Projects & Solutions
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '520px', marginBottom: '36px' }}>
            Real problems. Real solutions. Each project starts with a problem statement and ends with a working system.
          </p>
        </div>

        {/* Filter buttons */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '44px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '11px',
                letterSpacing: '0.06em',
                padding: '8px 18px',
                borderRadius: '6px',
                border: '1px solid',
                borderColor:
                  activeFilter === cat
                    ? cat === 'All'
                      ? 'var(--accent)'
                      : categoryColors[cat]
                    : 'var(--border)',
                background:
                  activeFilter === cat
                    ? cat === 'All'
                      ? 'var(--accent)'
                      : categoryColors[cat]
                    : 'transparent',
                color: activeFilter === cat ? '#07070E' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '24px',
          }}
        >
          {filtered.map((project) => {
            const isExpanded = expandedId === project.id;
            const catColor = categoryColors[project.category];

            return (
              <div
                key={project.id}
                className="card"
                style={{
                  padding: '0',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Project header bar */}
                <div
                  style={{
                    height: '3px',
                    background: `linear-gradient(90deg, ${catColor}, transparent)`,
                  }}
                />

                <div style={{ padding: '28px', flex: 1 }}>
                  {/* Category + status */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '16px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '10px',
                        letterSpacing: '0.1em',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        border: `1px solid ${catColor}30`,
                        color: catColor,
                        backgroundColor: `${catColor}10`,
                      }}
                    >
                      {project.category}
                    </span>
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '10px',
                        color: project.status === 'Completed' ? '#22c55e' : project.status === 'In Progress' ? '#f59e0b' : 'var(--text-muted)',
                      }}
                    >
                      {project.status} · {project.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontWeight: 700,
                      fontSize: '18px',
                      color: 'var(--text)',
                      marginBottom: '14px',
                      lineHeight: 1.3,
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Problem */}
                  <div style={{ marginBottom: '14px' }}>
                    <div
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '10px',
                        letterSpacing: '0.1em',
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        marginBottom: '6px',
                      }}
                    >
                      Problem
                    </div>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                      {project.problem}
                    </p>
                  </div>

                  {/* Expanded content */}
                  {isExpanded && (
                    <>
                      <div style={{ marginBottom: '14px' }}>
                        <div
                          style={{
                            fontFamily: "'IBM Plex Mono', monospace",
                            fontSize: '10px',
                            letterSpacing: '0.1em',
                            color: 'var(--text-muted)',
                            textTransform: 'uppercase',
                            marginBottom: '6px',
                          }}
                        >
                          Solution
                        </div>
                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                          {project.solution}
                        </p>
                      </div>

                      <div style={{ marginBottom: '16px' }}>
                        <div
                          style={{
                            fontFamily: "'IBM Plex Mono', monospace",
                            fontSize: '10px',
                            letterSpacing: '0.1em',
                            color: 'var(--text-muted)',
                            textTransform: 'uppercase',
                            marginBottom: '8px',
                          }}
                        >
                          Key Results
                        </div>
                        {project.highlights.map((h, i) => (
                          <div
                            key={i}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '8px',
                              marginBottom: '5px',
                            }}
                          >
                            <span style={{ color: 'var(--accent)', lineHeight: '1.5', flexShrink: 0 }}>
                              ›
                            </span>
                            <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{h}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {/* Technologies */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer actions */}
                <div
                  style={{
                    padding: '16px 28px',
                    borderTop: '1px solid var(--border)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : project.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '11px',
                      color: 'var(--accent)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      letterSpacing: '0.05em',
                      padding: 0,
                    }}
                  >
                    <ArrowRight
                      size={13}
                      style={{
                        transform: isExpanded ? 'rotate(90deg)' : 'none',
                        transition: 'transform 0.2s ease',
                      }}
                    />
                    {isExpanded ? 'Show less' : 'Full details'}
                  </button>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease' }}
                        onMouseEnter={(e) => ((e.currentTarget.style.color = 'var(--accent)'))}
                        onMouseLeave={(e) => ((e.currentTarget.style.color = 'var(--text-muted)'))}
                        title="View on GitHub"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease' }}
                        onMouseEnter={(e) => ((e.currentTarget.style.color = 'var(--accent)'))}
                        onMouseLeave={(e) => ((e.currentTarget.style.color = 'var(--text-muted)'))}
                        title="View Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '56px',
            padding: '40px',
            background: 'var(--card)',
            borderRadius: '16px',
            border: '1px solid var(--border)',
          }}
        >
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
            All projects are open source. See the full code on GitHub.
          </p>
          <a
            href="https://github.com/horaembedded"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ textDecoration: 'none' }}
          >
            <Github size={16} />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
