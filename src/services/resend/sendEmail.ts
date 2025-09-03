import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY || '');

export async function sendEmail(email: string, message: string, name: string) {
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

      return response
}