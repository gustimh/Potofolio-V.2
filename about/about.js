document.addEventListener("DOMContentLoaded", () => {
  // Select all tab buttons
  const tabButtons = document.querySelectorAll(".tab-button");
  // Select all content containers
  const contentContainers = document.querySelectorAll(
    ".skills-container, .tools-container"
  );

  // Function to show selected tab content and hide others
  function showTab(tabId) {
    // Hide all content containers
    contentContainers.forEach((container) => {
      container.classList.add("hidden");
    });

    // Remove 'active' class from all tab buttons
    tabButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Show the selected content container
    document.getElementById(tabId).classList.remove("hidden");
    // Add 'active' class to the clicked tab button
    const activeButton = document.querySelector(
      `.tab-button[data-tab="${tabId}"]`
    );
    if (activeButton) {
      activeButton.classList.add("active");
    }
  }

  // Add click event listeners to all tab buttons
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabId = button.dataset.tab;
      showTab(tabId);
    });
  });

  // Show the tech stack skills by default
  showTab("tech-stack");
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

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("hovered");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("hovered");
  });

  card.addEventListener("focusin", () => {
    card.classList.add("hovered");
  });

  card.addEventListener("focusout", () => {
    card.classList.remove("hovered");
  });
});

const profilePic = document.querySelector('.profile-pic');

profilePic.addEventListener('mouseover', () => {
  profilePic.classList.add('hovered');
});

profilePic.addEventListener('mouseout', () => {
  profilePic.classList.remove('hovered');
});

