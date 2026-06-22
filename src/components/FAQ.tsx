import { useState } from 'react';
import SectionHeader from './SectionHeader';

const faqs = [
  {
    q: 'What is NeuraEngiX and what does it do?',
    a: 'NeuraEngiX is an AI platform for industrial automation. It generates, converts, and modernizes PLC code — turning plain-language requirements or existing logic into production-ready, vendor-native programs.',
  },
  {
    q: 'Which PLC platforms are supported?',
    a: 'Rockwell (Studio 5000), Siemens (TIA Portal), CODESYS, Beckhoff (TwinCAT) and more. You can import from one vendor and export to another.',
  },
  {
    q: 'Can it convert code between vendors?',
    a: 'Yes. NeuraEngiX translates control logic across platforms and exports native formats like L5X and PLCopen XML, so you are never locked into a single vendor.',
  },
  {
    q: 'Is the generated code production-ready?',
    a: 'The output is structured, commented, and aligned to IEC 61131 standards. You always review and validate before deployment — NeuraEngiX accelerates the work, it does not replace engineering judgment.',
  },
  {
    q: 'Do you copy or store our vendor code?',
    a: 'No. Your data and logic stay yours — never shared and never used to train models. The platform can be deployed fully on-premises behind your firewall.',
  },
  {
    q: 'Do I need to write any code or have a data team?',
    a: 'No. Describe what you need in plain language. NeuraEngiX handles the syntax, boilerplate, and vendor specifics for you.',
  },
  {
    q: 'Is it available on-premises?',
    a: 'Yes. NeuraEngiX runs in the cloud or fully on-premises, with end-to-end encryption and regular security audits.',
  },
  {
    q: 'How do I get early access?',
    a: 'Join the waitlist below. We are onboarding early teams in batches and will reach out with access details within 24 hours.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ position: 'relative', zIndex: 1, padding: '8rem 0' }}>
      <div className="container">
        <SectionHeader
          title="Frequently Asked"
          accent="Questions"
          subtitle="Common questions about NeuraEngiX and the platform."
        />
        <div style={{
          maxWidth: '820px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1px',
          background: 'var(--border-subtle)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
        }}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ background: 'var(--bg-deep)', position: 'relative' }}>
                {isOpen && (
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
                    background: 'var(--gradient-accent)',
                  }} />
                )}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1.5rem',
                    padding: '1.5rem 2rem',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.05rem',
                    fontWeight: 500,
                  }}
                >
                  <span>{f.q}</span>
                  <svg
                    width="18" height="18" viewBox="0 0 18 18" fill="none"
                    style={{
                      flexShrink: 0,
                      color: 'var(--cyan)',
                      transform: isOpen ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s',
                    }}
                  >
                    <path d="M4 7l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {isOpen && (
                  <p style={{
                    padding: '0 2rem 1.75rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    maxWidth: '680px',
                  }}>{f.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
