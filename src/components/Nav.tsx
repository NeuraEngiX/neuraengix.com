import { useState, useEffect } from 'react';

const links = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'FAQ', href: '#faq' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      display: 'flex',
      justifyContent: 'center',
      padding: '1rem',
    }}>
      {/* Floating pill */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '2rem',
        width: '100%',
        maxWidth: '1080px',
        padding: '0.5rem 0.5rem 0.5rem 1.5rem',
        borderRadius: '100px',
        transition: 'background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
        background: scrolled ? 'rgba(7, 13, 26, 0.85)' : 'rgba(13, 21, 37, 0.55)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(0, 200, 255, 0.14)',
        boxShadow: scrolled ? '0 8px 40px rgba(0, 0, 0, 0.4)' : 'none',
      }}>
        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <div style={{ width: '30px', height: '30px', flexShrink: 0 }}>
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
              <polygon points="16,2 30,10 30,22 16,30 2,22 2,10" stroke="#00c8ff" strokeWidth="1.5" fill="none" />
              <circle cx="16" cy="16" r="4" fill="#00c8ff" />
              <line x1="16" y1="2" x2="16" y2="12" stroke="#00c8ff" strokeWidth="1" opacity="0.5" />
              <line x1="16" y1="20" x2="16" y2="30" stroke="#00c8ff" strokeWidth="1" opacity="0.5" />
              <line x1="2" y1="10" x2="12" y2="16" stroke="#00c8ff" strokeWidth="1" opacity="0.5" />
              <line x1="20" y1="16" x2="30" y2="10" stroke="#00c8ff" strokeWidth="1" opacity="0.5" />
              <line x1="2" y1="22" x2="12" y2="16" stroke="#00c8ff" strokeWidth="1" opacity="0.5" />
              <line x1="20" y1="16" x2="30" y2="22" stroke="#00c8ff" strokeWidth="1" opacity="0.5" />
            </svg>
          </div>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '1.15rem',
            letterSpacing: '0.06em',
            color: 'var(--text-primary)',
          }}>
            NEURA<span style={{ color: 'var(--cyan)' }}>ENGIX</span>
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          {links.map(item => (
            <a key={item.label} href={item.href} style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.82rem',
              fontWeight: 500,
              letterSpacing: '0.08em',
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--cyan)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >{item.label}</a>
          ))}
        </div>

        {/* CTA */}
        <a href="#waitlist" style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.8rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          padding: '0.65rem 1.5rem',
          color: 'var(--bg-void)',
          background: 'var(--cyan)',
          borderRadius: '100px',
          transition: 'all 0.2s',
          flexShrink: 0,
          boxShadow: '0 0 20px rgba(0, 200, 255, 0.25)',
        }}
        onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 35px rgba(0, 200, 255, 0.45)'; }}
        onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 200, 255, 0.25)'; }}
        >Book a Demo</a>

        <style>{`
          @media (max-width: 860px) {
            .desktop-nav { display: none !important; }
          }
        `}</style>
      </div>
    </nav>
  );
}
