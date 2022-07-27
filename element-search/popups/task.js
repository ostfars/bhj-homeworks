const popupMain = document.getElementById("modal_main");
const popupSuccess = document.getElementById("modal_success");
const closeTriggers = document.getElementsByClassName("modal__close");

popupMain.classList.add("modal_active");

const closeArr = Array.from(closeTriggers);
for (i = 0; i < closeArr.length; i++) {
  closeArr[i].onclick = () => {
    popupMain.classList.remove("modal_active");
    popupSuccess.classList.remove("modal_active");
  }
}

const showSuccessButton = document.querySelector("a.show-success")

showSuccessButton.onclick = () => {
  popupMain.classList.remove("modal_active");
  popupSuccess.classList.add("modal_active");
}
