document.querySelector('button[type="submit"]').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default form submission

    const data = {
        name: document.querySelector('input[placeholder="Your Name"]').value,
        email: document.querySelector('input[placeholder="Your Email"]').value,
        mobile: document.querySelector('input[placeholder="Your Mobile"]').value,
        service: document.querySelector('select').value,
        date: document.querySelector('#date input').value,
        time: document.querySelector('#time input').value,
        message: document.querySelector('textarea').value,
    };

    fetch('https://script.google.com/macros/s/AKfycbwv8X-vT4lKjKnjuOyNnfVJd1SjNfFVlnKmXy-ZC_lSIL6H-x3bFHjx4v02O7er5xOI/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        if (result.status === 'Success') {
            alert('Appointment booked successfully!');
            // Reset the form fields if needed
            document.querySelector('form').reset();
        } else {
            alert('Failed to book appointment. Please try again.');
        }
    })
    .catch(error => console.error('Error:', error));
});
