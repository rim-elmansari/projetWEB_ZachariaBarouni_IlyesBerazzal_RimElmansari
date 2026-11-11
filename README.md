# ZIR FOOD

Site web du restaurant ZIR FOOD, projet de Programmation Web .

## Logo

`images/logo-zir-food.png`

## Charte graphique

### Couleurs principales

| Couleur | Code hex | Utilisation |
|---|---|---|
| Bleu | `#1B43FD` | Couleur d'accent |
| Vert | `#06763A` | Boutons du pied de page |
| Jaune | `#FFDB1F` | Bouton actif / page d'accueil |

### Couleurs claires (variantes)

| Couleur | Code hex | Utilisation |
|---|---|---|
| Bleu clair | `#879CFF` | Fonds, survols |
| Vert clair | `#67A483` | Fonds, survols |
| Jaune clair | `#F8E78F` | Boutons du menu de navigation |

### Couleurs du logo

| Élément | Code hex |
|---|---|
| « ZIR » | `#FF4905` |
| Ombre de « ZIR » | `#FFD200` |
| « FOOD » | `#00500A` |

### Couleurs neutres

| Couleur | Code hex | Utilisation |
|---|---|---|
| Noir | `#000000` | Texte, séparateurs |
| Blanc | `#FFFFFF` | Fond des pages |

## Polices

| Police | Utilisation |
|---|---|
| Open Sans | Texte courant et boutons |
| Mogra | « ZIR » du logo |
| Gill Sans Display ExtraBold | « FOOD » du logo |

## Variables CSS

À copier en haut de `css/style.css` pour utiliser les couleurs partout avec `var(--nom)` :

```css
:root {
  --bleu: #1B43FD;
  --vert: #06763A;
  --jaune: #FFDB1F;
  --bleu-clair: #879CFF;
  --vert-clair: #67A483;
  --jaune-clair: #F8E78F;
  --orange-logo: #FF4905;
  --vert-logo: #00500A;
  --noir: #000000;
  --blanc: #FFFFFF;
}
```

## Arborescence

```
PROJET_ZIR_FOOD/
├── css/style.css
├── images/logo-zir-food.png
├── js/
│   ├── calque.js
│   └── script.js
└── pages/
    ├── index.html
    ├── menu.html
    ├── reservation.html
    ├── actu.html
    ├── faq.html
    └── faq/
        ├── contact.html
        ├── ou-nous-trouver.html
        └── rejoindre-equipe.html
```
