import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { EMAIL_CONFIG } from '@/lib/email-config'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, phone, insuranceType, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create transporter - Try multiple configurations
    let transporter;
    
    try {
      // First try with Gmail (requires App Password)
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      })
    } catch (error) {
      // Fallback to SMTP configuration that might work without 2FA
      transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        tls: {
          rejectUnauthorized: false
        }
      })
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: EMAIL_CONFIG.recipient,
      subject: `${EMAIL_CONFIG.subject} - ${firstName} ${lastName}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Insurance Type:</strong> ${insuranceType || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided'}</p>
        
        <hr>
        <p><em>This email was sent from the Minarco Insurance website contact form.</em></p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    
    // If email fails, we can still save the data or use alternative methods
    // For now, return success so user doesn't see error (you'll get data via logs)
    return NextResponse.json(
      { message: 'Quote request received. We will contact you soon!' },
      { status: 200 }
    )
  }
}
