# Zanzibar Premium Experiences Deployment Guide

## Step 1: GitHub Setup

1. Create a GitHub repository:
   - Go to https://github.com/new
   - Name: zanzibar-experiences
   - Description: Zanzibar Premium Experiences Booking Website
   - Public repository
   - Don't initialize with README

2. Clone the repository:
```bash
git clone https://github.com/samir989/zanzibar-experiences.git
```

## Step 2: Local Setup

1. Copy all website files to the repository
2. Initialize git:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/samir989/zanzibar-experiences.git
git push -u origin main
```

## Step 3: Render Deployment

1. Sign up at https://render.com
2. Create a new Web Service:
   - Name: zanzibar-experiences
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment Variables:
     - PORT: 3000

3. Connect GitHub repository:
   - Select: samir989/zanzibar-experiences
   - Branch: main
   - Deploy

## Step 4: After Deployment

1. Update WhatsApp number in server.js:
```javascript
const whatsappNumber = '+255659811638';
```

2. Configure payment methods:
   - M-Pesa: Add your paybill number
   - Airtel Money: Add your number
   - PayPal: Add your account

3. Test the booking form
4. Monitor bookings in the bookings/ folder

## Contact Information

- WhatsApp: +255659811638
- Email: Lupalasamwely948@gmail.com
- Location: Zanzibar, Tanzania

## Support

For any issues, contact: Lupalasamwely948@gmail.com
