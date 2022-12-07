const button = document.querySelector("button");
const modal = document.querySelector("dialog");
const buttonSend = document.querySelector("dialog button");

button.onclick = function () {
    modal.showModal()
}

buttonSend.onclick = function () {
    modal.close()
}