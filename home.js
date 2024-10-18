document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".typing", {
    strings: ["Gunadarma student", "information Systems", "web developer"], // Array of strings to type
    typeSpeed: 100, // Typing speed in milliseconds
    backSpeed: 50, // Backspacing speed in milliseconds
    loop: true, // Loop the animation infinitely
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Select navbar links
  const navLinks = document.querySelectorAll("nav ul li a");

  // Function to highlight active link based on current URL
  function highlightActiveLink() {
    const path = window.location.pathname;
    const currentPage = path.split("/").pop(); // Mengambil bagian terakhir dari URL (nama halaman)

    // Loop through each navbar link
    navLinks.forEach((link) => {
      const linkHref = link.getAttribute("href");
      const linkPage = linkHref.split("/").pop(); // Mengambil bagian terakhir dari href link

      // Memeriksa apakah link sesuai dengan halaman saat ini
      if (linkPage === currentPage && currentPage !== "") {
        link.classList.add("active"); // Menyorot link aktif
      } else {
        link.classList.remove("active"); // Menghapus sorotan dari link lainnya
      }
    });
  }

  // Panggil fungsi highlightActiveLink saat halaman dimuat dan saat ada perubahan di URL
  highlightActiveLink();
  window.addEventListener("popstate", highlightActiveLink);
});
