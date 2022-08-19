const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));

tooltips.forEach(tip => {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tip.after(tooltip);
  tip.nextSibling.innerHTML = tip.title;
  


  tip.addEventListener('click', (event) => {
    event.preventDefault();

    tipPosition = tip.getBoundingClientRect();
    tip.nextSibling.setAttribute('style', `left: ${tipPosition.left}px;`)
    
    if (document.querySelector('.tooltip_active')) {
      document.querySelector('.tooltip_active').classList.remove(('tooltip_active'));
    }

    tip.nextSibling.classList.add('tooltip_active');

    console.log(tipPosition)
  })
})

