const principles = [
  {
    label: 'Precision Engineering',
    body: 'Every model, pipeline, and system is built with rigorous attention to correctness — not just functional, but provably reliable under production conditions.',
  },
  {
    label: 'First-Principles Thinking',
    body: 'We don\'t follow trends. We analyze the problem from the ground up, then select — or invent — the right approach for your constraints.',
  },
  {
    label: 'Compounding Systems',
    body: 'Good AI systems improve with use. We design feedback loops and data flywheels baked in from day one so your systems grow smarter over time.',
  },
];

export default function About() {
  return (
    <section id="about" style={{
      position: 'relative',
      zIndex: 1,
      padding: '8rem 0',
      background: 'linear-gradient(180deg, transparent 0%, rgba(0, 20, 50, 0.3) 50%, transparent 100%)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '5rem',
          alignItems: 'start',
        }}>
          {/* Left column */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--cyan)',
              marginBottom: '1rem',
            }}>
              // 02 — About
            </div>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '2rem',
            }}>
              The Future of AI<br />
              <span style={{ color: 'var(--cyan)' }}>Isn't Generic</span>
            </h2>

            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              fontSize: '1rem',
              marginBottom: '1.5rem',
            }}>
              NeuraEngiX was founded on a simple conviction: the most transformative AI
              is purpose-built. Off-the-shelf models solve average problems. We solve yours.
            </p>

            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              fontSize: '1rem',
              marginBottom: '2.5rem',
            }}>
              Our team sits at the intersection of deep ML research and systems engineering —
              we've shipped production AI for industries from healthcare to high-frequency
              finance, logistics to language. We know what breaks in production, and how
              to build systems that don't.
            </p>

            {/* Mission statement */}
            <div style={{
              padding: '1.5rem',
              background: 'rgba(0, 200, 255, 0.04)',
              borderLeft: '3px solid var(--cyan)',
              borderRadius: '0 var(--radius-md) var(--radius-md) 0',
            }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.05rem',
                fontWeight: 500,
                color: 'var(--text-primary)',
                fontStyle: 'italic',
                lineHeight: 1.6,
              }}>
                "We exist to make organizations dramatically more capable through
                intelligence — not by replacing humans, but by giving them
                superhuman leverage."
              </p>
            </div>
          </div>

          {/* Right column — principles */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {principles.map((p, i) => (
              <div key={p.label} style={{
                padding: '2rem 0',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                gap: '1.5rem',
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--cyan)',
                  opacity: 0.5,
                  marginTop: '4px',
                  flexShrink: 0,
                  letterSpacing: '0.08em',
                }}>{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: '1rem',
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)',
                  }}>{p.label}</div>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                  }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
