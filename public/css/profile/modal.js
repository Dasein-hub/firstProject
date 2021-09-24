const modal = document.querySelector('.modal')
const btn = document.querySelector('.modalBtn')
const close = document.querySelector('.close')

btn.onclick = function () {
    modal.style.display = "block";
}

close.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function () {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}