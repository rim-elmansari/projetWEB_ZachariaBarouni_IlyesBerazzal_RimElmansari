/* =========================================
   TRANSITION ACCUEIL → MENU
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const transition = document.querySelector(".zir-transition");

    if (!transition) return;

    const menuLinks = document.querySelectorAll('a[href="menu.html"]');

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    menuLinks.forEach(link => {

        link.addEventListener("click", event => {

            if (reducedMotion) return;

            event.preventDefault();

            const destination = link.href;

            transition.classList.remove("is-active");

            // Relance l'animation si nécessaire
            void transition.offsetWidth;

            transition.classList.add("is-active");

            document.body.style.overflow = "hidden";

            setTimeout(() => {
                window.location.href = destination;
            }, 1200);

        });

    });

});