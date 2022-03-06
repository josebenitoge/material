window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav").style.boxShadow =
      "0px 2px 5px rgba(0, 0, 0, 0.4)";
  } else {
    document.getElementById("nav").style.boxShadow =
      "0px 1px 0px var(--border)";
  }
};
