
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("reservationForm");
    const message = document.getElementById("reservationMessage");
    const dateInput = document.getElementById("date");

    

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    dateInput.min = `${year}-${month}-${day}`;

    

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const date = dateInput.value;
        const time = document.getElementById("time").value;
        const guests = document.getElementById("guests").value;

        if (!firstName || !lastName || !date || !time || !guests) {
            message.textContent = "Merci de compléter tous les champs obligatoires.";
            message.className = "reservation-message error";
            return;
        }

        message.textContent =
            `Merci ${firstName} ! Votre demande de réservation pour ${guests} personne(s), le ${date} à ${time}, a bien été enregistrée dans cette démonstration.`;

        message.className = "reservation-message success";

        form.reset();

        
        dateInput.min = `${year}-${month}-${day}`;

    });

});
