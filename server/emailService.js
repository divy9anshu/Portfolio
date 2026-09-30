import nodemailer from 'nodemailer';

/**
 * Creates and returns a Nodemailer transporter instance using environment variables.
 */
function createTransporter() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    return null;
  }

  // If custom SMTP host is specified, use custom SMTP configuration
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465', 10),
      secure: process.env.SMTP_SECURE === 'true' || process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER || user,
        pass: process.env.SMTP_PASS || pass
      }
    });
  }

  // Default to Gmail service
  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: user,
      pass: pass
    }
  });
}

/**
 * Sends inquiry email directly to Divyanshu's inbox.
 * 
 * @param {Object} inquiry - The contact inquiry payload
 * @param {string} inquiry.name - Sender's full name
 * @param {string} inquiry.email - Sender's email address
 * @param {string} inquiry.phone - Sender's phone number (optional)
 * @param {string} inquiry.subject - Subject or inquiry category
 * @param {string} inquiry.message - Message content
 */
export async function sendContactEmail({ name, email, phone, subject, message }) {
  const transporter = createTransporter();
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || process.env.EMAIL_USER || 'divy9anshu@gmail.com';
  const senderUser = process.env.EMAIL_USER;

  if (!transporter || !senderUser) {
    console.warn('\n⚠️ [EMAIL SERVICE NOTICE]');
    console.warn('EMAIL_USER and/or EMAIL_PASS are not configured in your .env file.');
    console.warn('Message was saved to local database and admin inbox.');
    console.warn('To receive emails directly in your inbox, set EMAIL_USER and EMAIL_PASS (Gmail App Password) in .env.\n');
    return {
      sent: false,
      reason: 'EMAIL_CREDENTIALS_MISSING',
      message: 'Email credentials not set. Message saved to database.'
    };
  }

  const timestamp = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'medium',
    timeZone: 'Asia/Kolkata'
  });

  const mailSubject = `📬 [Portfolio Inquiry] ${subject || 'New Message'} - from ${name}`;

  const plainText = `
New Inquiry Received from Portfolio Contact Form
------------------------------------------------
From: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Subject: ${subject || 'General Inquiry'}
Date: ${timestamp} IST

Message:
${message}

------------------------------------------------
Reply directly to this email to contact ${name} at ${email}.
`;

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Portfolio Inquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f7f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1b392c;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f4f7f6; padding: 30px 10px;">
    <tr>
      <td align="center">
        <!-- Main Card -->
        <table role="presentation" width="100%" max-width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 18px; overflow: hidden; box-shadow: 0 4px 20px rgba(27, 57, 44, 0.08); border: 1px solid #e1e8e5;" cellspacing="0" cellpadding="0" border="0">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #1b392c; padding: 32px 30px; text-align: left;">
              <span style="display: inline-block; background-color: rgba(174, 196, 196, 0.25); color: #aec4c4; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; padding: 4px 12px; border-radius: 999px; margin-bottom: 12px;">
                Portfolio Contact Form
              </span>
              <h1 style="margin: 0; color: #fffdf0; font-size: 24px; font-weight: 600; line-height: 1.3;">
                New Message Received
              </h1>
              <p style="margin: 6px 0 0 0; color: #aec4c4; font-size: 14px;">
                You received a new inquiry on your portfolio website.
              </p>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 30px;">
              
              <!-- Sender Details Table -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f8faf9; border: 1px solid #e7eee9; border-radius: 12px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #e7eee9; width: 30%; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #5f756b;">
                    Sender Name
                  </td>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #e7eee9; font-size: 15px; font-weight: 600; color: #1b392c;">
                    ${name}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #e7eee9; width: 30%; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #5f756b;">
                    Email
                  </td>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #e7eee9; font-size: 15px; color: #1b392c;">
                    <a href="mailto:${email}" style="color: #1b392c; font-weight: 600; text-decoration: underline;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #e7eee9; width: 30%; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #5f756b;">
                    Phone
                  </td>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #e7eee9; font-size: 14px; color: #1b392c;">
                    ${phone ? `<a href="tel:${phone}" style="color: #1b392c; text-decoration: none; font-weight: 500;">${phone}</a>` : '<span style="color: #8fa097; font-style: italic;">Not provided</span>'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #e7eee9; width: 30%; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #5f756b;">
                    Subject
                  </td>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #e7eee9; font-size: 14px; font-weight: 600; color: #1b392c;">
                    <span style="background-color: #f2edd1; color: #1b392c; padding: 4px 10px; border-radius: 6px; font-size: 13px;">
                      ${subject || 'General Inquiry'}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 20px; width: 30%; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #5f756b;">
                    Received
                  </td>
                  <td style="padding: 16px 20px; font-size: 13px; color: #5f756b;">
                    ${timestamp} IST
                  </td>
                </tr>
              </table>

              <!-- Message Section -->
              <div style="margin-bottom: 28px;">
                <h2 style="font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #5f756b; margin: 0 0 10px 0;">
                  Message Content
                </h2>
                <div style="background-color: #fffdf0; border-left: 4px solid #1b392c; border-radius: 4px; padding: 18px 20px; font-size: 15px; line-height: 1.6; color: #1b392c; white-space: pre-wrap;">${message}</div>
              </div>

              <!-- Action Button -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center" style="padding: 10px 0 20px 0;">
                    <a href="mailto:${email}?subject=${encodeURIComponent(`Re: ${subject || 'Portfolio Inquiry'}`)}" style="display: inline-block; background-color: #1b392c; color: #fffdf0; text-decoration: none; font-size: 14px; font-weight: 600; padding: 14px 28px; border-radius: 999px; box-shadow: 0 4px 12px rgba(27, 57, 44, 0.2);">
                      ✉️ Reply Directly to ${name}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8faf9; padding: 20px 30px; border-top: 1px solid #e7eee9; text-align: center; font-size: 12px; color: #788c83;">
              This notification was generated automatically by your portfolio website (<a href="https://github.com/divy9anshu/Portfolio" style="color: #1b392c; text-decoration: underline;">Divyanshu Kumar Portfolio</a>).
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

  try {
    const mailOptions = {
      from: `"Divyanshu Portfolio" <${senderUser}>`,
      to: receiverEmail,
      replyTo: `${name} <${email}>`,
      subject: mailSubject,
      text: plainText,
      html: htmlContent
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ [EMAIL SENT SUCCESSFULLY] Message ID: ${info.messageId} to ${receiverEmail}`);

    // Optionally send automated polite acknowledgment to sender
    if (process.env.SEND_AUTO_REPLY === 'true') {
      try {
        await sendAutoReplyEmail({ name, email, subject });
      } catch (autoErr) {
        console.warn('⚠️ Auto-reply notice:', autoErr.message);
      }
    }

    return {
      sent: true,
      messageId: info.messageId
    };
  } catch (error) {
    console.error('❌ [EMAIL SENDING ERROR]:', error.message);
    return {
      sent: false,
      error: error.message
    };
  }
}

/**
 * Sends an automated acknowledgment email to the sender.
 */
export async function sendAutoReplyEmail({ name, email, subject }) {
  const transporter = createTransporter();
  const senderUser = process.env.EMAIL_USER;

  if (!transporter || !senderUser) return;

  const mailOptions = {
    from: `"Divyanshu Kumar" <${senderUser}>`,
    to: email,
    subject: `Thank you for reaching out! — Divyanshu Kumar`,
    text: `Hi ${name},\n\nThank you for reaching out via my portfolio regarding "${subject || 'your project'}".\n\nI have received your message and will review it and get back to you shortly.\n\nBest regards,\nDivyanshu Kumar\nFull Stack Web Developer\nPhone: +91-9334805955\nEmail: divy9anshu@gmail.com\nPortfolio: https://github.com/divy9anshu`,
    html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1b392c; max-width: 540px; margin: 0 auto; padding: 24px; background-color: #ffffff; border: 1px solid #e1e8e5; border-radius: 16px;">
  <h2 style="color: #1b392c; margin-top: 0;">Hi ${name},</h2>
  <p style="font-size: 15px; line-height: 1.6; color: #334e42;">
    Thank you for reaching out through my portfolio website! I have received your message regarding <strong>${subject || 'your inquiry'}</strong>.
  </p>
  <p style="font-size: 15px; line-height: 1.6; color: #334e42;">
    I will review your message and reply as soon as possible (usually within a few hours).
  </p>
  <hr style="border: none; border-top: 1px solid #e7eee9; margin: 24px 0;" />
  <p style="margin: 0; font-size: 14px; font-weight: 600; color: #1b392c;">Divyanshu Kumar</p>
  <p style="margin: 2px 0 0 0; font-size: 13px; color: #6b8076;">Full Stack Developer (MERN)</p>
  <p style="margin: 2px 0 0 0; font-size: 13px; color: #6b8076;">📞 +91-9334805955 | ✉️ <a href="mailto:divy9anshu@gmail.com" style="color: #1b392c;">divy9anshu@gmail.com</a></p>
</div>
`
  };

  await transporter.sendMail(mailOptions);
  console.log(`✉️ [AUTO-REPLY SENT] to ${email}`);
}
