const modal = document.querySelector('.modalSignIn')
const modalLogIn = document.querySelector('.modalLogIn')
const btn = document.querySelector('.signInButton')
const btnLogIn = document.querySelector('.logInButton')
const close = document.querySelector('.close')
const closeLogIn = document.querySelector('.closeLogIn')

btn.onclick = function () {
    modal.style.display = "block";
}

btnLogIn.onclick = function () {
    modalLogIn.style.display = "block";
}

close.onclick = function () {
    modal.style.display = "none";
    modalLogIn.style.display = "none";
}

closeLogIn.onclick = function () {
    modalLogIn.style.display = "none";
}

window.onclick = function () {
    if (event.target == modal || event.target == modalLogIn) {
        modal.style.display = "none";
        modalLogIn.style.display = "none";
    }
}