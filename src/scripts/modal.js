let closeButton = document.querySelector(".close")
let divBackground = document.querySelector(".divBackground")


let openModal = document.querySelector(".openModal")

closeButton.addEventListener('click', ()=>{
    divBackground.style.display = 'none'
})

openModal.addEventListener('click', ()=>{
    divBackground.style.display = 'unset'
})