var ADDFORM=document.getElementById("addForm")
var ITEM=document.getElementById("item")
var ITEMS=document.getElementById("items")

ITEMS.addEventListener("click", deleteitem)
ADDFORM.addEventListener("submit", addItem)

function addItem(e){
    e.preventDefault()
    const lithium=document.createElement("li")
    lithium.setAttribute("class", "list-group-item")
    lithium.append(document.createTextNode(ITEM.value))
    const BUTTON=document.createElement("button")
    BUTTON.setAttribute("class", "btn btn-danger btn-sm float-right delete")
    BUTTON.append(document.createTextNode("X"))
    lithium.appendChild(BUTTON)
    ITEMS.append(lithium)

    ITEMS.appendChild(lithium)
    console.log(lithium)
}

function deleteitem(e){
    e.preventDefault()
    if(e.target.classList.contains("btn-danger")){
        if(confirm("Are you sure?")){
        const lithium2=e.target.parentElement
        ITEMS.removeChild(lithium2)
        // console.log(e.target.parentElement);
        }
    }
}

// console.log(ITEM)