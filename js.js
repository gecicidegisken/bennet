let mi1 = document.getElementById("menu-item-1");
let mi2 = document.getElementById("menu-item-2");
let mi3 = document.getElementById("menu-item-3");
let mi4 = document.getElementById("menu-item-4");
let border = document.getElementById("title-container");
function GoBack() {
  border.style.boxShadow =
    "10px -10px 0 -3px white, 10px -10px var(--green), 20px -20px 0 -3px white, 20px -20px var(--blue), 30px -30px 0 -3px white, 30px -30px var(--orange), 40px -40px 0 -3px white, 40px -40px var(--purple)";
}

mi1.addEventListener(
  "mouseover",
  function (event) {
    border.style.boxShadow =
      "20px -20px 0 -3px var(--green), 20px -20px var(--green), 30px -30px 0 -3px white, 30px -30px var(--blue), 40px -40px 0 -3px white, 40px -40px var(--orange),50px -50px 0 -3px white, 50px -50px var(--purple)";
  });
mi1.addEventListener("mouseleave", GoBack, false);

mi2.addEventListener("mouseover", function (event) {
  border.style.boxShadow =
    "10px -10px 0 -3px white, 10px -10px var(--green), 30px -30px 0 -3px var(--blue), 30px -30px var(--blue), 40px -40px 0 -3px white, 40px -40px var(--orange),50px -50px 0 -3px white, 50px -50px var(--purple)";
});
mi2.addEventListener("mouseleave", GoBack);

mi3.addEventListener("mouseover", function (event) {
  border.style.boxShadow =
    "10px -10px 0 -3px white, 10px -10px var(--green), 20px -20px 0 -3px white, 20px -20px var(--blue), 40px -40px 0 -3px var(--orange), 40px -40px var(--orange),50px -50px 0 -3px white, 50px -50px var(--purple)";
});

mi3.addEventListener("mouseleave", GoBack);

mi4.addEventListener("mouseover", function (event) {
  border.style.boxShadow =
    "10px -10px 0 -3px white, 10px -10px var(--green), 20px -20px 0 -3px white, 20px -20px var(--blue), 30px -30px 0 -3px white, 30px -30px var(--orange),50px -50px 0 -3px var(--purple), 50px -50px var(--purple)";
});
mi4.addEventListener("mouseleave", GoBack);
