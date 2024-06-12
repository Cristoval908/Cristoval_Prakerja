function updateClock() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Januari adalah 0!
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formattedTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    document.getElementById('clock').textContent = formattedTime;
}

// Update clock setiap detik
setInterval(updateClock, 1000);
updateClock(); // Memanggil fungsi segera agar tidak ada delay
