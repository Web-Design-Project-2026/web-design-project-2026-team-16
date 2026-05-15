setup();
function setup() {
  document.querySelectorAll(".js-nav-toggle").forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      document
        .querySelector(".navigation-menu")
        .classList.toggle("navigation-menu-show");
    });
  });
}
