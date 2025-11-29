# SendGrid Email Setup Instructions

## Setup Steps:

### 1. Create SendGrid Account
- Go to https://sendgrid.com/
- Sign up for a free account (100 emails/day free tier)

### 2. Get API Key
- Login to SendGrid dashboard
- Go to Settings → API Keys
- Click "Create API Key"
- Give it a name (e.g., "Portfolio Contact Form")
- Select "Full Access" or "Restricted Access" with Mail Send permissions
- Copy the API key (you'll only see it once!)

### 3. Verify Sender Email
- Go to Settings → Sender Authentication
- Click "Verify a Single Sender"
- Enter your email: isuru2002@gmail.com
- Check your email and click the verification link

### 4. Update Environment Variables
Edit `.env.local` file with your actual SendGrid API key:

```bash
SENDGRID_API_KEY=your_actual_api_key_here
SENDGRID_FROM_EMAIL=isuru2002@gmail.com
SENDGRID_TO_EMAIL=isuru2002@gmail.com
```

### 5. Test the Form
- Restart your development server: `bun run dev`
- Go to http://localhost:3000/#contact
- Fill out the form and send a test message
- Check your email (isuru2002@gmail.com) for the message

## Features:
✅ SendGrid email delivery
✅ Beautiful HTML email template
✅ Success/error feedback messages
✅ Form validation
✅ Loading states
✅ Fallback to direct email if sending fails

## Troubleshooting:
- If emails don't send, check SendGrid dashboard → Activity
- Verify your sender email is verified in SendGrid
- Check console for error messages
- Make sure API key has Mail Send permissions
