export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      overflow: 'hidden',
      zIndex: 1,
    }}>
      {/* Industrial refinery backdrop */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        backgroundImage: 'url(/hero-bg.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        {/* darkening overlay: flat scrim + center spotlight + fade to page bg */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 60% at 50% 45%, rgba(3,7,17,0.78) 0%, rgba(3,7,17,0.62) 50%, rgba(3,7,17,0.5) 80%), linear-gradient(180deg, rgba(3,7,17,0.6) 0%, rgba(3,7,17,0.45) 40%, rgba(3,7,17,0.55) 70%, var(--bg-void) 100%)',
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '880px', margin: '0 auto', paddingTop: '120px', paddingBottom: '120px' }}>

          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            background: 'rgba(0, 200, 255, 0.06)',
            border: '1px solid rgba(0, 200, 255, 0.2)',
            borderRadius: '100px',
            marginBottom: '2rem',
            animation: 'fadeUp 0.6s ease both',
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--cyan)',
              boxShadow: '0 0 8px var(--cyan)',
              animation: 'pulseGlow 2s ease-in-out infinite',
              display: 'inline-block',
            }} />
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--cyan)',
            }}>
              AI for Industrial Automation
            </span>
          </div>

          {/* Main heading */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.6rem, 6.5vw, 5rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
            textShadow: '0 2px 24px rgba(3, 7, 17, 0.75)',
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
            color: '#cdd9ec',
            fontWeight: 400,
            lineHeight: 1.7,
            maxWidth: '660px',
            margin: '0 auto 2.5rem',
            textShadow: '0 1px 12px rgba(3, 7, 17, 0.85)',
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
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            animation: 'fadeUp 0.6s 0.3s ease both',
            opacity: 0,
          }}>
            <a href="#waitlist" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.875rem 2rem',
              background: 'var(--cyan)',
              color: 'var(--bg-void)',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              borderRadius: 'var(--radius-sm)',
              transition: 'all 0.2s',
              boxShadow: '0 0 30px rgba(0, 200, 255, 0.3)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 0 50px rgba(0, 200, 255, 0.5)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 200, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              Join the Waitlist
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#how-it-works" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.875rem 2rem',
              background: 'transparent',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-glow)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--cyan)';
              e.currentTarget.style.color = 'var(--cyan)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border-glow)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            >
              See How It Works
            </a>
          </div>

          {/* Stat strip */}
          <div style={{
            display: 'flex',
            gap: '3rem',
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-subtle)',
            flexWrap: 'wrap',
            justifyContent: 'center',
            animation: 'fadeUp 0.6s 0.4s ease both',
            opacity: 0,
          }}>
            {[
              { value: '5+', label: 'PLC Platforms' },
              { value: '10×', label: 'Faster Delivery' },
              { value: '0', label: 'Vendor Lock-in' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: 'var(--cyan)',
                  lineHeight: 1,
                  marginBottom: '4px',
                  textShadow: '0 1px 14px rgba(3, 7, 17, 0.9)',
                }}>{stat.value}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#9fb2cc',
                  textShadow: '0 1px 10px rgba(3, 7, 17, 0.9)',
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
