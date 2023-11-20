const sidebar = document.querySelector('.sidebar-nav')
const switchToggle = document.querySelector('.toggle-switch')
const body = document.querySelector('body')
const buttonClose = document.querySelector('.sidebar-close')

switchToggle.addEventListener('click', () => {
    body.classList.toggle('mode')
});

buttonClose.addEventListener('click', () => {
    sidebar.classList.toggle('close')
});
