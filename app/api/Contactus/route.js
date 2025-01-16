// /pages/api/Contact.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { firstName, lastName, email, mobileNumber, message } = await req.json();

    if (!firstName || !mobileNumber) {

      return NextResponse.json({ message: 'Required fields are missing' }, { status: 400 });
    }

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.email, // Your Gmail address
        pass: process.env.pass,  // Your app-specific password from Google
      },
    });

    let mailOptions = {
      from: email, // The user's email address
      to: process.env.Client_Email, // Your email address to receive the contact details
      subject: `Service Inquiry:`, // Use the service required as the subject
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Mobile Number: ${mobileNumber}
        Message: ${message || 'No message provided'}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <div style="text-align: center; background-color: black; padding: 20px;">
            <img src="https://res.cloudinary.com/ddysmgao7/image/upload/v1726505913/Logo_jjjqld.png" alt="Logo" style="max-width: 150px; height: auto;" />
          </div>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
          <p><strong>Message:</strong> ${message || 'No message provided'}</p>
          <div style="margin-top: 20px; padding: 10px; border-top: 2px solid #D33313;">
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
  }
}
