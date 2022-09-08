const form = document.querySelector("form");
const input = document.querySelector(".form__inputs");
const warning = document.querySelector(".form__warning");
const links = document.querySelectorAll(".list__links__socialmedia");
const img = document.querySelectorAll(".list__links__socialmedia__image");

links.forEach(function (item, indice) {
  item.addEventListener("mouseover", (e) => {
    item.style.backgroundColor = " #4f7df3";
    console.log(img[indice])
    img[indice].style.filter =
      "invert(99%) sepia(51%) saturate(2%) hue-rotate(323deg) brightness(110%) contrast(100%)";
  });

  item.addEventListener("mouseout", (e) => {
    item.style.backgroundColor = "white";
    img[indice].style.filter ="invert(39%) sepia(85%) saturate(642%) hue-rotate(190deg) brightness(104%) contrast(91%)";
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  warning.classList.remove("active");
  input.style.border = "0.08rem solid #c2d3ff";
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
    console.log(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)
    );
    return;
  } else {
    warning.classList.toggle("active");
    input.style.border = "0.08rem solid #ff5263";
  }
});
