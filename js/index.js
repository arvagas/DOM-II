// Your code goes here

// Global Variables
let switchFlip = 0

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
window.addEventListener('load', () => {
    logoHead.textContent = logoHead.textContent + ' - All Aboard!'
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
        if (item.style.width === '100%') {
            item.style.width = '50%'  
        }
        else {
            item.style.width = '100%'
        }
    })
})
allImg.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.borderColor = 'red'
        item.style.borderStyle = 'solid'
        item.style.borderWidth = '3px'
        item.style.borderRadius = '1000px'
    })
})
allImg.forEach(item => {
    item.addEventListener('mouseout', () => {
        item.style.borderColor = 'white'
        item.style.borderStyle = 'none'
        item.style.borderWidth = '3px'
        item.style.borderRadius = '10px'
    })
})

// Button Events
signUpBtn.forEach(item => {
    item.addEventListener('click',() => {
        alert('NEVER LUCKY - RESERVATIONS FULL')
    })
})

// Text Events


// Event Functions
function nightMode() {
    if (switchFlip === 0) {
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
        switchFlip = 1
    }
    else {
        allP.forEach(item => {
            item.style.color = 'black'
            item.style.backgroundColor = 'white'
        })
        allA.forEach(item => {
            item.style.color = 'black'
        })
        allH1.forEach(item => {
            item.style.color = 'black'
        })
        allH2.forEach(item => {
            item.style.color = 'black'
        })
        allH4.forEach(item => {
            item.style.color = 'black'
        })
        container.forEach(item => {
            item.style.backgroundColor = 'white'
        })
        switchFlip = 0
    }
}

// function imgBorderChange(item) {
//     item.style.borderColor = 'red'
//     item.style.borderStyle = 'solid'
//     item.style.borderWidth = '3px'
//     item.style.borderRadius = '1000px'
// }