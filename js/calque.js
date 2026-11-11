const PAGES = new URL("../pages/", document.currentScript.src).href;
const IMAGES = new URL("../images/", document.currentScript.src).href;

const HEADER_HTML = `
  <a href="${PAGES}index.html" class="logo"><img src="${IMAGES}logo-zir-food.png" alt="Logo ZIR FOOD" height="70"></a>
  <nav class="main-nav">
    <ul>
      <li><a href="${PAGES}index.html">Accueil</a></li>
      <li><a href="${PAGES}menu.html">Menu</a></li>
      <li><a href="${PAGES}reservation.html">Réservation</a></li>
      <li><a href="${PAGES}actu.html">Actu</a></li>
      <li class="has-submenu">
        <a href="${PAGES}faq.html">FAQ</a>
        <ul class="submenu">
          <li><a href="${PAGES}faq/contact.html">Nous contacter</a></li>
          <li><a href="${PAGES}faq/ou-nous-trouver.html">Où nous trouver</a></li>
          <li><a href="${PAGES}faq/rejoindre-equipe.html">Rejoindre l'équipe</a></li>
        </ul>
      </li>
    </ul>
  </nav>
`;

const FOOTER_HTML = `
  <p>&copy; ${new Date().getFullYear()} ZIR FOOD</p>
`;

document.querySelector(".site-header").innerHTML = HEADER_HTML;
document.querySelector(".site-footer").innerHTML = FOOTER_HTML;

document.querySelectorAll(".main-nav a").forEach((lien) => {
  if (lien.href === location.href.split("#")[0].split("?")[0]) {
    lien.classList.add("active");
  }
});
