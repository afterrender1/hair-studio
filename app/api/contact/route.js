import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, experience, goals, message } = body;

    // ✉️ Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // 💅 Beautiful HTML Email Template
    const htmlContent = `
      <div style="font-family: 'Segoe UI', sans-serif; background: #f4f9ff; padding: 30px;">
        <div style="max-width: 600px; background: #ffffff; margin: 0 auto; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
          <div style="background: linear-gradient(90deg, #38bdf8, #0284c7); color: #ffffff; padding: 20px 30px;">
            <h2 style="margin: 0; font-size: 22px;">💇 New Hair Coaching Inquiry</h2>
          </div>
          <div style="padding: 25px 30px; color: #333;">
            <p style="font-size: 16px; margin-bottom: 20px;">
              You’ve received a new inquiry from <strong>${name}</strong> regarding your hair coaching program.
            </p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; width: 150px;">Name:</td>
                <td>${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600;">Email:</td>
                <td><a href="mailto:${email}" style="color: #0284c7;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600;">Experience:</td>
                <td>${experience}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600;">Goals:</td>
                <td>${goals}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; vertical-align: top;">Message:</td>
                <td style="white-space: pre-wrap;">${message}</td>
              </tr>
            </table>

            <div style="margin-top: 30px; text-align: center;">
              <a href="mailto:${email}" style="display: inline-block; background: #38bdf8; color: white; padding: 10px 25px; border-radius: 8px; text-decoration: none; font-weight: 600;">
                Reply to ${name}
              </a>
            </div>
          </div>
          <div style="background: #f0f9ff; color: #555; padding: 15px 20px; text-align: center; font-size: 13px;">
            © ${new Date().getFullYear()} Diego Hair Studio | Professional Hair Coaching
          </div>
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"Diego Hair Studio" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `💌 New Hair Coaching Inquiry from ${name}`,
      text: `
New Hair Coaching Inquiry

Name: ${name}
Email: ${email}
Experience: ${experience}
Goals: ${goals}
Message: ${message}
      `,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
