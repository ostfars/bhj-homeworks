const tabsArray = Array.from(document.querySelectorAll(".tab"));
const tabsContentArray = Array.from(document.querySelectorAll(".tab__content"));

function switchTab() {
  this.closest(".tabs").querySelector(".tab_active").classList.remove("tab_active");
  this.classList.add("tab_active")

  this.closest(".tabs").querySelector(".tab__content_active").classList.remove("tab__content_active");
  tabsContentArray[tabsArray.indexOf(this)].classList.add("tab__content_active") 
}

for (i = 0; i < tabsArray.length; i++) {
  tabsArray[i].onclick = switchTab;
  }