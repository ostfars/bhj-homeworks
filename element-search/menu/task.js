const links = document.getElementsByClassName("menu__link");
const subMenues = document.getElementsByClassName("menu_sub");

for (i = 0; i < links.length; i++) {
  let link = links[i];
  link.onclick = () => {
    const subMenu = link.closest("li").querySelector("ul");
    if (subMenu !== null) {
      for (i = 0; i < subMenues.length; i++) {
        subMenues[i].classList.remove("menu_active")
      }
      subMenu.classList.add("menu_active")
      console.log(link.closest("li").querySelector("ul"))
      return false
    }
  }
}
