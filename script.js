const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");

if (navToggle && navList) {
    const closeMenu = () => {
        navList.dataset.visible = "false";
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Abrir navegacion principal");
    };

    navToggle.addEventListener("click", () => {
        const isOpen = navList.dataset.visible === "true";
        navList.dataset.visible = isOpen ? "false" : "true";
        navToggle.setAttribute("aria-expanded", isOpen ? "false" : "true");
        navToggle.setAttribute("aria-label", isOpen ? "Abrir navegacion principal" : "Cerrar navegacion principal");
    });

    navList.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 820) {
                closeMenu();
            }
        });
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 820) {
            closeMenu();
        }
    });
}
