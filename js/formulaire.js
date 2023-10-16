/************************* FORMULAIRE ***************************/

function validateForm() {

    const validNom = validateNom();
    const validPrenom = validatePrenom();
    const validEmail = validateEmail();
    const validMessage = validateMessage();
    
    if (validNom && validPrenom && validEmail && validMessage) {
      return true; // Tous les champs sont valides, permettre la soumission
    } else {
      return false; // Au moins un champ est invalide, bloquer la soumission
    }
  }


  
  /*---------- VALIDATION NOM ----------*/
  
  function validateNom() {
    const nomInput = document.getElementById("nom_id");
    const nom = nomInput.value;
  
    const nomPattern = /^[\p{L}\s\-]+$/u;
  
    if (!nomPattern.test(nom)) {
      document.getElementById("error_nom").innerHTML = "Nom invalide";
      return false;
    } else {
      document.getElementById("error_nom").innerHTML = "";
      return true;
    }
  }
  
  // Gestionnaire d'événements "pageshow" pour effacer les messages d'erreur lorsque on reviens en arrière
  window.addEventListener('pageshow', function (event) {
    // Efface les messages d'erreur
    document.getElementById("error_nom").innerHTML = "";
  });
  
  // Gestionnaire d'événements "beforeunload" pour réinitialiser les champs du formulaire
  window.addEventListener('beforeunload', function (event) {
    // Réinitialisez les valeurs par défault
    document.getElementById("nom_id").value = "";
  });
  


  /*---------- VALIDATION PRENOM ----------*/
  
  function validatePrenom() {
    const prenomInput = document.getElementById("prenom_id");
    const prenom = prenomInput.value;
  
    const prenomPattern = /^[\p{L}\s\-]+$/u;
  
    if (!prenomPattern.test(prenom)) {
      document.getElementById("error_prenom").innerHTML = "Prénom invalide";
      return false;
    } else {
      document.getElementById("error_prenom").innerHTML = "";
      return true;
    }
  }
  
  window.addEventListener('pageshow', function (event) {
    document.getElementById("error_prenom").innerHTML = "";
  });
  
  window.addEventListener('beforeunload', function (event) {
    document.getElementById("prenom_id").value = "";
  });
  


  /*---------- VALIDATION EMAIL ----------*/
  
  function validateEmail() {
    const emailInput = document.getElementById("email_id");
    const email = emailInput.value;
  
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    if (!emailPattern.test(email)) {
      document.getElementById("error_email").innerHTML = "Adresse e-mail invalide";
      return false;
    } else {
        document.getElementById("error_email").innerHTML = ""; // Efface le message d'erreur précédent
        return true;
    }
  }
  
  window.addEventListener('pageshow', function (event) {
    document.getElementById("error_email").innerHTML = "";
  });
  
  window.addEventListener('beforeunload', function (event) {
    document.getElementById("email_id").value = "";
  });
  

  
  /*---------- VALIDATION MESSAGE -----------*/
  
  function validateMessage() {
    const messageInput = document.getElementById("message_id");
    const message = messageInput.value;
  
    const messagePattern = /^.{10,}$/; // Au moins 10 caractères
  
    if (!messagePattern.test(message)) {
      document.getElementById("error_message").innerHTML = "Message invalide (au moins 10 caractères)";
      return false;
    } else {
      document.getElementById("error_message").innerHTML = "";
      return true;
    }
  }
  
  window.addEventListener('pageshow', function (event) {
    document.getElementById("error_message").innerHTML = "";
  });
  
  window.addEventListener('beforeunload', function (event) {
    document.getElementById("message_id").value = "";
  });
  
  /********************************************************/
  
  
  
  /********** CHECKBOX (CONDITION DONNEE PESONNEL) *********/
  
  document.addEventListener('DOMContentLoaded', function() { // Dom... permet d'utiliser le script dés que la structure html est prete et avant même que le reste ne soit chargé
    const formulaire = document.getElementById('form_contact_id');
    const checkbox = document.getElementById('checkbox_id');
    const boutonEnvoyer = document.getElementById('bouton_contact_id');
    
    boutonEnvoyer.addEventListener('click', function(event) {
      if (!checkbox.checked) {
        event.preventDefault(); // Empêche l'envoi du formulaire si la case n'est pas cochée
        document.getElementById("error_checkbox").innerHTML = "Veuillez cocher la case pour accepter";
      }
    });
  });
  
  window.addEventListener('pageshow', function (event) {
    document.getElementById("error_checkbox").innerHTML = "";
  });
  
  window.addEventListener('beforeunload', function (event) {
    document.getElementById("checkbox_id").checked = false;
  });