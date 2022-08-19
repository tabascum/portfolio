//Defining a preloader event

//Typewriter effect 
/* let typed = window.querySelector("typed-out");

window.querySelector("typed-out"); */

//modal functions
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

//
const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

//each time the buttons are clicked the modal opens or closes
[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});
