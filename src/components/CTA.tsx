import { useState, useRef } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function CTA() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = inputRef.current?.value.trim() ?? '';
    if (!email) return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { success?: boolean; error?: string };

      if (res.ok && data.success) {
        setStatus('success');
        if (inputRef.current) inputRef.current.value = '';
      } else {
        setStatus('error');
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  const isLoading = status === 'loading';

  return (
    <section id="contact" style={{
      position: 'relative',
      zIndex: 1,
      padding: '8rem 0',
    }}>
      <div className="container">
        <div style={{
          position: 'relative',
          padding: 'clamp(3rem, 6vw, 5rem)',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          overflow: 'hidden',
        }}>
          {/* Background decoration */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-10%',
            width: '60%',
            height: '200%',
            background: 'radial-gradient(ellipse, rgba(0, 200, 255, 0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Corner marks */}
          {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map(corner => {
            const isRight = corner.includes('right');
            const isBottom = corner.includes('bottom');
            return (
              <div key={corner} style={{
                position: 'absolute',
                [isBottom ? 'bottom' : 'top']: 0,
                [isRight ? 'right' : 'left']: 0,
                width: '20px',
                height: '20px',
                borderTop: !isBottom ? '2px solid var(--cyan)' : 'none',
                borderBottom: isBottom ? '2px solid var(--cyan)' : 'none',
                borderLeft: !isRight ? '2px solid var(--cyan)' : 'none',
                borderRight: isRight ? '2px solid var(--cyan)' : 'none',
                opacity: 0.5,
              }} />
            );
          })}

          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--cyan)',
              marginBottom: '1.5rem',
            }}>
              // 03 — Let's Build
            </div>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '1.25rem',
            }}>
              Ready to Engineer
              <br />
              <span style={{ color: 'var(--cyan)' }}>Your Intelligence Layer?</span>
            </h2>

            <p style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
            }}>
              Whether you're starting from scratch or scaling an existing AI system,
              we'll meet you where you are. Let's scope your project together.
            </p>

            {status === 'success' ? (
              <div style={{
                padding: '1.5rem 2rem',
                background: 'rgba(0, 255, 135, 0.06)',
                border: '1px solid rgba(0, 255, 135, 0.25)',
                borderRadius: 'var(--radius-md)',
                maxWidth: '480px',
                margin: '0 auto',
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--green)',
                  marginBottom: '0.5rem',
                }}>
                  ✓ Message received
                </div>
                <p style={{
                  margin: 0,
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                }}>
                  We'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  gap: '0',
                  maxWidth: '480px',
                  margin: '0 auto',
                  flexWrap: 'wrap',
                }}
              >
                <input
                  ref={inputRef}
                  type="email"
                  required
                  placeholder="your@email.com"
                  disabled={isLoading}
                  style={{
                    flex: '1 1 200px',
                    padding: '0.875rem 1.25rem',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border-glow)',
                    borderRight: 'none',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    borderRadius: 'var(--radius-sm) 0 0 var(--radius-sm)',
                    opacity: isLoading ? 0.6 : 1,
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = 'var(--cyan)'; }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'var(--border-glow)'; }}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  style={{
                    padding: '0.875rem 1.75rem',
                    background: isLoading ? 'rgba(0,200,255,0.5)' : 'var(--cyan)',
                    color: 'var(--bg-void)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    border: 'none',
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                    transition: 'all 0.2s',
                    boxShadow: '0 0 20px rgba(0, 200, 255, 0.25)',
                    flexShrink: 0,
                    minWidth: '140px',
                  }}
                  onMouseEnter={e => { if (!isLoading) e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 200, 255, 0.4)'; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 200, 255, 0.25)'; }}
                >
                  {isLoading ? 'Sending…' : 'Get in Touch'}
                </button>
              </form>
            )}

            {status === 'error' && (
              <p style={{
                marginTop: '0.75rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: '#ff6b6b',
                letterSpacing: '0.06em',
              }}>
                {errorMsg}
              </p>
            )}

            {status !== 'success' && (
              <p style={{
                marginTop: '1rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.06em',
              }}>
                No spam. We respond within 24 hours.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
