---
name: Lille Métropole Chess
description: Système visuel du site public du club, blanc et tracé au trait, porté par un seul rouge brique.
colors:
  brique: "#b8382b"
  brique-deep: "#9c2f24"
  brique-wash: "#fbeaea"
  brique-mist: "#faf6f5"
  ink: "#111111"
  ink-soft: "#333333"
  slate: "#444444"
  slate-muted: "#555555"
  grey-quiet: "#666666"
  grey-faint: "#888888"
  surface: "#ffffff"
  surface-alt: "#f7f7f7"
  success-bg: "#eaf5ea"
  success-text: "#2a6b2a"
  error-text: "#a12b2b"
  hairline: "#0000001f"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2rem, 5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "normal"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(1.5rem, 5vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "Roboto, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Roboto, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Roboto, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 700
    letterSpacing: "0.12em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  avatar: "26%"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "80px"
components:
  button-primary:
    backgroundColor: "{colors.brique}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "16px 24px"
  button-primary-hover:
    backgroundColor: "{colors.brique-deep}"
    textColor: "{colors.surface}"
  button-compact:
    backgroundColor: "{colors.brique}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "20px"
  row-link:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "18px 20px"
  row-link-hover:
    backgroundColor: "{colors.brique-wash}"
    textColor: "{colors.ink}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "16px"
  status-success:
    backgroundColor: "{colors.success-bg}"
    textColor: "{colors.success-text}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  status-error:
    backgroundColor: "{colors.brique-wash}"
    textColor: "{colors.error-text}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
---

# Design System: Lille Métropole Chess

## 1. Overview

**Creative North Star: "La maison de club"**

Un lieu clair et ordonné, pas un document. Les surfaces sont blanches et calmes, les séparations sont des traits fins, et le rouge brique n'apparaît que là où quelque chose se passe : un lien, une action, une date, un nom. Le système ne cherche pas à impressionner par la matière ; il cherche à ce qu'on trouve sa place tout de suite. Les visages des membres, les photos de salle et les affiches de tournoi sont les seuls éléments autorisés à apporter de la couleur en masse.

La densité est faible sur les pages d'accueil et de présentation, forte sur les pages de résultats. C'est assumé : ce sont deux lectures différentes du même lieu. Une page de club se parcourt du regard, une grille de tournoi se scrute. Le système ne cherche pas à harmoniser artificiellement les deux, il les traite avec le même vocabulaire (trait fin, blanc, un seul rouge) à deux régimes de densité.

Ce système rejette frontalement deux choses, reprises de PRODUCT.md. Le cliché de l'échiquier noir et blanc : aucun damier, aucun motif de cases, aucune pièce détourée en héros. Et le luxe sombre navy et or : pas de fond nocturne, pas de sérif dorée, rien qui suggère un club fermé. Le blanc ici n'est pas du prestige, c'est de la clarté.

**Key Characteristics:**
- Fond blanc dominant, aucune surface sombre
- Un seul accent chromatique, le rouge brique, jamais accompagné d'une seconde couleur d'identité
- Séparations au trait de 1px plutôt que par ombres ou blocs colorés
- Titres en sérif, tout le reste en sans-serif, sans troisième famille
- Angles doux et discrets : 4px sur les actions, 8px sur les surfaces
- Mouvement bref et réactif, jamais décoratif

## 2. Colors: La palette Brique et Blanc

Une palette monochrome de gris neutres, traversée par un unique rouge chaud et légèrement désaturé. Aucune seconde couleur d'identité n'existe : les seules autres teintes du système sont fonctionnelles (succès, erreur).

### Primary
- **Rouge Brique Lillois** (`#b8382b`) : la couleur du club. Elle marque les liens actifs, les boutons d'action, les flèches de navigation, les eyebrows de page, les remises partenaires et les liens vers la FFE. C'est le seul élément chromatique qui traverse toutes les pages, donc le seul repère de marque : il ne se partage pas.
- **Brique Profonde** (`#9c2f24`) : uniquement l'état de survol des surfaces déjà en brique (boutons, liens FFE). Jamais utilisée au repos.
- **Voile Brique** (`#fbeaea`) : fond très clair pour les états de survol de ligne et les messages d'erreur. Signale l'appartenance à la famille brique sans en avoir le poids.
- **Brume Brique** (`#faf6f5`) : fond de bloc éditorial long (mot du président). Presque blanc, teinté vers la brique, sert à détacher un texte de fond du reste de la page sans le mettre dans une carte.

### Neutral
- **Encre** (`#111111`) : texte principal, logo, titres, en-têtes de tableau. C'est le noir du système, volontairement pas `#000`.
- **Encre Douce** (`#333333`) : paragraphes de blocs éditoriaux longs, où l'encre pleine fatiguerait.
- **Ardoise** (`#444444`) : chapôs et texte d'accompagnement de premier niveau.
- **Ardoise Sourde** (`#555555`) : texte secondaire généralisé, descriptions de cartes, rôles au conseil d'administration, méta de tournoi, pied de page.
- **Gris Discret** (`#666666`) : mentions tertiaires (fonction sous une signature).
- **Gris Pâle** (`#888888`) : placeholders de formulaire, libellés de définition en capitales, états vides. Niveau de contraste le plus bas admis, et uniquement sur du non-essentiel.
- **Surface** (`#ffffff`) : fond de page, d'en-tête collant, de carte, de champ.
- **Surface Alternée** (`#f7f7f7`) : lignes impaires des tableaux de résultats. Sa seule fonction est le zébrage.
- **Filet** (`#0000001f`) : toutes les bordures et séparations, déclinées en opacité selon la fonction. `.06` pour une séparation interne de tableau ou de liste, `.08` pour une bordure de carte et les filets d'en-tête et de pied de page, `.12` pour une bordure interactive au repos, `.15` pour une bordure de champ de saisie, `.2` pour une bordure survolée.

### Statut
- **Vert Validé** (fond `#eaf5ea`, texte `#2a6b2a`) : confirmation d'envoi de formulaire. Unique usage du vert dans tout le système.
- **Rouge Erreur** (fond `#fbeaea`, texte `#a12b2b`) : échec d'envoi. Le fond est le Voile Brique, le texte est une brique assombrie distincte de l'accent pour ne pas être confondu avec un lien.

### Named Rules

**La règle de la couleur unique.** Le système n'a qu'une couleur d'identité. Toute nouvelle teinte introduite doit être fonctionnelle (statut, donnée) et démontrable comme telle, ou elle est refusée. Un site de club qui gagne une deuxième couleur perd sa première.

**La règle du blanc porteur.** Le blanc n'est pas un fond par défaut, c'est la matière principale. Si une section a besoin d'être détachée, la réponse est un filet, un espace plus large ou une teinte à peine perceptible (`#faf6f5`, `#f7f7f7`), jamais un aplat coloré.

**La règle du rouge rare.** Le rouge brique reste sous 10 % de la surface visible d'un écran. Il marque ce qui est cliquable ou ce qui est daté, rien d'autre. Un titre n'est pas rouge, un encadré n'est pas rouge, une bordure décorative n'est pas rouge.

## 3. Typography

**Display Font:** Playfair Display (repli Georgia, serif), graisses 400 et 700
**Body Font:** Roboto (repli system-ui, -apple-system, Segoe UI, Helvetica Neue, Arial), graisses 300, 400 et 700
**Label/Mono Font:** aucune. Les chiffres des tableaux sont en Roboto.

**Character:** Un couple classique et sans risque : une sérif de titrage à fort contraste de fûts, une grotesque neutre pour tout le reste. La sérif n'apparaît que sur les titres de page ; elle donne le ton d'accueil, puis s'efface complètement. Ce choix a été retenu en connaissance de cause plutôt que par défaut, avec ses limites : c'est le couple attendu de la catégorie, et il ne portera pas seul une identité. Le travail de distinction se joue ailleurs, dans le rythme et la photo.

### Hierarchy
- **Display** (Playfair Display 700, `clamp(2rem, 5vw, 3rem)`, interligne 1.1) : titre principal d'une page d'entrée fortement éditorialisée (Contact). Un seul par page.
- **Headline** (Playfair Display 700, `clamp(1.5rem, 5vw, 2.25rem)`, interligne 1.2) : titre de page courante (Le Club, Nos équipes, Évènements) et titre de bloc éditorial long (mot du président, `clamp(1.4rem, 4vw, 1.75rem)`).
- **Title** (Roboto 600, `1.5rem`) : titre de section à l'intérieur d'une page. Souvent centré. Sa version réduite (`1.25rem`, 600) sert aux sous-sections et aux intertitres de blocs.
- **Body** (Roboto 400, `1rem`, interligne 1.6) : tout le texte courant. Les colonnes de prose sont plafonnées entre `42ch` (chapô) et 720 à 760px (corps long). La variante secondaire descend à `0.9rem` avec interligne 1.5 pour les descriptions de carte, et `0.875rem` pour les métadonnées et le pied de page.
- **Label** (Roboto 700, `0.75` à `0.8rem`, interlettrage `0.08em` à `0.12em`, capitales) : eyebrows de page et libellés de listes de définition (adresse, horaires). Le seul endroit du système où les capitales sont autorisées.
- **Data** (Roboto 400 et 600, `0.9rem`, `white-space: nowrap`) : tableaux de résultats et de classement. Le total de la ligne passe en 600, le reste reste en 400.

### Named Rules

**La règle de la sérif rare.** Playfair Display ne sort que pour les titres de page et les titres de bloc éditorial. Elle est interdite dans les boutons, les tableaux, les cartes, les libellés et les intertitres de section, qui appartiennent tous à Roboto. Deux niveaux de sérif sur un même écran est déjà un niveau de trop.

**La règle du saut d'échelle.** Chaque niveau de titre est séparé du suivant par un rapport d'au moins 1.25, ou par un changement de graisse et de famille. Deux titres voisins de tailles proches sont un défaut de hiérarchie, pas une nuance.

**La règle du jargon traduit.** Reprise directe de PRODUCT.md : tout terme échiquéen affiché en corps de texte est explicité au moins une fois sur la page. La typographie ne compense pas un vocabulaire opaque.

## 4. Elevation

Le système est **plat par principe et tracé au trait**. Aucune surface ne porte d'ombre au repos. La profondeur est produite par des bordures de 1px à opacité variable, par le zébrage des tableaux et par des fonds à peine teintés. Deux ombres seulement existent dans tout le système, et les deux sont des réponses à un état, jamais une décoration permanente.

Test d'audit : si une carte a une ombre alors que personne ne la survole, l'ombre est de trop.

### Shadow Vocabulary
- **Survol de surface** (`box-shadow: 0 4px 12px rgba(0,0,0,.1)`) : uniquement au survol ou au focus d'une carte cliquable, accompagné d'un `translateY(-2px)` et d'un durcissement de bordure à `rgba(0,0,0,.2)`.
- **Calque flottant** (`box-shadow: 0 8px 24px rgba(0,0,0,.12)`) : uniquement le panneau du menu mobile, qui se superpose réellement au contenu.

### Named Rules

**La règle du plat au repos.** Une surface est plate tant qu'elle n'est ni survolée, ni superposée. L'ombre est un signal d'interaction ou de superposition, jamais un effet de style.

**La règle du filet gradué.** L'épaisseur d'une séparation ne varie pas, seule son opacité varie : `.06` à l'intérieur d'une liste ou d'un tableau, `.08` pour délimiter une surface, `.12` pour une cible interactive, `.2` au survol. Une bordure au-delà de 1px n'existe que sur l'en-tête de tableau (2px sous les intitulés de colonnes), où elle est structurelle.

## 5. Components

### Buttons
- **Shape:** angles très discrets (`4px`), presque rectangulaires. Aucune bordure.
- **Primary:** aplat Rouge Brique Lillois (`#b8382b`), texte blanc, Roboto 700. Trois tailles selon le contexte : pleine (`16px 24px`, `1rem`) pour l'envoi de formulaire, moyenne (`10px 20px`, `0.9rem`) pour l'inscription à un tournoi, compacte (`8px 16px`, `0.9rem`) pour un lien d'équipe en fil de texte.
- **Hover / Focus:** passage au `#9c2f24`, transition `background .15s ease`. Rien d'autre ne bouge : ni échelle, ni ombre, ni translation.
- **Secondary / Ghost:** n'existe pas. Une action secondaire est un lien texte souligné, pas un bouton dévitalisé.

### Cards / Containers
- **Corner Style:** `8px`.
- **Background:** blanc (`#ffffff`).
- **Shadow Strategy:** aucune au repos, voir Elevation. Seules les cartes réellement cliquables (partenaires) portent l'ombre de survol.
- **Border:** 1px `rgba(0,0,0,.08)`.
- **Internal Padding:** `20px`, réduit à `24px 20px` sur les blocs éditoriaux en mobile.
- Trois usages existants : carte de format de tournoi, carte partenaire (centrée, logo plafonné à 80px de haut), carte hôtel. Toutes partagent la même coquille et ne se distinguent que par leur contenu.

### Row Links
Composant signature du système, préféré à la carte pour les listes navigables (éditions du Chess Tour). Ligne pleine largeur, `18px 20px`, bordure 1px `rgba(0,0,0,.12)`, rayon `8px`, libellé à gauche et flèche brique à droite. Au survol : bordure qui passe en `#b8382b`, fond en Voile Brique (`#fbeaea`), et translation de `4px` vers la droite de la ligne et de sa flèche. C'est le seul mouvement directionnel du système, et il signifie « ceci mène ailleurs ».

### Inputs / Fields
- **Style:** fond blanc, bordure 1px `rgba(0,0,0,.15)`, rayon `6px`, padding `16px`, police héritée du corps. Le textarea démarre à 160px et n'est redimensionnable qu'en hauteur.
- **Focus:** la bordure passe au Rouge Brique Lillois. **L'implémentation actuelle supprime le contour natif (`outline: none`) sans le remplacer par un anneau de focus, ce qui est un défaut d'accessibilité au regard de la cible WCAG 2.2 AA fixée dans PRODUCT.md.** Toute nouvelle production doit poser un `:focus-visible` visible et non uniquement chromatique.
- **Placeholder:** Gris Pâle (`#888888`).
- **Error / Success:** portés par un bloc de message distinct sous le formulaire, rayon `6px`, padding `12px 16px`, jamais par une coloration du champ seul.

### Tables (résultats et classements)
Le composant le plus dense du système et le seul justifiant sa propre grammaire.
- Enveloppe en `overflow-x: auto`, table en `border-collapse: collapse`, `0.9rem`, `white-space: nowrap`.
- En-tête : aligné à gauche, Roboto 600, padding `8px 12px`, souligné d'un trait de 2px en Encre. C'est la seule bordure épaisse du système.
- Cellules : padding `6px 12px`, séparateur bas 1px `rgba(0,0,0,.06)`.
- Zébrage : lignes paires en blanc, impaires en Surface Alternée (`#f7f7f7`).
- Colonnes typées : rang aligné à droite, en Ardoise Sourde, largeur 40px ; nom à 180px minimum ; scores centrés ; total centré et en 600 ; colonne tournoi plafonnée à 120px avec ellipse.

### Navigation
- **En-tête :** collant en haut, fond blanc, filet inférieur 1px `rgba(0,0,0,.08)`, padding `18px 24px`. Marque à gauche en Roboto 700 `1.05rem`, liens à droite en Roboto 500.
- **États :** liens en Encre, soulignés au survol. Aucune couleur d'état actif n'est implémentée aujourd'hui.
- **Mobile (sous 900px) :** la barre de liens disparaît au profit d'un `details/summary` natif. Le déclencheur est un bouton bordé (`1px rgba(0,0,0,.12)`, rayon `8px`, padding `10px 14px`), le panneau s'ouvre à 8px sous lui, largeur minimale 200px, et porte le Calque flottant. Aucun JavaScript.
- **Fil d'Ariane :** lien brique, Roboto 600, `0.9rem`, non souligné au repos, souligné au survol.

### Avatars (conseil d'administration)
Photo carrée (`aspect-ratio: 1/1`), recadrée en `object-fit: cover` avec `object-position: top` pour garder les visages, et arrondie à `26%`. Ce rayon en pourcentage, à mi-chemin du carré et du cercle, est le seul geste de forme réellement distinctif du système. Il incarne le principe « montrer des gens, pas des pièces » de PRODUCT.md.

### Page shell
Largeur maximale `1100px` (`--max-width`), le seul token CSS déclaré du projet. Padding de page `48px 24px`. Les colonnes de prose se resserrent à 720 ou 760px selon la page. Points de rupture en usage : 900px (navigation), 800px (contact), 700px (colonnes et blocs éditoriaux), 600px (listes de définitions).

### Motion
Transitions de `.15s ease` sur les changements d'état (fond de bouton, bordure et fond de ligne), `0.2s ease` sur les cartes cliquables. Deux déplacements seulement, tous deux au survol : `translateY(-2px)` sur une carte, `translateX(4px)` sur une ligne navigable. Aucune animation d'entrée, aucune séquence au scroll, aucun rebond. Le respect de `prefers-reduced-motion` n'est pas implémenté aujourd'hui et doit l'être : c'est une exigence de PRODUCT.md.

## 6. Do's and Don'ts

### Do:
- **Do** garder le rouge brique (`#b8382b`) sous 10 % de la surface d'un écran, et le réserver à ce qui est cliquable ou daté.
- **Do** séparer les surfaces par un filet de 1px dont seule l'opacité varie (`.06`, `.08`, `.12`, `.15`, `.2`), jamais par une ombre au repos.
- **Do** réserver Playfair Display aux titres de page et de bloc éditorial, et passer tout le reste en Roboto.
- **Do** plafonner la prose entre `42ch` et 760px, et laisser respirer : `48px` de padding de page, `48px` entre sections.
- **Do** utiliser le Row Link plutôt qu'une carte dès qu'une liste sert à naviguer.
- **Do** poser un `:focus-visible` explicite et non uniquement chromatique sur tout élément interactif, y compris les champs de formulaire. La cible est WCAG 2.2 AA.
- **Do** doubler toute information portée par la couleur (statut, résultat, disponibilité) d'un texte ou d'une forme.
- **Do** implémenter `prefers-reduced-motion` sur les deux translations de survol du système.
- **Do** montrer des visages, des salles et des affiches quand une page a besoin de couleur. C'est la seule source de couleur en masse autorisée.

### Don't:
- **Don't** introduire de damier, de motif de cases, de pièce d'échecs détourée ou de palette noir / blanc / or. Le cliché de l'échiquier est interdit comme socle visuel, y compris en filigrane, en fond de héro ou en séparateur.
- **Don't** basculer une section en fond bleu nuit avec sérif dorée. Le luxe sombre navy et or contredit frontalement l'audience débutants.
- **Don't** utiliser `border-left` ou `border-right` de plus de 1px comme accent coloré. Le bloc du mot du président porte aujourd'hui un `border-left: 4px solid #b8382b` : c'est une dette identifiée, à remplacer par un fond teinté seul, pas un motif à reproduire.
- **Don't** ajouter une deuxième couleur d'identité. Le vert et le rouge d'erreur existants sont fonctionnels et n'autorisent aucune extension décorative.
- **Don't** poser d'ombre sur une surface au repos. Si elle n'est ni survolée ni superposée, elle est plate.
- **Don't** empiler des cartes à l'intérieur de cartes, ni produire des grilles de cartes identiques icône + titre + texte à répétition.
- **Don't** utiliser `#000` ou `#fff` pour du texte. L'encre du système est `#111111`.
- **Don't** appliquer `background-clip: text` avec un dégradé, ni aucun texte en dégradé.
- **Don't** faire descendre du texte utile sous `#888888` en contraste, ni porter une information essentielle avec cette teinte.
- **Don't** ouvrir une modale par réflexe. Le menu mobile est un `details/summary` natif sans JavaScript, et c'est la bonne réponse par défaut.
- **Don't** ajouter des classes Tailwind. Tailwind v4 est installé mais le système est entièrement en CSS écrit à la main dans `src/styles/global.css` ; mélanger les deux fracturerait le système.
