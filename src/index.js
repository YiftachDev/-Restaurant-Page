import home from "./Home";

function init() {
  const content = document.querySelector("#content");
  content.innerHTML = `<div class="navbar">
    <a href="#" class="hover-underline-animation">Home</a>
    <a href="#" class="hover-underline-animation">Menu</a>
    <a href="#" class="hover-underline-animation">Contact Us</a>
    </div>`;
  home(content);
}

window.onload = init;
