const list = document.getElementById("list")
const description = document.getElementById("description")
function handleSubmitNewTask (event) {
    event.preventDefault()
    
    const descriptionValue = description.value 
   
    if (descriptionValue!="") {
        const hasItem = isDuplicateTask(descriptionValue)
        if (!hasItem) {
             addNewTaskInList (descriptionValue)
             descriptionValue = ""
        }
    }
}

function addNewTaskInList (description) {
    console.log(description)
    
    const li = document.createElement("li")
    li.textContent = description

    list.appendChild(li)

}
function isDuplicateTask (description) {
    const allDescription = Array.from (list.children)
    console.log(allDescription)
   return allDescription.some( (itemDescription)=>description==itemDescription.textContent)

}

function addTaskByPressingEnter(event) {
console.log(event)
}
description.addEventListener ("keydown", addTaskByPressingEnter) 