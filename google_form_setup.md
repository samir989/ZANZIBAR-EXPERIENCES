# Google Form Setup Guide

## 1. Create the Form
1. Go to forms.google.com
2. Click "Blank" to create a new form
3. Name it "Zanzibar Experiences Booking Form"
4. Add your business logo (optional)

## 2. Form Theme
1. Click the paint palette icon (⚙️)
2. Choose a blue/green theme to match your website
3. Set font to Poppins or Arial
4. Add your business colors:
   - Primary: #0077cc (blue)
   - Secondary: #2ecc71 (green)
   - Accent: #e74c3c (red)

## 3. Add Sections
### Section 1: Basic Information
- Click "+ Add question"
- Add these questions:
  1. Full Name (Short answer)
     - Required: Yes
  2. Email Address (Short answer)
     - Required: Yes
  3. Phone Number (Short answer)
     - Required: Yes
  4. Country (Short answer)
     - Required: No
  5. WhatsApp Number (Short answer)
     - Required: No

### Section 2: Booking Details
- Click "+ Add section"
- Add these questions:
  1. Service Type (Multiple choice)
     - Options: Romantic Beach Dinner, Island & Sandbank Tour, Sunset Photography, Custom Experience
     - Required: Yes
  2. Preferred Date (Date)
     - Required: Yes
     - Set minimum date to today
  3. Preferred Time (Short answer)
     - Required: Yes
     - Help text: Format: HH:MM AM/PM
  4. Number of Guests (Short answer)
     - Required: Yes
     - Help text: Minimum 2 guests required for dinner
  5. Season (Multiple choice)
     - Options: High Season (Dec-Feb, Jul-Aug), Shoulder Season (Mar-May, Sep-Nov), Low Season (Jun)
     - Required: Yes

### Section 3: Location Preferences
- Click "+ Add section"
- Add these questions:
  1. Preferred Location (Multiple choice)
     - Options: Nungwi Beach, Kendwa Beach, Paje Beach, Jambiani Beach, Other
     - Required: Yes
     - If "Other" is selected, add a follow-up question:
       - "Please specify location" (Short answer)
  2. Alternative Location (Multiple choice)
     - Options: Nungwi Beach, Kendwa Beach, Paje Beach, Jambiani Beach, No alternative
     - Required: No

### Section 4: Additional Information
- Click "+ Add section"
- Add these questions:
  1. Special Requests (Paragraph)
     - Required: No
  2. Dietary Preferences (Paragraph)
     - Required: No
  3. Any Allergies (Paragraph)
     - Required: No

### Section 5: Payment Information
- Click "+ Add section"
- Add these questions:
  1. Payment Method (Multiple choice)
     - Options: M-Pesa, Airtel Money, PayPal, Other
     - Required: Yes
  2. Deposit Amount (Short answer)
     - Required: Yes
     - Help text: 30% of total amount
  3. Full Payment Amount (Short answer)
     - Required: Yes
     - Help text: 70% of total amount

### Section 6: Referral Information
- Click "+ Add section"
- Add these questions:
  1. How did you hear about us? (Multiple choice)
     - Options: Instagram, TripAdvisor, Airbnb Experiences, Hotel/Resort, Friend/Referral, Other
     - Required: No

### Section 7: Confirmation
- Click "+ Add section"
- Add this question:
  1. I agree to the terms and conditions (Check box)
     - Required: Yes
     - Help text: By checking this box, you agree to our cancellation policy and terms of service

## 4. Form Settings
1. Click Settings (⚙️) in the top right
2. Responses tab:
   - Collect email addresses: Yes
   - Limit to one response per person: Yes
   - Send confirmation email: Yes
   - Confirmation message: "Thank you for your booking request! We'll be in touch shortly with your booking confirmation."
3. Presentation tab:
   - Allow respondents to edit after submission: No
   - Allow respondents to see summary charts and text: No
   - Allow respondents to include their email address: Yes
4. Quizzes tab:
   - Make this a quiz: No

## 5. Get Embed Code
1. Click "Send" button
2. Click "<>" (Embed) tab
3. Copy the iframe code
4. Paste it into your website's index.html where it says YOUR_GOOGLE_FORM_EMBED_URL

## 6. Set Up Email Notifications
1. Click "Responses" tab
2. Click "Notifications"
3. Set up notifications for new responses
4. Set up automatic email responses with your confirmation template

## 7. Test the Form
1. Click "Send" and test the form
2. Check if all required fields work
3. Verify email notifications
4. Test the embed on your website
