export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      overflow: 'hidden',
      zIndex: 1,
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '880px', margin: '0 auto', paddingTop: '120px', paddingBottom: '100px' }}>

          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            background: 'var(--cyan-ghost)',
            border: '1px solid var(--border-glow)',
            borderRadius: '100px',
            marginBottom: '2rem',
            animation: 'fadeUp 0.6s ease both',
          }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: 'var(--cyan)', display: 'inline-block',
              animation: 'pulseGlow 2s ease-in-out infinite',
            }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
              letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--cyan)',
            }}>
              AI for Industrial Automation
            </span>
          </div>

          {/* Main heading */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.6rem, 6.5vw, 5rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
            color: 'var(--text-primary)',
            animation: 'fadeUp 0.6s 0.1s ease both',
            opacity: 0,
          }}>
            Generate, Convert &amp;
            <br />
            <span className="gradient-text">Modernize PLC Code</span>
            <br />
            in Minutes, Not Weeks
          </h1>

          {/* Subtext */}
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'var(--text-secondary)',
            fontWeight: 400,
            lineHeight: 1.7,
            maxWidth: '660px',
            margin: '0 auto 2.5rem',
            animation: 'fadeUp 0.6s 0.2s ease both',
            opacity: 0,
          }}>
            NeuraEngiX is AI-powered PLC development for Rockwell, Siemens, CODESYS,
            Beckhoff and more. Import existing logic, translate across vendors, and
            export native formats like L5X and PLCopen XML — without sacrificing
            quality or compliance.
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center',
            animation: 'fadeUp 0.6s 0.3s ease both', opacity: 0,
          }}>
            <a href="#waitlist" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '0.875rem 2rem',
              background: 'var(--cyan)',
              color: '#ffffff',
              fontFamily: 'var(--font-display)', fontWeight: 600,
              fontSize: '0.9rem',
              borderRadius: 'var(--radius-md)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(0.95)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Join the Waitlist
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#how-it-works" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '0.875rem 2rem',
              background: 'transparent',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-display)', fontWeight: 500,
              fontSize: '0.9rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--text-muted)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.color = 'var(--cyan)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--text-muted)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
            >
              See How It Works
            </a>
          </div>

          {/* Stat strip */}
          <div style={{
            display: 'flex', gap: '3rem', marginTop: '4rem', paddingTop: '2rem',
            borderTop: '1px solid var(--border-subtle)',
            flexWrap: 'wrap', justifyContent: 'center',
            animation: 'fadeUp 0.6s 0.4s ease both', opacity: 0,
          }}>
            {[
              { value: '5+', label: 'PLC Platforms' },
              { value: '10×', label: 'Faster Delivery' },
              { value: '0', label: 'Vendor Lock-in' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700,
                  color: 'var(--cyan)', lineHeight: 1, marginBottom: '4px',
                }}>{stat.value}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'var(--text-secondary)',
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
