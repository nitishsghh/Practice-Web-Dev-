function reserveRoom(roomType) {
    // You can implement room reservation logic here
    alert(`You have reserved a ${roomType}.`);
}

function confirmReservation() {
    const checkInDate = document.getElementById('check-in-date').value;
    const checkOutDate = document.getElementById('check-out-date').value;
    
    if (checkInDate && checkOutDate) {
        const message = `Reservation confirmed. Check-in: ${checkInDate}, Check-out: ${checkOutDate}`;
        document.getElementById('confirmation-message').textContent = message;
    } else {
        alert('Please select check-in and check-out dates.');
    }
}
