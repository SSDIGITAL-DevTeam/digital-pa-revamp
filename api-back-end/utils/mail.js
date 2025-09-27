// utils/mailer.js
// import nodemailer from 'nodemailer'
import { transporter } from './sendMail.js'

export const sendResetEmail = async (to, link) => {
  const mailOptions = {
    from: `"${process.env.USER_EMAIL}" <${process.env.USER_EMAIL}>`,
    to,
    subject: 'Reset Your Password',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 8px; background-color: #f9f9f9;">
        <h2 style="color: #333;">Reset Your Password</h2>
        <p>Hello,</p>
        <p>We received a request to reset your account password. Click the button below to proceed:</p>
        <a href="${link}" style="display: inline-block; padding: 12px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px; margin: 20px 0;">Reset Password</a>
        <p>If the button above doesn’t work, copy and paste the following link into your browser:</p>
        <p><a href="${link}">${link}</a></p>
        <p><strong>Note:</strong> This link will expire in 15 minutes for your security.</p>
        <p>If you did not request a password reset, please ignore this email.</p>
        <br>
        <p>Best regards,</p>
        <p><strong>Digital PA Singapore</strong></p>
      </div>
    `,
  }

  await transporter.sendMail(mailOptions)
}
