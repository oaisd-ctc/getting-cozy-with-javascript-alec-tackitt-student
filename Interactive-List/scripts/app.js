document.getElementById("submit").addEventListener("click", AddText);

function AddText(){
    // grabbing text from input
    var text = document.getElementById("text").value;
    //grabbing list
    var list = document.getElementById("list");
    //creating a new list item and putting text in it and assiging uniqe id
    var item = document.createElement("li");
    item.textContent = text;
    //add new list item to list
    list.appendChild(item);

    //creating new button and assigning uniqe id
    var button = document.createElement("button");
    button.textContent = "Delete";
    list.appendChild(button);

    button.addEventListener("click", () => {
        button.remove();
        item.remove();
    })
}
