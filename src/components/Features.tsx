import SectionHeader from './SectionHeader';

const features = [
  { title: 'AI-Driven Code Generation', desc: 'Generate production-ready PLC code from plain-language requirements or project specs, in your vendor’s native format.' },
  { title: 'Built-in Git Version Control', desc: 'Every change is tracked. Diff, review, branch, and roll back PLC logic exactly like modern software.' },
  { title: 'Accelerate Development', desc: 'Cut PLC programming time by up to 80% and put resources back into hardware, safety, and resilience.' },
  { title: 'Multi-Platform Support', desc: 'Works with Studio 5000, TIA Portal, CODESYS, Beckhoff and more — import once, export anywhere.' },
  { title: 'Modernize Legacy Projects', desc: 'Import existing logic and modernize it, without losing decades of accumulated automation knowledge.' },
  { title: 'Data Privacy & Security', desc: 'Your data and logic stay yours. Never shared, never used to train models, and deployable on-premises.' },
];

export default function Features() {
  return (
    <section style={{ position: 'relative', zIndex: 1, padding: '8rem 0' }}>
      <div className="container">
        <SectionHeader
          title="Empower Your Projects with"
          accent="Advanced AI"
          subtitle="Everything you need to generate, convert, and ship industrial control code with confidence."
        />
        <div className="grid-3" style={{
          gap: '1.5px',
          background: 'var(--border-subtle)',
          border: '1px solid var(--border-subtle)',
        }}>
          {features.map(f => (
            <div
              key={f.title}
              style={{
                background: 'var(--bg-deep)',
                padding: '2.25rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'background 0.3s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.background = 'var(--bg-surface)';
                const g = e.currentTarget.querySelector('.card-glow') as HTMLElement;
                if (g) g.style.opacity = '1';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.background = 'var(--bg-deep)';
                const g = e.currentTarget.querySelector('.card-glow') as HTMLElement;
                if (g) g.style.opacity = '0';
              }}
            >
              <div className="card-glow" style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
                background: 'var(--gradient-accent)', opacity: 0, transition: 'opacity 0.3s',
              }} />
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.15rem',
                fontWeight: 600,
                marginBottom: '0.75rem',
                color: 'var(--text-primary)',
              }}>{f.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
