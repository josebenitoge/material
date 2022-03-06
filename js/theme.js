function skin() {
  let myskin = document.getElementById("skin");
  if (myskin.getAttribute("value") == "day") {
    myskin.setAttribute("href", "css/theme_dark.css");
    myskin.setAttribute("value", "night");
  } else {
    myskin.setAttribute("href", "css/theme_light.css");
    myskin.setAttribute("value", "day");
  }
}
