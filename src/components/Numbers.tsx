import SectionHeader from './SectionHeader';

const stats = [
  { value: '5+', label: 'Vendor platforms' },
  { value: '10×', label: 'Faster delivery' },
  { value: '<2h', label: 'To first program' },
  { value: '0', label: 'Lines of boilerplate' },
  { value: '24/7', label: 'Cloud or on-prem' },
  { value: '100%', label: 'Code ownership' },
  { value: '3', label: 'Export formats' },
  { value: '∞', label: 'Projects' },
];

export default function Numbers() {
  return (
    <section style={{ position: 'relative', zIndex: 1, padding: '8rem 0' }}>
      <div className="container">
        <SectionHeader title="NeuraEngiX in" accent="Numbers" />
        <div className="grid-4" style={{
          gap: '1px',
          background: 'var(--border-subtle)',
          border: '1px solid var(--border-subtle)',
        }}>
          {stats.map(s => (
            <div key={s.label} style={{
              background: 'var(--bg-deep)',
              padding: '2.5rem 1.5rem',
              textAlign: 'center',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3vw, 2.6rem)',
                fontWeight: 800,
                lineHeight: 1,
                marginBottom: '0.6rem',
              }}>
                <span className="gradient-text">{s.value}</span>
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
