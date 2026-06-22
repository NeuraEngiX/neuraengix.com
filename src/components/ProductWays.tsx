import SectionHeader from './SectionHeader';

const tiles = [
  { title: 'Deploy anywhere', desc: 'Run in the cloud or fully on-premises behind your firewall.' },
  { title: 'Every major vendor', desc: 'Rockwell, Siemens, Beckhoff, CODESYS and more — one interface.' },
  { title: 'Convert & modernize', desc: 'Translate legacy logic into modern, vendor-native formats.' },
  { title: 'Secure & compliant', desc: 'Encrypted end-to-end and built to IEC 61131 standards.' },
];

export default function ProductWays() {
  return (
    <section id="features" style={{ position: 'relative', zIndex: 1, padding: '8rem 0' }}>
      <div className="container">
        <SectionHeader
          title="Engineering Intelligence,"
          accent="Your Way"
          subtitle="Whether you want to describe logic in plain language or work hands-on in a full platform — NeuraEngiX meets you where you are."
        />

        {/* Two product cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginBottom: '1.5rem',
        }}>
          <ProductCard
            label="Prompt to Code"
            desc="Describe your control logic in plain language and get vendor-ready PLC code back in seconds. No syntax wrangling, no boilerplate."
            cta="Request Access"
          />
          <ProductCard
            label="Core Platform"
            desc="A full workspace to import, convert, version, and export PLC projects across vendors — with Git history and review built in."
            cta="Join the Waitlist"
          />
        </div>

        {/* Feature tiles */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5px',
          background: 'var(--border-subtle)',
          border: '1px solid var(--border-subtle)',
        }}>
          {tiles.map(t => (
            <div key={t.title} style={{ background: 'var(--bg-deep)', padding: '1.75rem' }}>
              <h4 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                fontWeight: 600,
                marginBottom: '0.5rem',
                color: 'var(--text-primary)',
              }}>{t.title}</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ label, desc, cta }: { label: string; desc: string; cta: string }) {
  return (
    <div style={{
      position: 'relative',
      padding: '2.5rem',
      background: 'var(--gradient-surface)',
      border: '1px solid var(--border-glow)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'var(--gradient-accent)',
      }} />
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.5rem',
        fontWeight: 700,
        marginBottom: '0.875rem',
      }}>
        <span className="gradient-text">{label}</span>
      </h3>
      <p style={{
        fontSize: '0.95rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.7,
        marginBottom: '2rem',
      }}>{desc}</p>
      <a href="#waitlist" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '0.7rem 1.5rem',
        background: 'var(--cyan)',
        color: 'var(--bg-void)',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: '0.78rem',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        borderRadius: 'var(--radius-sm)',
        transition: 'all 0.2s',
        boxShadow: '0 0 20px rgba(0, 200, 255, 0.25)',
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 200, 255, 0.45)'; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 200, 255, 0.25)'; }}
      >{cta}</a>
    </div>
  );
}
