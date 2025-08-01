/* ========== MENU SHOW ========== */
const toggle = document.getElementById('nav-toggle'),
      nav = document.getElementById('nav-menu')

if(toggle && nav){
    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu')
    })
}

/* ========== REMOVE MENU MOBILE ========== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    nav.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ========== SCROLL ACTIVE LINK ========== */
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
})

/* ========== SCROLL REVEAL ANIMATION ========== */
const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 1500,
  reset: true
})

sr.reveal('.home__title, .section__title', {})
sr.reveal('.home__subtitle, .home__description, .button, .section__subtitle', { delay: 200 })
sr.reveal('.home__img, .about__img', { origin: 'right', delay: 400 })
sr.reveal('.home__social-icon', { interval: 200 })

/* ========== DARK / LIGHT THEME ========== */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})/* ========== MENU SHOW ========== */
const toggle = document.getElementById('nav-toggle'),
      nav = document.getElementById('nav-menu')

if(toggle && nav){
    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu')
    })
}

/* ========== REMOVE MENU MOBILE ========== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    nav.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ========== SCROLL ACTIVE LINK ========== */
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
})

/* ========== SCROLL REVEAL ANIMATION ========== */
const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 1500,
  reset: true
})

sr.reveal('.home__title, .section__title', {})
sr.reveal('.home__subtitle, .home__description, .button, .section__subtitle', { delay: 200 })
sr.reveal('.home__img, .about__img', { origin: 'right', delay: 400 })
sr.reveal('.home__social-icon', { interval: 200 })

/* ========== DARK / LIGHT THEME ========== */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})