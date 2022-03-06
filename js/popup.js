"use strict";
function dismiss(content, container) {
  let flag = false;
  content.addEventListener("click", () => {
    flag = true;
  });
  container.addEventListener("click", () => {
    if (!flag) {
      container.remove();
    }
    flag = false;
  });
}

class PopupMenu {
  static show(title, options, onclick) {
    let body = document.body;
    let menu = document.createElement("menu");
    let ul = document.createElement("ul");
    let h1 = document.createElement("h1");
    h1.innerHTML = title;

    ul.appendChild(h1);

    for (let o of options) {
      let li = document.createElement("li");
      li.innerHTML = o;
      li.setAttribute("value", o);
      li.onclick = () => {
        menu.remove();
        onclick(o);
      };
      ul.appendChild(li);
    }

    dismiss(ul, menu);

    menu.appendChild(ul);
    body.insertAdjacentElement("beforeend", menu);
  }
}

class PopupOptions {
  static show(title, options, onclick) {
    let last = document.getElementById("popup_options");
    if (last) last.remove();

    let body = document.body;
    let div = document.createElement("div");
    let ul = document.createElement("ul");
    let h1 = document.createElement("h1");
    h1.innerHTML = title;
    div.setAttribute("class", "options");
    div.setAttribute("id", "popup_options");
    ul.appendChild(h1);

    let x = window.event.clientX;
    let y = window.event.clientY;
    let height = window.innerHeight;
    let width = window.innerWidth;
    if (width - x < 300) {
      if(x < 300)y = y - 150;
      else x = x - 300;
    }
    if (height - y < 350) {
      if (y < 350) y = y - 175;
      else y = y - 350;
    }

    ul.style.left = x + "px";
    ul.style.top = y + "px";

    for (let o of options) {
      let li = document.createElement("li");
      li.innerHTML = o;
      li.setAttribute("value", o);
      li.onclick = () => {
        div.remove();
        onclick(o);
      };
      ul.appendChild(li);
    }

    dismiss(ul, div);

    div.appendChild(ul);
    body.insertAdjacentElement("beforeend", div);
  }
}

class PopupDialog {
  static show(title, msg, buttons, onclick) {
    let body = document.body;
    let div = document.createElement("div");
    let section = document.createElement("section");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    h1.innerHTML = title;
    p.innerHTML = msg;
    div.setAttribute("class", "dialog");

    section.appendChild(h1);
    section.appendChild(p);

    for (let b of buttons) {
      let button = document.createElement("button");
      button.innerHTML = b["name"];
      button.setAttribute("value", b["name"]);
      button.setAttribute(
        "style",
        "background-color: var(--" + b["color"] + ");"
      );
      button.onclick = () => {
        div.remove();
        onclick(b["name"]);
      };
      section.appendChild(button);
    }

    dismiss(section, div);

    div.appendChild(section);
    body.insertAdjacentElement("beforeend", div);
  }
}

class PopupNotification {
  static show(title, msg, time) {
    let body = document.body;
    let div = document.createElement("div");
    let section = document.createElement("section");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    h1.innerHTML = title;
    p.innerHTML = msg;
    div.setAttribute("class", "dialog");

    section.appendChild(h1);
    section.appendChild(p);

    setTimeout(() => {
      div.remove();
    }, time * 1000);

    dismiss(section, div);

    div.appendChild(section);
    body.insertAdjacentElement("beforeend", div);
  }
}

class PopupForm {
  static show(title, elements) {
    let body = document.body;
    let div = document.createElement("div");
    div.setAttribute("class", "floating-form");
    let form = document.createElement("form");
    let h1 = document.createElement("h1");
    h1.innerHTML = title;

    form.appendChild(h1);

    for (let e of elements) {
      form.appendChild(e);
    }

    dismiss(form, div);

    div.appendChild(form);
    body.insertAdjacentElement("beforeend", div);
    return div;
  }
}
