const button = document.getElementById("button")
const input = document.getElementById("input")

button.onclick = () =>{
    const div = document.createElement("div")
    const wer = document.createElement("div")
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "delete"
    const changedButton = document.createElement("button")
    changedButton.innerText = "change"
    div.setAttribute("class", "block")
    wer.setAttribute("class", "block")
    div.innerText = input.value
    wer.append(deleteButton,changedButton)
    document.body.append(div)
    document.body.append(wer)
    input.value = " "
    deleteButton.onclick = () =>{
        div.remove();
        wer.remove();
    }
    changedButton.onclick = () =>{
        let change = prompt('Введите текст для замены')
        div.replaceWith(change)
    }

}



