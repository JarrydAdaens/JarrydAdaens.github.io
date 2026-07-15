(function () {
  window.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", (event) => {
      document.querySelectorAll(".dropdown[open]").forEach((dropdown) => {
        if (!dropdown.contains(event.target)) {
          dropdown.removeAttribute("open");
        }
      });
    });
  });
})();
