"use strict";

const sideBar = document.querySelector(".side");
const menuToggle = document.getElementById("menuToggle");
const closeMenu = document.querySelector("#closeMenu");
const header = document.getElementById("header");
const sideCloseContainer = document.querySelector(".sideCloseContainer");

menuToggle.addEventListener("click", () => {
    sideBar.style.display = "block";
});
closeMenu.addEventListener("click", () => {
    sideBar.style.display = "none";
});


