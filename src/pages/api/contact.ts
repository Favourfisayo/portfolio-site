import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next';

const resend = new Resend(process.env.RESEND_API_KEY || '');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  try {
    const response = await resend.emails.send({
      from: 'Fisayo <onboarding@resend.dev>', 
      to: ['favourfisayo5@gmail.com'],
      subject: `New message from ${name}`,
      replyTo: email,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      response,
    });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({
      error: 'Failed to send email',
    });
  }
}
