import home from "./Home";

const flow = (function () {
  const defaultContent = `<div class="navbar">
    <a href="#" class="hover-underline-animation">Home</a>
    <a href="#" class="hover-underline-animation">Menu</a>
    <a href="#" class="hover-underline-animation">Contact Us</a>
    </div>`;
  const content = document.querySelector("#content");

  function init() {
    content.innerHTML = defaultContent;
    home(content);
  }

  function resetContent() {
    content.innerHTML = defaultContent;
  }

  window.onload = init;
})();
