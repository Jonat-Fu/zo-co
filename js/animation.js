/***********************************************************************
*                                                                      *
*                             PAGE ACCEUIL                             *
*                                                                      *
***********************************************************************/

const orientationPaysageMob = window.matchMedia("(orientation: portrait)");

/*************************** TITRE MASSAGE ****************************/

const titreMassageP = document.querySelector('.titre_massage p');
const titreMassageH = document.querySelector('.titre_massage h1');

titreMassageP.style.opacity = '0';
titreMassageH.style.opacity = '0';


// Fonction pour gérer le défilement
function titreMassageScroll() {
    const { scrollTop, clientHeight } = document.documentElement;
    const topElementToTopViewport = (titreMassageP.getBoundingClientRect().top && titreMassageH.getBoundingClientRect().top);

    // Calculez le seuil auquel l'élément doit devenir visible
    const seuil = scrollTop + topElementToTopViewport - clientHeight * 0.80;

    if (scrollTop > seuil) {

      titreMassageP.style.opacity = '1';
      titreMassageP.style.animationName = 'scroll_massage_p';
      titreMassageP.style.animationFillMode = 'forwards';
      
      // si l'ecran est oriente en mode portrait
      if (orientationPaysageMob.matches) {
        titreMassageP.style.animationDuration = '1.2s';
      } else {
        titreMassageP.style.animationDuration = '1.5s';
      }

      titreMassageH.style.opacity = '1';
      titreMassageH.style.animationName = 'scroll_massage_h1';
      titreMassageH.style.animationFillMode = 'forwards';
      
      if (orientationPaysageMob.matches) {
        titreMassageH.style.animationDuration = '1.2s';
      } else {
        titreMassageH.style.animationDuration = '1.5s';
      }
    }
}

// Ajoutez un écouteur d'événement "load" pour appeler handleScroll lorsque la page est chargée
window.addEventListener('load', () => {
    titreMassageScroll(); // Appeler la fonction une fois la page chargée pour vérifier la position initiale de l'élément
});

// Ajoutez un écouteur d'événement de défilement pour appeler la fonction handleScroll lors du défilement
window.addEventListener('scroll', titreMassageScroll);



/*************************** IMAGE RENATA ****************************/

const imageRenata = document.querySelector('.img_renata');
imageRenata.style.opacity = '0';

function imageRenataScroll() {
    const { scrollTop, clientHeight } = document.documentElement;
    const topElementToTopViewport = imageRenata.getBoundingClientRect().top;

    const seuil = scrollTop + topElementToTopViewport - clientHeight * 0.90;

    if (scrollTop > seuil) {

      imageRenata.style.opacity = '1';
      imageRenata.style.animationName = 'scroll_renata_img';
      imageRenata.style.animationFillMode = 'forwards';
      
      if (orientationPaysageMob.matches) {
        imageRenata.style.animationDuration = '1s';
      } else {
        imageRenata.style.animationDuration = '1.2s';
      }
    }
}

window.addEventListener('load', () => {
    imageRenataScroll(); 
});

window.addEventListener('scroll', imageRenataScroll);



/*************************** TITRE DEEP TISSUE ****************************/

const titreDeep = document.querySelector('.titre_deep_verticale');
titreDeep.style.opacity = '0';

function titreDeepScroll() {
    const { scrollTop, clientHeight } = document.documentElement;
    const topElementToTopViewport = titreDeep.getBoundingClientRect().top;

    const seuil = scrollTop + topElementToTopViewport - clientHeight * 0.70;

    if (scrollTop > seuil) {

      titreDeep.style.opacity = '1';
      titreDeep.style.animationName = 'scroll_deep_titre';
      titreDeep.style.animationFillMode = 'forwards';
      
      if (orientationPaysageMob.matches) {
        titreDeep.style.animationDuration = '1.3s';
      } else {
        titreDeep.style.animationDuration = '1.5s';
      }
    }
}

window.addEventListener('load', () => {
    titreDeepScroll(); 
});

window.addEventListener('scroll', titreDeepScroll);



/*************************** IMAGE DEEP TISSUE ****************************/

const imageDeep = document.querySelector('.img_deep');
imageDeep.style.opacity = '0';

function imageDeepScroll() {
    const { scrollTop, clientHeight } = document.documentElement;
    const topElementToTopViewport = imageDeep.getBoundingClientRect().top;

    const seuil = scrollTop + topElementToTopViewport - clientHeight * 0.75;

    if (scrollTop > seuil) {

      imageDeep.style.opacity = '1';
      imageDeep.style.animationName = 'scroll_deep_img';
      imageDeep.style.animationFillMode = 'forwards';
      
      if (orientationPaysageMob.matches) {
        imageDeep.style.animationDuration = '1.1s';
      } else {
        imageDeep.style.animationDuration = '1.2s';
      }
    }
}

window.addEventListener('load', () => {
    imageDeepScroll(); 
});

window.addEventListener('scroll', imageDeepScroll);



/*************************** TITRE ZO-CO AUSSI ****************************/

const titreSpanZoco = document.querySelector('.span_zoco');
const titreSpanAussi = document.querySelector('.span_aussi');

titreSpanZoco.style.opacity = '0';
titreSpanAussi.style.opacity = '0';


function titreAussiScroll() {
    const { scrollTop, clientHeight } = document.documentElement;
    const topElementToTopViewport = (titreSpanZoco.getBoundingClientRect().top && titreSpanAussi.getBoundingClientRect().top);

    const seuil = scrollTop + topElementToTopViewport - clientHeight * 0.80;

    if (scrollTop > seuil) {

      titreSpanZoco.style.opacity = '1';
      titreSpanZoco.style.animationName = 'scroll_span_zoco';
      titreSpanZoco.style.animationFillMode = 'forwards';
      
      if (orientationPaysageMob.matches) {
        titreSpanZoco.style.animationDuration = '1.2s';
      } else {
        titreSpanZoco.style.animationDuration = '1.5s';
      }

      titreSpanAussi.style.opacity = '1';
      titreSpanAussi.style.animationName = 'scroll_span_aussi';
      titreSpanAussi.style.animationFillMode = 'forwards';
      
      if (orientationPaysageMob.matches) {
        titreSpanAussi.style.animationDuration = '1.5s';
      } else {
        titreSpanAussi.style.animationDuration = '1.7s';
      }
    }
}

window.addEventListener('load', () => {
  titreAussiScroll(); 
});

window.addEventListener('scroll', titreAussiScroll);



/*************************** IMAGE FORMATION ****************************/

const imageFormationA = document.querySelector('.img_formationA');
const imageFormationB = document.querySelector('.img_formationB');

imageFormationA.style.opacity = '0';
imageFormationB.style.opacity = '0';


function imageFormationScroll() {
    const { scrollTop, clientHeight } = document.documentElement;
    const topElementToTopViewport = (imageFormationA.getBoundingClientRect().top && imageFormationB.getBoundingClientRect().top);

    const seuil = scrollTop + topElementToTopViewport - clientHeight * 0.80;

    if (scrollTop > seuil) {

      imageFormationA.style.opacity = '1';
      imageFormationA.style.animationName = 'scroll_img_formation_a';
      imageFormationA.style.animationFillMode = 'forwards';
      
      if (orientationPaysageMob.matches) {
        imageFormationA.style.animationDuration = '1s';
      } else {
        imageFormationA.style.animationDuration = '1.1s';
      }

      imageFormationB.style.opacity = '1';
      imageFormationB.style.animationName = 'scroll_img_formation_b';
      imageFormationB.style.animationFillMode = 'forwards';
      
      if (orientationPaysageMob.matches) {
        imageFormationB.style.animationDuration = '1.2s';
      } else {
        imageFormationB.style.animationDuration = '1.3s';
      }
    }
}

window.addEventListener('load', () => {
  imageFormationScroll(); 
});

window.addEventListener('scroll', imageFormationScroll);



/*************************** IMAGE MASSAGE ENTREPRISE ****************************/

const imageMassageEntreprise = document.querySelector('.img_entreprise');
imageMassageEntreprise.style.opacity = '0';

function imageMassageEntrepriseScroll() {
    const { scrollTop, clientHeight } = document.documentElement;
    const topElementToTopViewport = imageMassageEntreprise.getBoundingClientRect().top;

    const seuil = scrollTop + topElementToTopViewport - clientHeight * 0.80;

    if (scrollTop > seuil) {

      imageMassageEntreprise.style.opacity = '1';
      imageMassageEntreprise.style.animationName = 'scroll_img_massage_entreprise';
      imageMassageEntreprise.style.animationFillMode = 'forwards';
      
      if (orientationPaysageMob.matches) {
        imageMassageEntreprise.style.animationDuration = '1.2s';
      } else {
        imageMassageEntreprise.style.animationDuration = '1.5s';
      }
    }
}

window.addEventListener('load', () => {
  imageMassageEntrepriseScroll(); 
});

window.addEventListener('scroll', imageMassageEntrepriseScroll);



/*************************** IMAGE SOPHROLOGIE ****************************/

const imageSophrologie = document.querySelector('.img_sophrologie');
imageSophrologie.style.opacity = '0';

function imageSophrologieScroll() {
    const { scrollTop, clientHeight } = document.documentElement;
    const topElementToTopViewport = imageSophrologie.getBoundingClientRect().top;

    const seuil = scrollTop + topElementToTopViewport - clientHeight * 0.90;

    if (scrollTop > seuil) {

      imageSophrologie.style.opacity = '1';
      imageSophrologie.style.animationName = 'scroll_img_sophrologie';
      imageSophrologie.style.animationFillMode = 'forwards';
      
      if (orientationPaysageMob.matches) {
        imageSophrologie.style.animationDuration = '1.2s';
      } else {
        imageSophrologie.style.animationDuration = '1.5s';
      }
    }
}

window.addEventListener('load', () => {
  imageSophrologieScroll(); 
});

window.addEventListener('scroll', imageSophrologieScroll);