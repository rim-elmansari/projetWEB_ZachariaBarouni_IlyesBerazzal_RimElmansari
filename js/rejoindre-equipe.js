const questions = [
  { cle: "nom", texte: "Bonjour et bienvenue chez ZIR FOOD ! Quel est votre prénom et votre nom ?" },
  { cle: "poste", texte: "Enchanté ! Quel poste vous intéresse : cuisinier, serveur ou livreur ?" },
  { cle: "dispo", texte: "Super ! Quelles sont vos disponibilités ?" },
  { cle: "email", texte: "Dernière question : quelle est votre adresse e-mail ?" }
];

const reponses = {};
let etape = 0;

const zoneMessages = document.getElementById("messages");
const formulaire = document.getElementById("chat-form");
const champ = document.getElementById("user-input");

function afficherMessage(texte, auteur) {
  const bulle = document.createElement("p");
  bulle.className = "message " + auteur;
  bulle.textContent = texte;
  zoneMessages.appendChild(bulle);
  zoneMessages.scrollTop = zoneMessages.scrollHeight;
}

function repondre(texte) {
  setTimeout(() => afficherMessage(texte, "bot"), 600);
}

formulaire.addEventListener("submit", (evenement) => {
  evenement.preventDefault();
  const texte = champ.value.trim();
  if (texte === "") return;

  afficherMessage(texte, "user");
  champ.value = "";

  if (questions[etape].cle === "email" && !texte.includes("@")) {
    repondre("Cette adresse ne semble pas valide, pouvez-vous la vérifier ?");
    return;
  }

  reponses[questions[etape].cle] = texte;
  etape++;

  if (etape < questions.length) {
    repondre(questions[etape].texte);
  } else {
    repondre(`Merci ${reponses.nom} ! Votre candidature pour le poste de ${reponses.poste} a bien été reçue. Nous vous répondrons à ${reponses.email}.`);
    champ.disabled = true;
  }
});

repondre(questions[0].texte);