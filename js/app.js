const body = document.body
const navToggle = document.querySelector('#navToggle')
const nav = document.querySelector('#navLinks')
const viewSize = window.innerWidth

let lastScroll = 0

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY
  
  if (currentScroll <= 0 ) return body.classList.remove('scroll-up')  
  if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
    body.classList.remove('scroll-up')
    body.classList.add('scroll-down')
  } else if ( currentScroll < lastScroll && body.classList.contains('scroll-down')) {
    body.classList.remove('scroll-down')  
    body.classList.add('scroll-up')
  }
  lastScroll = currentScroll
})

if (viewSize > 920 && nav.classList.contains('nav-active')) { nav.classList.remove('nav-active') }
navToggle.addEventListener('click', () => { nav.classList.toggle('nav-active') })
nav.addEventListener('click', () => { nav.classList.toggle('nav-active') })


// *** POP-UP MODALS *** 

const btnWhoWeAre = document.getElementById('whoWeAreReadMore')
const btnWeServe = document.getElementById('weServeReadMore')
const closeWWA = document.getElementById('closeWWA')
const closeWS = document.getElementById('closeWS')
const closeFD = document.getElementById('closeFD')
const dialogWhoWeAre = document.getElementById('whoWeAreDialog')
const dialogWeServe = document.getElementById('weServeDialog')
const btnFormsDownloads = document.getElementById('formsDownloads')
const dialogFormsDownloads = document.getElementById('formsDownloadsDialog')

btnWhoWeAre.addEventListener('click', () => { dialogWhoWeAre.showModal() })
btnWeServe.addEventListener('click', () => { dialogWeServe.showModal() })
btnFormsDownloads.addEventListener('click', () => { dialogFormsDownloads.showModal() })
closeFD.addEventListener('click', () => {dialogFormsDownloads.close() })
closeWS.addEventListener('click', () => { dialogWeServe.close() })
closeWWA.addEventListener('click', () => { dialogWhoWeAre.close() })






