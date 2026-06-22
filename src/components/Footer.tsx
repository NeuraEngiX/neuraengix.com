const columns = [
  { heading: 'Platform', links: ['Home', 'Core Platform', 'Features', 'Use Cases'] },
  { heading: 'Resources', links: ['FAQ', 'Docs', 'Blog', 'Roadmap', 'Changelog'] },
  { heading: 'Community', links: ['Partners', 'Get in Touch', 'About', 'Privacy Policy'] },
];

export default function Footer() {
  const year = 2026;

  return (
    <footer style={{
      position: 'relative',
      zIndex: 1,
      padding: '5rem 0 2.5rem',
      borderTop: '1px solid var(--border-subtle)',
    }}>
      <div className="container">
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.8fr 1fr 1fr 1fr 1fr',
          gap: '3rem',
          marginBottom: '3.5rem',
        }}>
          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
              <div style={{ width: '30px', height: '30px' }}>
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                  <polygon points="16,2 30,10 30,22 16,30 2,22 2,10" stroke="#00c8ff" strokeWidth="1.5" fill="none" />
                  <circle cx="16" cy="16" r="4" fill="#00c8ff" />
                  <line x1="16" y1="2" x2="16" y2="12" stroke="#00c8ff" strokeWidth="1" opacity="0.5" />
                  <line x1="16" y1="20" x2="16" y2="30" stroke="#00c8ff" strokeWidth="1" opacity="0.5" />
                  <line x1="2" y1="10" x2="12" y2="16" stroke="#00c8ff" strokeWidth="1" opacity="0.5" />
                  <line x1="20" y1="16" x2="30" y2="10" stroke="#00c8ff" strokeWidth="1" opacity="0.5" />
                </svg>
              </div>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.15rem',
                letterSpacing: '0.06em',
              }}>
                NEURA<span style={{ color: 'var(--cyan)' }}>ENGIX</span>
              </span>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '380px' }}>
              NeuraEngiX is AI-powered PLC development that turns plain-language requirements
              and legacy logic into production-ready control code — generate, convert, and
              modernize across vendors in minutes.
            </p>

            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6, marginTop: '1.25rem', maxWidth: '380px' }}>
              Built for Manufacturers, System Integrators, OEMs, and Machine Builders.
            </p>

            {/* Contact */}
            <div style={{ marginTop: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="mailto:hello@neuraengix.com" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: 'var(--cyan)', flexShrink: 0 }}>
                  <rect x="1.5" y="3" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="1.3" />
                  <path d="M2 4l6 4 6-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
                hello@neuraengix.com
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: 'var(--cyan)', flexShrink: 0, marginTop: '2px' }}>
                  <path d="M8 1.5c-2.5 0-4.5 2-4.5 4.5C3.5 9.5 8 14.5 8 14.5s4.5-5 4.5-8.5C12.5 3.5 10.5 1.5 8 1.5z" stroke="currentColor" strokeWidth="1.3" />
                  <circle cx="8" cy="6" r="1.6" stroke="currentColor" strokeWidth="1.3" />
                </svg>
                {/* ponytail: placeholder location — swap for real office(s) */}
                Pune, India
              </div>
            </div>
          </div>

          {/* Link columns */}
          {columns.map(col => (
            <div key={col.heading}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '1.25rem',
              }}>{col.heading}</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--cyan)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    >{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Connect column */}
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '1.25rem',
            }}>Connect</div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { label: 'LinkedIn', href: '#', icon: <path d="M4.5 6.5v6M4.5 4.2v.01M8 12.5v-3.2c0-1 .7-1.8 1.7-1.8s1.8.8 1.8 1.8v3.2M8 12.5v-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /> },
                { label: 'GitHub', href: 'https://github.com/NeuraEngiX', icon: <path d="M8 1.5a6.5 6.5 0 00-2.05 12.67c.32.06.44-.14.44-.31v-1.1c-1.8.39-2.18-.87-2.18-.87-.3-.75-.72-.95-.72-.95-.59-.4.04-.39.04-.39.65.05 1 .67 1 .67.58 1 1.52.71 1.89.54.06-.42.23-.71.41-.87-1.44-.16-2.95-.72-2.95-3.2 0-.71.25-1.28.67-1.74-.07-.16-.29-.82.06-1.71 0 0 .55-.18 1.79.66a6.2 6.2 0 013.26 0c1.24-.84 1.79-.66 1.79-.66.35.89.13 1.55.06 1.71.42.46.67 1.03.67 1.74 0 2.49-1.51 3.04-2.96 3.2.24.2.44.59.44 1.2v1.78c0 .17.12.38.45.31A6.5 6.5 0 008 1.5z" stroke="currentColor" strokeWidth="1.1" /> },
              ].map(s => (
                <a key={s.label} href={s.href} aria-label={s.label} style={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--cyan)'; e.currentTarget.style.borderColor = 'var(--border-glow)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">{s.icon}</svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '1.75rem',
          borderTop: '1px solid var(--border-subtle)',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.06em' }}>
            © {year} NeuraEngiX. All rights reserved.
          </span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ color: 'var(--text-muted)' }}>
            <path d="M9 1.5l6 2.2v4.1c0 3.6-2.5 6-6 7.2-3.5-1.2-6-3.6-6-7.2V3.7L9 1.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
