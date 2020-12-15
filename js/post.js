const menu = document.querySelector('.left_bar')
const openBar = document.querySelector('.open')
const closeBar = document.querySelector('.close')

openBar.addEventListener('click', ()=> {
    menu.style.display = "flex"
    closeBar.style.display = "block"

})
closeBar.addEventListener('click', ()=> {
    menu.style.display = "none"
    closeBar.style.display = "none"

})