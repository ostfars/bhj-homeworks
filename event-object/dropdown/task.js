const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const valuesList = Array.from(document.getElementsByClassName("dropdown__link"));

for (i=0; i < valuesList.length; i++) {
  valuesList[i].onclick = setButtonValue;
}

function setDropdownListActive() {
  dropdownList.classList.add("dropdown__list_active");
}

function setButtonValue() {
  dropdownValue.textContent = this.textContent;
  dropdownList.classList.remove("dropdown__list_active");
  return false
}

dropdownValue.addEventListener('click', setDropdownListActive)



console.log(dropdownValue);
console.log(valuesList);