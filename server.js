const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Create bookings directory if it doesn't exist
const bookingsDir = path.join(__dirname, 'bookings');
if (!fs.existsSync(bookingsDir)) {
    fs.mkdirSync(bookingsDir);
}

// Booking endpoint
app.post('/api/book', async (req, res) => {
    try {
        const { name, email, phone, service, date, time, guests, message } = req.body;
        const bookingId = uuidv4();
        const bookingDate = new Date().toISOString();

        // Create booking object
        const booking = {
            id: bookingId,
            date: bookingDate,
            name,
            email,
            phone,
            service,
            date: date,
            time,
            guests,
            message,
            status: 'pending'
        };

        // Save booking to file
        const bookingFile = path.join(bookingsDir, `${bookingId}.json`);
        fs.writeFileSync(bookingFile, JSON.stringify(booking, null, 2));

        // Send WhatsApp message to customer
        const whatsappNumber = '+255659811638'; // Your WhatsApp number
        const message = encodeURIComponent(`
            Thank you for your booking request!
            
            Booking ID: ${bookingId}
            Service: ${service}
            Date: ${date}
            Time: ${time}
            Guests: ${guests}
            
            We will contact you shortly with payment details.
            
            Regards,
            Zanzibar Experiences Team
        `);

        // Open WhatsApp web
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
        console.log(`WhatsApp message sent to: ${whatsappUrl}`);

        res.json({ 
            success: true, 
            message: 'Booking request received successfully',
            bookingId
        });
    } catch (error) {
        console.error('Error processing booking:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error processing booking: ' + error.message 
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
