import home from "./Home";
import menu from "./Menu";
import contactUs from "./ContactUs";

const flow = (() => {
  const defaultContent = `<div class="navbar">
    <a href="#" class="hover-underline-animation" id="home">Home</a>
    <a href="#" class="hover-underline-animation" id="menu">Menu</a>
    <a href="#" class="hover-underline-animation" id="contact-us">Contact Us</a>
  </div>`;
  const content = document.querySelector("#content");

  function init() {
    content.innerHTML = defaultContent;
    home(content);
  }

  function resetContent() {
    content.innerHTML = defaultContent;
  }

  init();

  content.addEventListener("click", event => {
    event.preventDefault();
    const target = event.target;
    if (target.id === "home") {
      resetContent();
      home(content);
    } else if (target.id === "menu") {
      resetContent();
      menu(content);
    } else if (target.id === "contact-us") {
      resetContent();
      contactUs(content);
    }
  });
})();
