import type { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '@/services/resend/sendEmail';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  try {
    const response = await sendEmail(email, message, name)
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
