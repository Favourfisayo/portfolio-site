import { sendEmail } from "@/services/resend/sendEmail";
import arcjet, { protectSignup } from "@arcjet/next";
import type { NextApiRequest, NextApiResponse } from "next";
const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    protectSignup({
      email: {
        mode: "LIVE",
        block: ["DISPOSABLE", "INVALID", "NO_MX_RECORDS"],
      },
      bots: {
        mode: "LIVE",
        allow: []
      },
      rateLimit: {
        mode: "LIVE",
        interval: "5m",
        max: 1,
      },
    }),
  ],
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  
  const { name, email, message } = req.body;
    if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  const decision = await aj.protect(req, {
    email,
  });
  if (decision.isDenied()) {
    if (decision.reason.isEmail()) {
      return res.status(400).json({
        message: "Invalid email",
        reason: decision.reason,
      });
    } else if (decision.reason.isRateLimit()) {
      return res.status(429).json({
        message: "Too many requests. Please try again later.",
      })
    }else if (decision.reason.isBot()) {
      return res.status(403).json({
        message: "Bot detected",
      })
    }else {
      return res.status(403).json({
        message: "Forbidden",
      });
    }
  } else {
    try {
    const response = await sendEmail(email, message, name)
    return res.status(200).json({
      success: true,
      message: "Message sent successfully, I'll get back soon :)",
      response,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Failed to send email: ${error}`
    });
  }
  }
}