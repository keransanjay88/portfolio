import nodemailer from 'nodemailer';

// Simple in-memory rate limiter (per IP)
const rateLimitMap = new Map();
const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // max 3 requests per minute per IP

export async function POST(req) {
    try {
        // Get IP address (works for Vercel/Next.js API routes)
        const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
        const now = Date.now();
        const entry = rateLimitMap.get(ip) || { count: 0, last: now };
        if (now - entry.last > WINDOW_MS) {
            entry.count = 0;
            entry.last = now;
        }
        entry.count++;
        rateLimitMap.set(ip, entry);
        if (entry.count > MAX_REQUESTS) {
            return new Response(JSON.stringify({ success: false, error: 'Too many requests. Please try again later.' }), { status: 429 });
        }

        const { name, email, subject, message } = await req.json();

        // Configure transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Your Gmail address
                pass: process.env.EMAIL_PASS, // App password
            },
        });

        // Email to site owner
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `New Contact Form Submission: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });

        // Confirmation email to user
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Thank you for contacting me!',
            text: `Hi ${name},\n\nThank you for reaching out! I have received your message and will get back to you soon.`,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }
}
