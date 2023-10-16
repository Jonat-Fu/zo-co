/************************** MENU HAMBURGER ************************/

let navBurger = document.getElementById("nav_hamburger_id");
let nav = document.getElementById("nav_id");
let navOpen = false;

navBurger.addEventListener('click', () => {
    if (navOpen) {
        nav.style.maxHeight = "0"; /* en lien avec overflow */  
        navBurger.style.transition = "height 0.5s";
        navBurger.src = '../img/icon/hamburger.png';
        navBurger.alt = 'Ouvrir';
      } else {
        nav.style.maxHeight = "110vw"; /* en lien avec overflow */
        navBurger.style.transition = "height 0.5s";
        navBurger.src = '../img/icon/croix_blanche.png';
        navBurger.alt = 'Fermer';
    }
    navOpen = !navOpen;
});

// Gestionnaire d'événement de clic sur le document entier pour fermer le menu en dehors du menu
document.addEventListener('click', (event) => {
    if (navOpen && !nav.contains(event.target) && event.target !== navBurger) {
        nav.style.maxHeight = "0"; /* en lien avec overflow */
        navBurger.style.transition = "height 0.5s";
        navBurger.src = '../img/icon/hamburger.png';
        navBurger.alt = 'Fermer';
        navOpen = false;
    }
});



/*********************** HEADER SCROLL DESKTOP ********************/

window.addEventListener('scroll', function() {
  let headerDesk = document.getElementById('header_desk_scroll_id');
  if (window.scrollY > 250) { // 300 indique à combien de pixel de hauteur l'événement se déclenche
      headerDesk.style.display = "flex";
      headerDesk.style.position = "fixed";
      headerDesk.style.visibility = 'visible';
      headerDesk.style.pointerEvents = 'auto';

  } else {
      headerDesk.style.display = "none";
  }
});



/*********************** BOUTON SCROLL HAUTE DE PAGE (pied de page) *********************/

window.addEventListener('scroll', function() {

  let hautDePageDesk = document.getElementById('hautDePage_scroll_desk');
  let hautDePageMob = document.getElementById('hautDePage_scroll_mob');
  let orientationPaysage = window.matchMedia("(orientation: landscape)");

  // Fonction pour gérer le changement de taille de la fenêtre du navigateur
  function handResize() {

    // obtenir la largeur de la fenêtre du navigateur
    const windowWidth = window.innerWidth;

    if (orientationPaysage.matches && window.scrollY > 250) {
      hautDePageDesk.style.display = "flex";
      hautDePageDesk.style.position = "fixed";
      hautDePageDesk.style.visibility = 'visible';
      hautDePageMob.style.display = "none";

    } else if (!orientationPaysage.matches && window.scrollY / windowWidth > 0.5) {
      hautDePageMob.style.display = "flex";
      hautDePageMob.style.position = "fixed";
      hautDePageMob.style.visibility = 'visible';
      hautDePageDesk.style.display = "none";
      
    } else {
      hautDePageDesk.style.display = "none";
      hautDePageMob.style.display = "none";
    }
  }

  // Gestionnaire d'événements pour l'événement "resize" du navigateur
  window.addEventListener('resize', handResize);

  // Prendre en compte la taille de la fenêtre lors du chargement de la page
  handResize();
});

document.getElementById('hautDePage_scroll_desk').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('hautDePage_scroll_mob').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



/*********************** BOUTON SCROLL HAUT DE PAGE FOOTER **************************/

document.getElementById('hautDePage_mob').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


document.getElementById('hautDePage_desk').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
