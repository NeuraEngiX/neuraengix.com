import SectionHeader from './SectionHeader';

// Pastel-tinted story tiles, itanta-style.
const stories = [
  { title: 'From weeks to hours', metric: '90%', sub: 'less delivery time', tint: 'rgba(0, 200, 255, 0.10)' },
  { title: 'Legacy migration, automated', metric: '1,000+', sub: 'routines converted', tint: 'rgba(123, 92, 255, 0.12)' },
  { title: 'Vendor-agnostic by default', metric: '5+', sub: 'platforms supported', tint: 'rgba(0, 255, 135, 0.10)' },
  { title: 'Compliance built in', metric: 'IEC 61131', sub: 'standard-conformant output', tint: 'rgba(255, 184, 0, 0.10)' },
  { title: 'Zero hand-written boilerplate', metric: '0', sub: 'lines of scaffolding', tint: 'rgba(0, 200, 255, 0.10)' },
  { title: 'Time to first program', metric: '<2h', sub: 'from sign-up to export', tint: 'rgba(123, 92, 255, 0.12)' },
];

export default function SuccessStories() {
  return (
    <section style={{ position: 'relative', zIndex: 1, padding: '8rem 0' }}>
      <div className="container">
        <SectionHeader
          eyebrow="// Outcomes"
          title="Real"
          accent="Success Stories"
          subtitle="What teams ship when PLC code writes itself."
        />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem',
        }}>
          {stories.map(s => (
            <div key={s.title} style={{
              padding: '2rem',
              background: s.tint,
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              minHeight: '180px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                fontWeight: 600,
                lineHeight: 1.3,
                color: 'var(--text-primary)',
              }}>{s.title}</h3>
              <div style={{ marginTop: '1.5rem' }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  fontWeight: 800,
                  lineHeight: 1,
                  color: 'var(--text-primary)',
                }}>{s.metric}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginTop: '0.4rem',
                }}>{s.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
