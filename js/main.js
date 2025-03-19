$(document).ready(function() {

    //===================NAVBAR SHOW/HIDE==========================//
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll > 250 ) {
        $("#main-nav").slideDown(700);
      } else {
        $("#main-nav").slideUp(700);
      }
    });
    // =====================RESPONSIVE MENU======================== //
  
    $('.responsive').on('click', function(e) {
      $('.nav-menu').slideToggle();
    });
  
    // ============================Typed Js======================== //
    var typed = $(".typed");
  
    $(function() {
      typed.typed({
        strings: ["Wiyoga Atmo Darwinto.", "a Mechanical Engineering.", "a Drafter."],
        typeSpeed: 100,
        loop: true,
      });
    });
  
  });

  // Gambar Sortlisted //
  document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("fullImage");
    const modalDescription = document.getElementById("imageDescription");
    const closeBtn = document.querySelector(".close");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            modalDescription.textContent = this.alt;
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

// Function Number Sortlist //
document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("fullImage");
  const modalDescription = document.getElementById("imageDescription");
  const closeBtn = document.querySelector(".close");

  thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", function () {
          modal.style.display = "block";
          modalImg.src = this.src;
          modalDescription.textContent = `Gambar ${index + 1}: ${this.alt}`;
      });
  });

  closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });
});
