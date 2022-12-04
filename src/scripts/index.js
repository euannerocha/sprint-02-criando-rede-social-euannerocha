function renderUserAccount(array) {
    let userAccount = document.querySelector('.userAccount')
    userAccount.innerHTML = ''

    for (let i = 0; i < array.length; i++) {

        if (array[i].id === 1) {
            let liUserAccount = document.createElement('li')
            let imgUserAccount = document.createElement('img')
            let nameUserAccount = document.createElement('h1')
            let officeUserAccount = document.createElement('p')

            // imgUserAccount.classList.add('imgUserAccount')
            // nameUserAccount.classList.add('nameUserAccount')
            // officeUserAccount.classList.add('officeUserAccount')

            imgUserAccount.src = array[i].img
            nameUserAccount.innerText = array[i].user
            officeUserAccount.innerText = array[i].stack

            userAccount.append(liUserAccount)
            liUserAccount.append(imgUserAccount, nameUserAccount, officeUserAccount)
        }
    }
}
renderUserAccount(users)



function activeButton(parameter) {
    let on = true

    parameter.forEach((input)=> {

        if (input.value === "") {
            on = false
        }
    });
    return on;
}



let inputs = document.querySelectorAll('input')
let button = document.querySelector('.buttonPostar')

inputs.forEach((input)=> {

    input.addEventListener("keyup", ()=> {
        if (activeButton(inputs)) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    });
});



function renderSugestionsToFollow(array) {
    let sugestionsToFollow = document.querySelector('.sugestionsToFollow')
    sugestionsToFollow.innerHTML = ''

    for (let i = 0; i < array.length; i++) {

        if (array[i].id === 3 || array[i].id === 7 || array[i].id === 6) {
            let liSugestion = document.createElement('li')
            let imgSugestion = document.createElement('img')
            let nameSugestion = document.createElement('h1')
            let officeSugestion = document.createElement('p')
            let buttonFollowSugestion = document.createElement('button')

            imgSugestion.src = array[i].img
            nameSugestion.innerText = array[i].user
            officeSugestion.innerText = array[i].stack
            buttonFollowSugestion.innerText = 'Seguir'

            sugestionsToFollow.append(liSugestion)
            liSugestion.append(imgSugestion, nameSugestion, officeSugestion, buttonFollowSugestion)
        }
    }
}
renderSugestionsToFollow(users)
