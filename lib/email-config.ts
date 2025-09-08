// Email configuration - Change the email address here to update all forms
export const EMAIL_CONFIG = {
  // Main email where all form submissions will be sent
  recipient: 'Info@minarcoins.com',
  
  // Email subject line for form submissions
  subject: 'New Quote Request from Minarco Insurance Website',
  
  // FormSubmit configuration
  formSubmit: {
    // Whether to use CAPTCHA (false for better UX)
    captcha: false,
    
    // Email template format (table, basic, or box)
    template: 'table'
  }
}

// Alternative: You can also change this via environment variable
// Just add FORM_EMAIL=your-email@domain.com to your .env.local file
export const getFormEmail = () => {
  return process.env.NEXT_PUBLIC_FORM_EMAIL || EMAIL_CONFIG.recipient
}
