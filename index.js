// let scrolled = window.scrollY
let navbar = document.getElementById('nav')
let cfirst = document.getElementById('contactfirstsec')
let midsec = document.getElementById('midsec')
let csecond = document.querySelector('.csecond')
let input = document.getElementById('inp')
let c1 = document.getElementById('c1')
let c2 = document.getElementById('c2')
let c3 = document.getElementById('c3')
let nameWarn = document.getElementById('nameWarn')

// checking sccroll position of the window and animating elements according to that
window.onload = ()=>{
    if(window.scrollY >= 1045){
        cfirst.style.transform = 'translateX(0px)'
        csecond.style.transform = 'translateX(0px)'
    }
    if(window.scrollY >= 142){
        navbar.classList.add('bgcolor')
    }
}

// Adding classList to NavBar dynamically through JavaScipt and changing cards width according to the screen width.
window.addEventListener("scroll", () => {
    let scrollit = window.scrollY
    if (scrollit > 142) {
        navbar.classList.add('bgcolor')
    } else {
        navbar.classList.remove('bgcolor')
    }

    if (scrollit > 1045) {
        cfirst.style.transform = 'translateX(0px)'
        csecond.style.transform = 'translateX(0px)'
    }
    if (scrollit > 167 && screen.width >= 728) {
        c1.style.width = '29%'
        c2.style.height = '400px'
        c3.style.width = '29%'
    }
    if(screen.width <= 728){
        c1.style.width = '83%'
        c3.style.width = '83%'
    }
})
let proceed = true
// checking if user has proceed leaving an empty input from input of contact form-.
let nameInput = document.getElementById('nameInput')
let emailInput = document.getElementById('emailInput')
nameInput.addEventListener('focusin', () => {
    if(input.style.border == "2px solid red"){
    input.style.border = ''
    input.classList.remove('shake')
    nameWarn.style.visibility = 'hidden'
    }
})
nameInput.addEventListener('focusout', () => {
    console.log(nameInput.value);    
    if (nameInput.value == '' || nameInput.value.trim().length <= 2) {        
        input.style.border = "2px solid red"
        input.classList.add('shake')
        nameWarn.style.visibility = 'visible'
        proceed = false
    } else{
        proceed = true
    }
})
emailInput.addEventListener('focusin', ()=>{
    let emailInp = document.getElementById('emailInp')
    if (emailInp.style.border == "2px solid red") {
        emailInp.style.border = ''
        emailInp.classList.remove('shake')
    }
})
// checking email input value with regex whetehre it is valid email or not
emailInput.addEventListener('focusout', ()=>{
    let emailInp = document.getElementById('emailInp')
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!regex.test(emailInput.value)) {
        emailInp.style.border = "2px solid red"
        emailInp.classList.add('shake')
        proceed = false
    } else{
        proceed = true
    }
})
// adding submit ebent listener to contact form
let contactForm = document.getElementById('contactForm')
contactForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    if (proceed == false || nameInput.value.length == 0 || emailInput.value.length == 0) {
        input.style.border = "2px solid red"
        input.classList.add('shake')
        emailInp.style.border = "2px solid red"
        emailInp.classList.add('shake')
    }
})
// Adding Blurred effect when hovering over a card in Services Section
c1.addEventListener('mouseover', () => {
    add(c1, c2, c3)
})
c2.addEventListener('mouseover', () => {
    add(c2, c1, c3)
})
c3.addEventListener('mouseover', () => {
    add(c3, c2, c1)
})

c1.addEventListener('mouseout', () => {
    remove(c1, c2, c3)
})
c2.addEventListener('mouseout', () => {
    remove(c2, c1, c3)
})
c3.addEventListener('mouseout', () => {
    remove(c3, c2, c1)
})

function add(a, b, c) {
    a.classList.add('hovered')
    b.classList.add('blurred')
    c.classList.add('blurred')
}
function remove(a, b, c) {
    a.classList.remove('hovered')
    b.classList.remove('blurred')
    c.classList.remove('blurred')
}
// Expanding NavBar When Clicking Hamburgur Icon
let nav = document.querySelector('nav')
let ham = document.querySelector('.ham')

let click = 1
ham.addEventListener('click', () => {
    if (click == 1) {
        nav.style.height = '7rem'
        ham.style.transform = 'rotate(90deg)'
        click++
    }
    else if (click == 2) {
        nav.style.height = '5rem'
        ham.style.transform = 'rotate(0deg)'
        click--
    }
})
