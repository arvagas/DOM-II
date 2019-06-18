// Your code goes here

// Selectors
const allA = document.querySelectorAll('a')
const allP = document.querySelectorAll('p')
const allH1 = document.querySelectorAll('h1')
const allH2 = document.querySelectorAll('h2')
const allH4 = document.querySelectorAll('h4')
const allImg = document.querySelectorAll('img')
const logoHead = document.querySelector('.logo-heading')
const navLinks = document.querySelectorAll('.nav-link')
const signUpBtn = document.querySelectorAll('.btn')
const container = document.querySelectorAll('.container')

// Window Events
window.addEventListener('resize', () => {
    logoHead.textContent = `${window.innerWidth} x ${window.innerHeight}`
})

// Logo Events
logoHead.addEventListener('dblclick', nightMode)

// Navigation Bar Events
navLinks.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault()
    })
})

// Image Events
allImg.forEach(item => {
    item.addEventListener('click', () => {
        item.style.width = '50%'
    })
})

// Button Events
signUpBtn.forEach(item => {
    item.addEventListener('click',() => {
        alert('NEVER LUCKY - RESERVATIONS FULL')
    })
})

// Event Functions

function nightMode() {
    allP.forEach(item => {
        item.style.color = 'white'
        item.style.backgroundColor = 'darkgrey'
    })
    allA.forEach(item => {
        item.style.color = 'white'
    })
    allH1.forEach(item => {
        item.style.color = 'white'
    })
    allH2.forEach(item => {
        item.style.color = 'white'
    })
    allH4.forEach(item => {
        item.style.color = 'white'
    })
    container.forEach(item => {
        item.style.backgroundColor = 'grey'
    })
}