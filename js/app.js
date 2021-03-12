const navBtn = document.getElementById('nav-btn')
const closeBtn = document.getElementById('close-btn')
const sidebar = document.getElementById('sidebar')

navBtn.addEventListener('click', function () {
  sidebar.classList.add('show-sidebar')
})
closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar')
})
