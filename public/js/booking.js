// Booking form submission handler
const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(bookingForm);
        const bookingData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            service: formData.get('service'),
            date: formData.get('date'),
            time: formData.get('time'),
            guests: formData.get('guests'),
            message: formData.get('message')
        };

        // Show loading state
        const submitBtn = document.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        submitBtn.disabled = true;

        try {
            // Send booking request to server
            const response = await fetch('/api/book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingData)
            });

            const data = await response.json();

            if (response.ok) {
                // Show success message
                alert('Booking request submitted successfully! We will contact you shortly with payment details.');
                
                // Send WhatsApp message to customer
                await sendWhatsAppMessage(bookingData);
                
                // Clear form
                bookingForm.reset();
            } else {
                throw new Error(data.message || 'Booking failed');
            }
        } catch (error) {
            alert('Error submitting booking: ' + error.message);
        } finally {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Function to send WhatsApp message
async function sendWhatsAppMessage(bookingData) {
    const whatsappNumber = 'YOUR_WHATSAPP_NUMBER'; // Replace with your WhatsApp number
    const message = encodeURIComponent(`
        Thank you for your booking request!
        
        Service: ${bookingData.service}
        Date: ${bookingData.date}
        Time: ${bookingData.time}
        Guests: ${bookingData.guests}
        
        We will contact you shortly with payment details.
        
        Regards,
        Zanzibar Experiences Team
    `);

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
}

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
