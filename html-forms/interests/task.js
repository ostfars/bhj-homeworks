const interestCheckBoxes = Array.from(document.querySelectorAll('.interest__check'));

for (let i = 0; i < interestCheckBoxes.length; i++) {
  interestCheckBoxes[i].checked = false;
}

interestCheckBoxes.forEach((check) => check.addEventListener('click', checkAll))

function checkAll(event) {
  const parent = event.target.closest('.interest');
  const children = Array.from(parent.querySelectorAll('.interest__check'));

  for (let i = 0; i < children.length; i++) {
    children[i].checked = this.checked;
  }
}


