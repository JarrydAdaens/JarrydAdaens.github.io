(function () {
  function initializeNavigation() {
    const nav = document.querySelector(".nav");
    const path = window.location.pathname.toLowerCase();

    if (nav) {
      let section = null;

      if (path === "/apps/kung-fu.html") {
        section = "ai-engineering";
      } else if (path.startsWith("/apps/")) {
        section = "apps";
      } else if (path === "/open-source/agentic-rails.html") {
        section = "ai-engineering";
      } else if (path.startsWith("/games/")) {
        section = "games";
      }

      if (section) {
        const dropdown = nav.querySelector(`[data-nav-section="${section}"]`);
        if (dropdown) {
          dropdown.classList.add("current");
          dropdown.querySelector("summary").setAttribute("aria-current", "page");
        }
      } else {
        const currentLink = nav.querySelector(
          path === "/" || path === "/index.html"
            ? '[data-nav-home]'
            : `.nav-link[href="${path}"]`
        );
        if (currentLink) {
          currentLink.setAttribute("aria-current", "page");
        }
      }

      const currentPageLink = nav.querySelector(`.dropdown-menu a[href="${path}"]`);
      if (currentPageLink) {
        currentPageLink.setAttribute("aria-current", "page");
      }
    }

    document.addEventListener("click", (event) => {
      document.querySelectorAll(".dropdown[open]").forEach((dropdown) => {
        if (!dropdown.contains(event.target)) {
          dropdown.removeAttribute("open");
        }
      });
    });
  }

  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", initializeNavigation);
  } else {
    initializeNavigation();
  }
})();
