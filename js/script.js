const sidebar = document.querySelector('.sidebar-nav');
const switchToggle = document.querySelector('.toggle-switch');
const body = document.querySelector('body');
const buttonClose = document.querySelector('.sidebar-close');
const modeSelect = document.querySelector('.sidebar-mode');

//Add mode class to body

switchToggle.addEventListener('click', () => {
  body.classList.toggle('mode');
  modeContains();
});

//Add close class to the sidebar

buttonClose.addEventListener('click', () => {
  sidebar.classList.toggle('close');
});

//Change span tag text

function modeContains() {
  if (body.classList.contains('mode')) {
    modeSelect.innerText = 'Darkmode';
  } else {
    modeSelect.innerText = 'Lightmode';
  }
}

modeContains();
