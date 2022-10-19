/* contact form validation */

let userName = document.querySelector("#name");
let nameLabel = document.querySelector("#name-label");
let email = document.querySelector("#email");
let emailLabel = document.querySelector("#email-label");

userName.oninput = () => {
  if (userName.value.length <= 2) {
    nameLabel.setAttribute("style", "color: red");
    nameLabel.innerHTML = "username * should have at least 3 characters";
  } else {
    nameLabel.setAttribute("style", "color: limegreen");
    nameLabel.innerHTML = "name" + " " + "&#10003";
  }
};

email.oninput = () => {
  if (email.value.length < 7) {
    emailLabel.setAttribute("style", "color: red");
    emailLabel.innerHTML = "email * ex: example@email.com";
  } else {
    emailLabel.setAttribute("style", "color: limegreen");
    emailLabel.innerHTML = "email" + " " + "&#10003";
  }
};

/* toggle button for small screens */

const toggle = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");

toggle.onclick = () => {
  navbarLinks.classList.toggle("active");
};
