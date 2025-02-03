// Membaca parameter URL untuk mempersonalisasi ucapan
window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name') || "Adekk";
    
    // Update elemen ucapan
    document.getElementById('birthdayGreeting').textContent = `Selamat Ulang Tahun, ${name}!`;
    document.getElementById('message').textContent = "Semoga hari ini dipenuhi kebahagiaan, cinta, dan kasih sayang. I love you so so so much🤍!";
  
    // Otomatis jalankan confetti saat halaman dimuat
    launchConfetti();
  });
  
  // Fungsi untuk menjalankan efek confetti menggunakan library canvas-confetti
  function launchConfetti() {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    });
  }
  
  // Tombol untuk mengulang confetti
  document.getElementById('playConfetti').addEventListener('click', () => {
    launchConfetti();
  });
  
  // Kontrol background music
  const bgMusic = document.getElementById('bgMusic');
  let musicPlaying = false;
  
  document.getElementById('playMusic').addEventListener('click', () => {
    if (!musicPlaying) {
      bgMusic.play();
      musicPlaying = true;
      document.getElementById('playMusic').textContent = "Hentikan Musik";
    } else {
      bgMusic.pause();
      musicPlaying = false;
      document.getElementById('playMusic').textContent = "Mainkan Musik";
    }
  });
  