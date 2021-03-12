const navBtn = document.getElementById('nav-btn')
const closeBtn = document.getElementById('close-btn')
const sidebar = document.getElementById('sidebar')

const navbar = document.getElementById('nav')

// add fixed class to navbar
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add('navbar-fixed')
  } else {
    navbar.classList.remove('navbar-fixed')
  }
})

// show sidebar
navBtn.addEventListener('click', function () {
  sidebar.classList.add('show-sidebar')
})
closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar')
})
