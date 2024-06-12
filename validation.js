document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message');

    // Regex untuk email sederhana
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Regex untuk nomor telepon minimal 12 angka
    const phonePattern = /^\d{12,}$/;

    if (!emailPattern.test(email)) {
        message.textContent = 'Format email tidak valid.';
        message.style.color = 'red';
    } else if (!phonePattern.test(phone)) {
        message.textContent = 'Nomor telepon harus minimal 12 angka.';
        message.style.color = 'red';
    } else {
        message.textContent = 'Berhasil Dikirim!';
        message.style.color = 'green';
    }
});
