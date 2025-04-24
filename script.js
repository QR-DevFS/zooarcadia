const popover = document.getElementById("popup");
const popover2 = document.getElementById("popup2");
const popover3 = document.getElementById("popup3");
const bouton = document.getElementById("bouton");
const bouton2 = document.getElementById("bouton2");
const bouton3 = document.getElementById("bouton3");
const allig = document.getElementById("aligator");
let openframe = document.getElementById("frame1");
let closeframe = document.getElementById("close");
bouton.onclick = function () {
  popover.style.display = "block";
};
bouton2.onclick = function () {
  popover2.style.display = "block";
};

bouton3.onclick = function () {
  popover3.style.display = "block";
};
let ferme = document.getElementById("ferme1");
let ferme2 = document.getElementById("ferme2");
let ferme3 = document.getElementById("ferme3");

ferme2.onclick = function () {
  popover2.style.display = "none";
};
ferme.onclick = function () {
  popover.style.display = "none";
};
ferme3.onclick = function () {
  popover3.style.display = "none";
};

allig.onclick = function () {
  openframe.style.display = "block";
  closeframe.style.display = "inline";
};
closeframe.onclick = function () {
  openframe.style.display = "none";
  closeframe.style.display = "none";
};
