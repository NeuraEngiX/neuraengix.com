import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const nodes: Array<{ x: number; y: number; vx: number; vy: number; r: number }> = [];
    const count = 60;

    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1,
      });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0, 200, 255, ${0.18 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 200, 255, 0.5)';
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      zIndex: 1,
    }}>
      {/* Neural network canvas background */}
      <canvas ref={canvasRef} style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.6,
      }} />

      {/* Radial spotlight */}
      <div style={{
        position: 'absolute',
        bottom: -200,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80vw',
        height: '60vh',
        background: 'radial-gradient(ellipse, rgba(0, 80, 160, 0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '780px', paddingTop: '120px', paddingBottom: '120px' }}>

          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            background: 'rgba(0, 200, 255, 0.06)',
            border: '1px solid rgba(0, 200, 255, 0.2)',
            borderRadius: '100px',
            marginBottom: '2rem',
            animation: 'fadeUp 0.6s ease both',
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--cyan)',
              boxShadow: '0 0 8px var(--cyan)',
              animation: 'pulseGlow 2s ease-in-out infinite',
              display: 'inline-block',
            }} />
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--cyan)',
            }}>
              AI Engineering — Next Generation
            </span>
          </div>

          {/* Main heading */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
            animation: 'fadeUp 0.6s 0.1s ease both',
            opacity: 0,
          }}>
            Engineering
            <br />
            <span style={{
              color: 'var(--cyan)',
              textShadow: '0 0 60px rgba(0, 200, 255, 0.3)',
            }}>Intelligence</span>
            <br />
            Into Systems
          </h1>

          {/* Subtext */}
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'var(--text-secondary)',
            fontWeight: 300,
            lineHeight: 1.7,
            maxWidth: '560px',
            marginBottom: '2.5rem',
            animation: 'fadeUp 0.6s 0.2s ease both',
            opacity: 0,
          }}>
            NeuraEngiX builds AI-powered engineering systems that think, adapt, and scale.
            From neural architecture design to full-stack intelligent automation — we turn
            complex problems into competitive advantage.
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            animation: 'fadeUp 0.6s 0.3s ease both',
            opacity: 0,
          }}>
            <a href="#contact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.875rem 2rem',
              background: 'var(--cyan)',
              color: 'var(--bg-void)',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              borderRadius: 'var(--radius-sm)',
              transition: 'all 0.2s',
              boxShadow: '0 0 30px rgba(0, 200, 255, 0.3)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 0 50px rgba(0, 200, 255, 0.5)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 200, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              Start a Project
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#services" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.875rem 2rem',
              background: 'transparent',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-glow)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--cyan)';
              e.currentTarget.style.color = 'var(--cyan)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border-glow)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            >
              Explore Services
            </a>
          </div>

          {/* Stat strip */}
          <div style={{
            display: 'flex',
            gap: '3rem',
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-subtle)',
            flexWrap: 'wrap',
            animation: 'fadeUp 0.6s 0.4s ease both',
            opacity: 0,
          }}>
            {[
              { value: '98%', label: 'Model Accuracy' },
              { value: '10×', label: 'Faster Iteration' },
              { value: '50+', label: 'AI Systems Built' },
            ].map(stat => (
              <div key={stat.value}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: 'var(--cyan)',
                  lineHeight: 1,
                  marginBottom: '4px',
                }}>{stat.value}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
