
document.addEventListener("DOMContentLoaded", function () {

    // FILTRES DU MENU

    const filterButtons = document.querySelectorAll(".filter-btn");
    const foodCards = document.querySelectorAll(".food-card");

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedFilter = button.dataset.filter;

            // Changer le bouton actif

            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            // Afficher les produits correspondants

            foodCards.forEach(function (card) {

                const categories = card.dataset.category.split(" ");

                if (
                    selectedFilter === "all" ||
                    categories.includes(selectedFilter)
                ) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }

            });

        });

    });


    

    let selectedCount = 0;

    const counter = document.getElementById("counterNumber");
    const addButtons = document.querySelectorAll(".add-food");

    addButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            selectedCount++;

            counter.textContent = selectedCount;

            button.classList.add("selected");
            button.textContent = "✓";

            button.disabled = true;

            setTimeout(function () {

                button.classList.remove("selected");
                button.textContent = "+";
                button.disabled = false;

            }, 600);

        });

    });

});
