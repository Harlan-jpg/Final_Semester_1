let addBtn = document.getElementById("addBtn")
let closeModal = document.getElementById("close-modal")
let modalBackdrop = document.getElementById("modal-backdrop")
let newTaskForm = document.getElementById("new-task-form")
let taskTitle = document.getElementById("task-title")
let taskDesc = document.getElementById("task-desc")
let cancelModal = document.getElementById("cancel-modal")
let createModal = document.getElementById("create-modal")
let todoSection = document.getElementById("todo-section")

class TodoListItem {
    constructor (title, description) {
        this.title = title
        this.description = description
        this.createdAt = new Date()
    }
}

var listItems = []

function updateCards() {
    todoSection.innerHTML = ""
    listItems.forEach((item, index) => {
        let card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
            <h4>${item.title}</h4>
            <p>${item.description}</p>
            <div class="cardBtns">
                <button class="exit" data-id="${index}">🗑️</button>
            </div>
        `
        todoSection.appendChild(card)
        card.querySelector(".exit").onclick = () => {
            listItems.splice(index, 1)
            updateCards()
        }
    })
}

function closeTheModal(){
    modalBackdrop.setAttribute("hidden", "")
}

addBtn.onclick = () => modalBackdrop.removeAttribute("hidden")
closeModal.onclick = cancelModal.onclick = closeTheModal

createModal.onclick = (e) => {
    e.preventDefault()
    listItems.push(new TodoListItem(taskTitle.value, taskDesc.value))
    updateCards()
    taskTitle.value = ""
    taskDesc.value = ""
    closeTheModal()
}
