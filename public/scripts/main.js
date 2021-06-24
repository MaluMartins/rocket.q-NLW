import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//pegar todos os botões que existem com a class check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    //adicionar a escuta
    button.addEventListener("click", (event) => handleClick(event, false))
})

//quando o botão delete for clicado, abre a modal
const deleteButton = document.querySelectorAll(".actions .delete")

deleteButton.forEach(button => {
    button.addEventListener("click", handleClick)
})

function handleClick(event, check = true) {
    event.preventDefault() //não altera a URL (#)
    const text = check ? "Excluir" : "Marcar como lida"
    const slug = check ? "delete" : "check"

    const roomId = document.querySelector('#room-id').CDATA_SECTION_NODE.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/room/${roomId}/:question/${slug}`)

    modalTitle.innerHTML = check ? "Excluir pergunta" : "Marcar como lida"
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`
    check ? modalButton.classList.add("red") : modalButton.classList.remove("red") 

    //abrir modal
    modal.open()
}