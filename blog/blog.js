document.addEventListener("DOMContentLoaded", function () {
  const topics = document.querySelectorAll(".topic");
  const content = document.getElementById("content");

  const blogPosts = {
    technology: {
      title:
        "technologyindonesia.id/BRIN Kembangkan PLTS Terapung Mobile Pertama di Indonesia",
      date: "26 Juni 2024",
      text: "Inovasi ini dilatarbelakangi oleh potensi besar energi surya di Indonesia yang terletak di garis khatulistiwa, serta keterbatasan lahan untuk pembangunan PLTS darat.",
      img: "img/topik1tekno.png",
    },
    programming: {
      title: "Manusia Rp 1.700 Triliun Bilang Percuma Belajar Ilmu Komputer",
      date: "13 June 2024",
      text: "Perkembangan Artificial Intelligence (AI) selama beberapa tahun terakhir, bakal menggantikan manusia. Meski akan bekerja menjalankan pabrik, para robot AI masih akan membutuhkan manusia.",
      img: "img/topik2progm.png",
    },
    "web-development": {
      title: "Web Development",
      date: "June 18, 2023",
      text: "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
      img: "img/image1.png",
    },
    javascript: {
      title: "JavaScript",
      date: "June 15, 2023",
      text: "JavaScript, often abbreviated JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.",
      img: "img/image2.png",
    },
    css: {
      title: "CSS",
      date: "June 10, 2023",
      text: "CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
      img: "img/image.png",
    },
  };

  topics.forEach((topic) => {
    topic.addEventListener("click", function () {
      const topicKey = this.getAttribute("data-topic");
      const post = blogPosts[topicKey];

      content.innerHTML = `
          <div class="blog-post">
            <div class="text-content">
              <div class="post-date">${post.date}</div>
              <h3>${post.title}</h3>
              <p>${post.text}</p>
            </div>
            <img src="${post.img}" alt="${post.title}" onclick="openModal('${post.img}')" />
          </div>
        `;
    });
  });
});

// Modal functions
function openModal(src) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = src;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
