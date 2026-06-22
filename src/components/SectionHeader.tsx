// Centered section header used across the itanta-style sections.
// `accent` words inside the title get the cyan→purple gradient.
export default function SectionHeader({
  eyebrow,
  title,
  accent,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  subtitle?: string;
}) {
  return (
    <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem' }}>
      {eyebrow && (
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'var(--cyan)',
          marginBottom: '1rem',
        }}>{eyebrow}</div>
      )}
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 700,
        letterSpacing: '-0.02em',
        lineHeight: 1.12,
      }}>
        {title} {accent && <span className="gradient-text">{accent}</span>}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: '1rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
          marginTop: '1.25rem',
        }}>{subtitle}</p>
      )}
    </div>
  );
}
