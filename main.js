function redirInstagram() {
  window.location.href = "https://instagram.com/luthfimuham_";
}

function redirWhatsapp() {
  window.location.href = "https://wa.me/+628192389292";
}
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".scroll-to-top").style.display = "block";
  } else {
    document.querySelector(".scroll-to-top").style.display = "none";
  }
}
