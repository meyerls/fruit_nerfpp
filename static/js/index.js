/* index.js — filmstrip version (no external libs) */
window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "./static/interpolation/stacked";
var NUM_INTERP_FRAMES = 240;
var interp_images = [];

function setInterpolationImage(i) {
  var image = interp_images[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper').empty().append(image);
}

$(document).ready(function () {
  /* Navbar burger toggle */
  $(".navbar-burger").on("click", function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  /* Dics (if present) */
  $(".b-dics").each(function () {
    new Dics({ container: this, textPosition: "top" });
  });

  /* ------- Filmstrip controls (no carousel lib) ------- */
  const strip = document.getElementById("fruit-strip");
  const prevBtn = document.getElementById("stripPrev");
  const nextBtn = document.getElementById("stripNext");

  if (strip && prevBtn && nextBtn) {
    const amount = () => Math.min(strip.clientWidth, 600);
    prevBtn.addEventListener("click", () =>
      strip.scrollBy({ left: -amount(), behavior: "smooth" })
    );
    nextBtn.addEventListener("click", () =>
      strip.scrollBy({ left: amount(), behavior: "smooth" })
    );
  }

  /* No bulmaSlider or bulmaCarousel anymore */
});
