 // utils/sendMail.js
import nodemailer from "nodemailer";

/* ------------------------------------------------ */
/* Create transporter (Render + Gmail SAFE)         */
/* ------------------------------------------------ */
const createTransporter = () => {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.ADMIN_EMAIL_PASSWORD,
    },

    // ⏱️ IMPORTANT: prevents hanging forever
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000,
  });
};

/* ------------------------------------------------ */
/* Send Mail (background safe)                      */
/* ------------------------------------------------ */
export const sendMail = async ({ to, subject, html, text, replyTo }) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: `"Gentle Hearts Home Health Care" <${process.env.ADMIN_EMAIL}>`,
    to,
    subject,
    html,
    text,
    replyTo,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Mail sent:", info.messageId);
    return info;
  } catch (err) {
    console.error("❌ Mail failed:", err.message);
    throw err; // background me handle hoga
  }
};
