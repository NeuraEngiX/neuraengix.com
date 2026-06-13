const services = [
  {
    id: '01',
    title: 'Neural Architecture Design',
    description:
      'Custom neural network architectures engineered for your specific domain — from transformer variants to hybrid symbolic-neural systems that outperform generic models.',
    tags: ['Deep Learning', 'Architecture', 'LLM Fine-tuning'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="8" r="3" stroke="#00c8ff" strokeWidth="1.5" />
        <circle cx="8" cy="24" r="3" stroke="#00c8ff" strokeWidth="1.5" />
        <circle cx="32" cy="24" r="3" stroke="#00c8ff" strokeWidth="1.5" />
        <circle cx="20" cy="34" r="3" stroke="#00c8ff" strokeWidth="1.5" />
        <line x1="20" y1="11" x2="9" y2="21.5" stroke="#00c8ff" strokeWidth="1" opacity="0.5" />
        <line x1="20" y1="11" x2="31" y2="21.5" stroke="#00c8ff" strokeWidth="1" opacity="0.5" />
        <line x1="9" y1="26.5" x2="19" y2="31" stroke="#00c8ff" strokeWidth="1" opacity="0.5" />
        <line x1="31" y1="26.5" x2="21" y2="31" stroke="#00c8ff" strokeWidth="1" opacity="0.5" />
        <line x1="11" y1="24" x2="29" y2="24" stroke="#00c8ff" strokeWidth="1" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: '02',
    title: 'AI Systems Integration',
    description:
      'Seamlessly embed intelligence into existing infrastructure. We design API layers, streaming pipelines, and real-time inference systems that integrate without disruption.',
    tags: ['MLOps', 'API Design', 'Edge Deployment'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="14" width="14" height="12" rx="2" stroke="#00c8ff" strokeWidth="1.5" />
        <rect x="22" y="14" width="14" height="12" rx="2" stroke="#00c8ff" strokeWidth="1.5" />
        <line x1="18" y1="20" x2="22" y2="20" stroke="#00c8ff" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="1.5" fill="#00c8ff" />
        <path d="M8 8 L8 14" stroke="#00c8ff" strokeWidth="1" opacity="0.4" />
        <path d="M20 4 L20 14" stroke="#00c8ff" strokeWidth="1" opacity="0.4" />
        <path d="M32 8 L32 14" stroke="#00c8ff" strokeWidth="1" opacity="0.4" />
        <path d="M8 26 L8 32" stroke="#00c8ff" strokeWidth="1" opacity="0.4" />
        <path d="M32 26 L32 32" stroke="#00c8ff" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: '03',
    title: 'Intelligent Automation',
    description:
      'Agentic workflows and autonomous pipelines that reason, plan, and execute complex multi-step tasks — reducing operational overhead while increasing precision.',
    tags: ['AI Agents', 'Workflow Automation', 'Reasoning Systems'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 4 L36 28 L4 28 Z" stroke="#00c8ff" strokeWidth="1.5" fill="none" />
        <circle cx="20" cy="20" r="4" stroke="#00c8ff" strokeWidth="1.5" fill="none" />
        <line x1="20" y1="4" x2="20" y2="16" stroke="#00c8ff" strokeWidth="1" opacity="0.4" />
        <line x1="20" y1="24" x2="20" y2="28" stroke="#00c8ff" strokeWidth="1" opacity="0.4" />
        <line x1="14" y1="20" x2="16" y2="20" stroke="#00c8ff" strokeWidth="1" opacity="0.4" />
        <line x1="24" y1="20" x2="26" y2="20" stroke="#00c8ff" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: '04',
    title: 'Data & Model Strategy',
    description:
      'From data architecture to model evaluation frameworks — we help organizations build the data flywheels and feedback loops that compound AI performance over time.',
    tags: ['Data Engineering', 'Evaluation', 'Strategy'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <ellipse cx="20" cy="12" rx="14" ry="5" stroke="#00c8ff" strokeWidth="1.5" fill="none" />
        <path d="M6 12 L6 20" stroke="#00c8ff" strokeWidth="1.5" />
        <path d="M34 12 L34 20" stroke="#00c8ff" strokeWidth="1.5" />
        <ellipse cx="20" cy="20" rx="14" ry="5" stroke="#00c8ff" strokeWidth="1.5" fill="none" />
        <path d="M6 20 L6 28" stroke="#00c8ff" strokeWidth="1.5" />
        <path d="M34 20 L34 28" stroke="#00c8ff" strokeWidth="1.5" />
        <ellipse cx="20" cy="28" rx="14" ry="5" stroke="#00c8ff" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" style={{
      position: 'relative',
      zIndex: 1,
      padding: '8rem 0',
    }}>
      <div className="container">
        {/* Section header */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--cyan)',
            marginBottom: '1rem',
          }}>
            // 01 — Services
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            maxWidth: '480px',
            lineHeight: 1.1,
          }}>
            What We Build
          </h2>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5px',
          background: 'var(--border-subtle)',
          border: '1px solid var(--border-subtle)',
        }}>
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, delay }: { service: typeof services[0]; delay: number }) {
  return (
    <div
      style={{
        background: 'var(--bg-deep)',
        padding: '2.5rem',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        transition: 'background 0.3s',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.background = 'var(--bg-surface)';
        const glow = e.currentTarget.querySelector('.card-glow') as HTMLElement;
        if (glow) glow.style.opacity = '1';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.background = 'var(--bg-deep)';
        const glow = e.currentTarget.querySelector('.card-glow') as HTMLElement;
        if (glow) glow.style.opacity = '0';
      }}
    >
      {/* Corner glow on hover */}
      <div className="card-glow" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)',
        opacity: 0,
        transition: 'opacity 0.3s',
      }} />

      {/* ID */}
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.65rem',
        color: 'var(--text-muted)',
        letterSpacing: '0.12em',
        marginBottom: '1.5rem',
      }}>{service.id}</div>

      {/* Icon */}
      <div style={{ marginBottom: '1.5rem' }}>
        {service.icon}
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.2rem',
        fontWeight: 600,
        letterSpacing: '-0.01em',
        marginBottom: '0.875rem',
        color: 'var(--text-primary)',
      }}>{service.title}</h3>

      {/* Description */}
      <p style={{
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.65,
        marginBottom: '1.75rem',
      }}>{service.description}</p>

      {/* Tags */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {service.tags.map(tag => (
          <span key={tag} style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '3px 10px',
            background: 'rgba(0, 200, 255, 0.06)',
            border: '1px solid rgba(0, 200, 255, 0.15)',
            borderRadius: '2px',
            color: 'var(--cyan-dim)',
          }}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
