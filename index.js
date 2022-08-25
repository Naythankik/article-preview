let shareButton = document.querySelector(".share-button");
let footer = document.querySelector(".footer");

shareButton.addEventListener("click", function () {
  shareButton.style.display = "none";
  if (window.innerWidth < 751) {
    footer.classList.add("mobile");
    console.log(footer);
  } else {
    footer.classList.add("desktop");
    console.log(footer);
  }
});

footer.addEventListener("click", function () {
  this.style.display = "none";
  shareButton.style.display = "flex";
});
