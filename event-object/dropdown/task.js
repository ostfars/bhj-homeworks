const dropdownMenusList = Array.from(document.querySelectorAll(".dropdown"));
const dropdownLinks = Array.from(document.getElementsByClassName("dropdown__link"))

for (i = 0; i < dropdownMenusList.length; i++) {
  dropdownMenusList[i].querySelector(".dropdown__value").onclick = setDropdownListActive;  
}

for (i=0; i < dropdownLinks.length; i++) {
  dropdownLinks[i].onclick = setButtonValue;
  }

function setDropdownListActive() {
  this.closest(".dropdown").querySelector(".dropdown__list").classList.add("dropdown__list_active");
  //  Так тоже работает:
  // this.nextElementSibling.classList.add("dropdown__list_active");
}

function setButtonValue() {
    this.closest(".dropdown").querySelector(".dropdown__value").textContent = this.textContent;
    this.closest(".dropdown").querySelector(".dropdown__list").classList.remove("dropdown__list_active");
    return false
  }