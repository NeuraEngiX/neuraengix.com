import SectionHeader from './SectionHeader';

const steps = [
  {
    id: '01',
    title: 'Upload or Describe',
    description: 'Upload existing PLC logic or describe what you need in plain language. NeuraEngiX reads your requirements, specs, and constraints.',
  },
  {
    id: '02',
    title: 'AI Code Generation',
    description: 'Our AI generates production-ready, vendor-native control code — structured, commented, and aligned to IEC 61131 standards.',
  },
  {
    id: '03',
    title: 'Export & Integrate',
    description: 'Export to L5X, PLCopen XML, or your vendor’s native format and drop it straight into your project, with full Git history.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ position: 'relative', zIndex: 1, padding: '8rem 0' }}>
      <div className="container">
        <SectionHeader
          title="How NeuraEngiX"
          accent="Works"
          subtitle="From requirement to running program in three steps."
        />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5px',
          background: 'var(--border-subtle)',
          border: '1px solid var(--border-subtle)',
        }}>
          {steps.map(s => (
            <StepCard key={s.id} step={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step }: { step: typeof steps[0] }) {
  return (
    <div
      style={{
        background: 'var(--gradient-surface)',
        padding: '2.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={e => {
        const g = e.currentTarget.querySelector('.card-glow') as HTMLElement;
        if (g) g.style.opacity = '1';
      }}
      onMouseLeave={e => {
        const g = e.currentTarget.querySelector('.card-glow') as HTMLElement;
        if (g) g.style.opacity = '0';
      }}
    >
      <div className="card-glow" style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'var(--gradient-accent)', opacity: 0, transition: 'opacity 0.3s',
      }} />
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.6rem',
        fontWeight: 700,
        lineHeight: 1,
        marginBottom: '1.5rem',
      }}>
        <span className="gradient-text">{step.id}</span>
      </div>
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.2rem',
        fontWeight: 600,
        letterSpacing: '-0.01em',
        marginBottom: '0.875rem',
        color: 'var(--text-primary)',
      }}>{step.title}</h3>
      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{step.description}</p>
    </div>
  );
}
