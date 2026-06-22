import SectionHeader from './SectionHeader';

const cases = [
  'Generate new control logic',
  'Convert code between vendors',
  'Modernize legacy projects',
  'Version & review every change',
  'Document programs automatically',
  'Validate IEC 61131 compliance',
  'Prototype machines faster',
  'Standardize logic across sites',
  'Onboard engineers quickly',
  'Export L5X & PLCopen XML',
  'Audit changes with Git history',
  '…and a whole lot more',
];

export default function UseCases() {
  return (
    <section id="use-cases" style={{ position: 'relative', zIndex: 1, padding: '8rem 0' }}>
      <div className="container">
        <SectionHeader
          title="By Using NeuraEngiX,"
          accent="You Can"
          subtitle="One platform across the full lifecycle of industrial control code."
        />
        <div className="grid-4" style={{
          gap: '1px',
          background: 'var(--border-subtle)',
          border: '1px solid var(--border-subtle)',
        }}>
          {cases.map((c, i) => (
            <div key={c} style={{
              background: 'var(--bg-deep)',
              padding: '1.5rem 1.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.875rem',
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--cyan)',
                flexShrink: 0,
              }}>{String(i + 1).padStart(2, '0')}</span>
              <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
