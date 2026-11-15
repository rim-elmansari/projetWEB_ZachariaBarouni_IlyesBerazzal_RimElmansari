// FAQ : ouverture et fermeture des questions

document.querySelectorAll(".faq-question").forEach((question) => {

    question.addEventListener("click", () => {

        const item = question.parentElement;
        const answer = item.querySelector(".faq-answer");

        // Fermer les autres questions
        document.querySelectorAll(".faq-item").forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.classList.remove("active");
                otherItem.querySelector(".faq-answer").style.maxHeight = null;
            }
        });

        // Ouvrir ou fermer la question sélectionnée
        item.classList.toggle("active");

        if (item.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }

    });

});