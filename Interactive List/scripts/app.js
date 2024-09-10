document.getElementById("submit").addEventListener("click", AddText);
document.getElementByClass("Delete-Button").addEventListener("click", RemoveItem)

function AddText(){
    // grabbing text from input
    var text = document.getElementById("text").value;
    //grabbing list
    var list = document.getElementById("list");
    //creating a new list item and putting text in it
    var item = document.createElement("li");
    item.textContent = text;
    //add new list item to list
    list.appendChild(item);

    //creating new button
    var button = document.createElement("button");
    button.classList.add("Delete-Button");
    button.textContent = "Delete";
    list.appendChild(button);



 // neeed to ask martinez abt type of error message for form valdation
 //ask marinez aby keegan button layout
}

function RemoveItem(){
    alert("deleting item");
}