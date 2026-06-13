export default function Footer() {
  const year = 2026;

  return (
    <footer style={{
      position: 'relative',
      zIndex: 1,
      padding: '4rem 0 2.5rem',
      borderTop: '1px solid var(--border-subtle)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div style={{ gridColumn: '1 / span 1' }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1.1rem',
              letterSpacing: '0.06em',
              marginBottom: '0.875rem',
            }}>
              NEURA<span style={{ color: 'var(--cyan)' }}>ENGIX</span>
            </div>
            <p style={{
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              lineHeight: 1.65,
              maxWidth: '240px',
            }}>
              Engineering intelligence into systems that matter.
            </p>
          </div>

          {/* Links */}
          {[
            {
              heading: 'Services',
              links: ['Neural Architecture', 'AI Integration', 'Automation', 'Strategy'],
            },
            {
              heading: 'Company',
              links: ['About', 'Research', 'Careers', 'Blog'],
            },
            {
              heading: 'Connect',
              links: ['GitHub', 'LinkedIn', 'Twitter / X', 'Contact'],
            },
          ].map(col => (
            <div key={col.heading}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '1rem',
              }}>{col.heading}</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {col.links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--cyan)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    >{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--border-subtle)',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.06em',
          }}>
            © {year} NeuraEngiX. All rights reserved.
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.06em',
          }}>
            neuraengix.com
          </span>
        </div>
      </div>
    </footer>
  );
}
