// utils/mailer.js
import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD,
    },
})

export const sendLeadEmail = async (payload) => {
    try {
        const {
            name,
            email,
            phone,
            business,
            companyName,
            companyWebsite,
            from,
            message = '',
        } = payload

        const mailOptions = {
            from: `"${process.env.USER_EMAIL}" <${process.env.USER_EMAIL}>`,
            to: process.env.TO_EMAIL || undefined,
            cc: process.env.CC_EMAIL || undefined,
            subject: 'New Lead Notification',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 8px; background-color: #f9f9f9;">
          <h2 style="color: #333;">New Lead Notification</h2>
          <p>Hi Team,</p>
          <p>A new lead has just been submitted. Please review the details below:</p>
          <h3 style="color: #555;">Lead Summary:</h3>
          <ul>
            <li><strong>Name:</strong> ${name || '-'}</li>
            <li><strong>Email:</strong> ${email || '-'}</li>
            <li><strong>Phone:</strong> ${phone || '-'}</li>
            <li><strong>Business Industry:</strong> ${business || '-'}</li>
            <li><strong>Company Name:</strong> ${companyName || '-'}</li>
            <li><strong>Company Website:</strong> ${companyWebsite || '-'}</li>
            <li><strong>Message:</strong> ${message || '-'}</li>
            <li><strong>Source:</strong> ${from || '-'}</li>
          </ul>
          <br>
          <p>Regards,</p>
          <p><strong>Marketing Team</strong></p>
        </div>`,
        }
        await transporter.sendMail(mailOptions)
    } catch (error) {
        console.log('Send Email error: ', error)
    }
}
