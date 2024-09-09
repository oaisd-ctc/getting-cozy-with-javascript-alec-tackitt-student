document.getElementById("submit").addEventListener("click", AddText);

function AddText(){
    var text = document.getElementById("text").value;
    var list = document.getElementById("list");
    var item = document.createElement("li");
    item.textContent = text;
    list.appendChild(item);

}