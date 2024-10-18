document.addEventListener('DOMContentLoaded', function() {
    // Ambil semua elemen kartu proyek
    const projectCards = document.querySelectorAll('.project-card');
  
    // Iterasi setiap kartu proyek
    projectCards.forEach((card, index) => {
      // Tunda animasi untuk muncul satu per satu
      setTimeout(() => {
        card.classList.add('fade-in'); // Tambahkan kelas fade-in untuk munculkan kartu
      }, index * 400); // Tunda setiap kartu dengan selang waktu 200ms
    });
  });
  