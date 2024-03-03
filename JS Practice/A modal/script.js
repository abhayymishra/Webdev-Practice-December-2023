const openBtn = document.getElementById("openBtn");
const crossIcon = document.getElementsByClassName("cross-icon");
const modalContent = document.getElementsByClassName("modal-content");

openBtn.addEventListener("click", function () {
  if (modalContent.style.visibility === "hidden") {
    modalContent.style.visibility = "visible";
  }
});
