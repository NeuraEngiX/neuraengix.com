import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import { createElement } from 'react';
import { ContactEmail } from '../../emails/ContactEmail';

export const prerender = false;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TO_ADDRESS = 'neuraenginx2026@gmail.com';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = (await request.json()) as { email?: string };
    const senderEmail = body?.email?.trim() ?? '';

    if (!senderEmail || !EMAIL_REGEX.test(senderEmail)) {
      return Response.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    if (!env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return Response.json({ error: 'Service unavailable.' }, { status: 503 });
    }

    const resend = new Resend(env.RESEND_API_KEY);
    const html = await render(createElement(ContactEmail, { senderEmail }));

    const { error } = await resend.emails.send({
      // Replace with verified Resend domain once neuraengix.com is verified
      from: 'NeuraEngiX <onboarding@resend.dev>',
      to: TO_ADDRESS,
      replyTo: senderEmail,
      subject: `New contact from ${senderEmail}`,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error: 'Failed to send email.' }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error('Contact handler error:', err);
    return Response.json({ error: 'Unexpected error.' }, { status: 500 });
  }
};
