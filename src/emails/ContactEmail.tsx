interface Props {
  senderEmail: string;
}

export function ContactEmail({ senderEmail }: Props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>New Contact — NeuraEngiX</title>
      </head>
      <body style={{
        backgroundColor: '#030711',
        fontFamily: "'Segoe UI', Helvetica, Arial, sans-serif",
        margin: 0,
        padding: '40px 0',
      }}>
        <table width="100%" cellPadding={0} cellSpacing={0} style={{ maxWidth: '560px', margin: '0 auto' }}>
          <tbody>
            {/* Header */}
            <tr>
              <td style={{
                padding: '32px 40px 24px',
                background: '#0d1525',
                borderBottom: '2px solid #00c8ff',
              }}>
                <table width="100%" cellPadding={0} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td>
                        <span style={{
                          fontFamily: 'Helvetica, Arial, sans-serif',
                          fontWeight: 700,
                          fontSize: '20px',
                          letterSpacing: '0.06em',
                          color: '#e8f0fe',
                        }}>
                          NEURA<span style={{ color: '#00c8ff' }}>ENGIX</span>
                        </span>
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <span style={{
                          fontFamily: 'Courier New, monospace',
                          fontSize: '10px',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: '#00c8ff',
                        }}>
                          INBOUND CONTACT
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            {/* Body */}
            <tr>
              <td style={{
                padding: '32px 40px',
                background: '#07101f',
              }}>
                <p style={{
                  margin: '0 0 8px',
                  fontFamily: 'Courier New, monospace',
                  fontSize: '10px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#4a6080',
                }}>
                  New message received
                </p>
                <h1 style={{
                  margin: '0 0 24px',
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#e8f0fe',
                  lineHeight: 1.2,
                }}>
                  Someone wants to build with you.
                </h1>

                <table width="100%" cellPadding={0} cellSpacing={0} style={{
                  background: '#0d1525',
                  border: '1px solid rgba(0,200,255,0.15)',
                  borderRadius: '6px',
                  marginBottom: '28px',
                }}>
                  <tbody>
                    <tr>
                      <td style={{ padding: '20px 24px' }}>
                        <p style={{
                          margin: '0 0 6px',
                          fontSize: '10px',
                          fontFamily: 'Courier New, monospace',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: '#4a6080',
                        }}>FROM</p>
                        <p style={{
                          margin: 0,
                          fontSize: '16px',
                          color: '#00c8ff',
                          fontWeight: 500,
                        }}>
                          {senderEmail}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <p style={{
                  margin: '0 0 28px',
                  fontSize: '14px',
                  color: '#8da0b8',
                  lineHeight: 1.7,
                }}>
                  A visitor submitted their email through the NeuraEngiX landing page contact form.
                  Reply directly to <strong style={{ color: '#e8f0fe' }}>{senderEmail}</strong> to start the conversation.
                </p>

                {/* CTA button */}
                <table cellPadding={0} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td style={{
                        background: '#00c8ff',
                        borderRadius: '3px',
                      }}>
                        <a href={`mailto:${senderEmail}`} style={{
                          display: 'inline-block',
                          padding: '12px 28px',
                          fontFamily: 'Helvetica, Arial, sans-serif',
                          fontWeight: 700,
                          fontSize: '12px',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: '#030711',
                          textDecoration: 'none',
                        }}>
                          Reply Now
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            {/* Footer */}
            <tr>
              <td style={{
                padding: '20px 40px',
                background: '#030711',
                borderTop: '1px solid rgba(0,200,255,0.08)',
              }}>
                <p style={{
                  margin: 0,
                  fontFamily: 'Courier New, monospace',
                  fontSize: '10px',
                  color: '#4a6080',
                  letterSpacing: '0.06em',
                }}>
                  © 2026 NeuraEngiX · neuraengix.com · This email was triggered by the contact form.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}
