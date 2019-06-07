var toggle = document.getElementById('js--navigation__toggle')
var menu = document.getElementById('js--navigation__menu')

function classToggle() {
  menu.classList.toggle('navigation--hide')
}

toggle.addEventListener('click', classToggle)
classToggle()
