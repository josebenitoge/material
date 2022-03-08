window.onscroll = function () {
  let nav = document.getElementById("nav");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    nav.style.boxShadow = "0px 0px 20px rgba(0, 0, 0, 0.4)";
    nav.style.backgroundColor = "var(--bg2)";
  } else {
    nav.style.boxShadow = "0px 1px 0px var(--border)";
    nav.style.backgroundColor = "transparent";
  }
};