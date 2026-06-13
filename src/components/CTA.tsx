export default function CTA() {
  return (
    <section id="contact" style={{
      position: 'relative',
      zIndex: 1,
      padding: '8rem 0',
    }}>
      <div className="container">
        <div style={{
          position: 'relative',
          padding: 'clamp(3rem, 6vw, 5rem)',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          overflow: 'hidden',
        }}>
          {/* Background decoration */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-10%',
            width: '60%',
            height: '200%',
            background: 'radial-gradient(ellipse, rgba(0, 200, 255, 0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Corner marks */}
          {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map(corner => {
            const isRight = corner.includes('right');
            const isBottom = corner.includes('bottom');
            return (
              <div key={corner} style={{
                position: 'absolute',
                [isBottom ? 'bottom' : 'top']: 0,
                [isRight ? 'right' : 'left']: 0,
                width: '20px',
                height: '20px',
                borderTop: !isBottom ? '2px solid var(--cyan)' : 'none',
                borderBottom: isBottom ? '2px solid var(--cyan)' : 'none',
                borderLeft: !isRight ? '2px solid var(--cyan)' : 'none',
                borderRight: isRight ? '2px solid var(--cyan)' : 'none',
                opacity: 0.5,
              }} />
            );
          })}

          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--cyan)',
              marginBottom: '1.5rem',
            }}>
              // 03 — Let's Build
            </div>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '1.25rem',
            }}>
              Ready to Engineer
              <br />
              <span style={{ color: 'var(--cyan)' }}>Your Intelligence Layer?</span>
            </h2>

            <p style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
            }}>
              Whether you're starting from scratch or scaling an existing AI system,
              we'll meet you where you are. Let's scope your project together.
            </p>

            {/* Email input + button */}
            <form
              onSubmit={e => e.preventDefault()}
              style={{
                display: 'flex',
                gap: '0',
                maxWidth: '480px',
                margin: '0 auto',
                flexWrap: 'wrap',
              }}
            >
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  flex: '1 1 200px',
                  padding: '0.875rem 1.25rem',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-glow)',
                  borderRight: 'none',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  borderRadius: 'var(--radius-sm) 0 0 var(--radius-sm)',
                }}
                onFocus={e => {
                  e.currentTarget.style.borderColor = 'var(--cyan)';
                }}
                onBlur={e => {
                  e.currentTarget.style.borderColor = 'var(--border-glow)';
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '0.875rem 1.75rem',
                  background: 'var(--cyan)',
                  color: 'var(--bg-void)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                  transition: 'all 0.2s',
                  boxShadow: '0 0 20px rgba(0, 200, 255, 0.25)',
                  flexShrink: 0,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 200, 255, 0.4)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 200, 255, 0.25)';
                }}
              >
                Get in Touch
              </button>
            </form>

            <p style={{
              marginTop: '1rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.06em',
            }}>
              No spam. We respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
