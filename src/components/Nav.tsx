import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      padding: '0 2rem',
      height: '72px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'background 0.4s ease, border-color 0.4s ease',
      background: scrolled
        ? 'rgba(3, 7, 17, 0.88)'
        : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled
        ? '1px solid rgba(0, 200, 255, 0.12)'
        : '1px solid transparent',
    }}>
      {/* Logo */}
      <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '32px',
          height: '32px',
          position: 'relative',
          flexShrink: 0,
        }}>
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
          fontSize: '1.2rem',
          letterSpacing: '0.06em',
          color: 'var(--text-primary)',
        }}>
          NEURA<span style={{ color: 'var(--cyan)' }}>ENGIX</span>
        </span>
      </a>

      {/* Desktop nav */}
      <div style={{
        display: 'flex',
        gap: '2.5rem',
        alignItems: 'center',
      }} className="desktop-nav">
        {['Services', 'About', 'Research', 'Contact'].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.82rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            color: 'var(--text-secondary)',
            textTransform: 'uppercase',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--cyan)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >{item}</a>
        ))}
        <a href="#contact" style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.8rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '0.5rem 1.25rem',
          border: '1px solid var(--cyan)',
          color: 'var(--cyan)',
          borderRadius: 'var(--radius-sm)',
          transition: 'all 0.2s',
          background: 'transparent',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'var(--cyan)';
          e.currentTarget.style.color = 'var(--bg-void)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = 'var(--cyan)';
        }}
        >Get Started</a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
