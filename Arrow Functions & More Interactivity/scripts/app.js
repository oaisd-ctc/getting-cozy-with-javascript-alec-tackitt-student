
document.getElementById('btn-show').addEventListener("click", btnShow);
function btnShow(){
    document.getElementById("2pg").style.visibility = "visible";
}

document.getElementById('btn-hide').addEventListener('click', ()=>{
    document.getElementById("2pg").style.visibility = "hidden";
});


document.getElementById('btn-change-color').addEventListener("click", ChangeColor);
function ChangeColor(){
    document.getElementById("3pg").style.color = document.getElementById('txt-color').value;
}


document.getElementById('shapes').addEventListener('change', ()=>{
    document.getElementById('shape-div').remove()
    var shape = document.getElementById('shapes').value

    if(shape =="Circle"){
        var div = document.createElement("div");
        div.style.width = "300px";
        div.style.height = "300px";
        div.style.borderRadius = "150000px"
        div.style.border = "solid";
        div.id = "shape-div";
        document.getElementById("shape-container").appendChild(div);
    }
    if(shape == "Triangle") {
        var div = document.createElement("div");
        div.style.width = "0px";
        div.style.height = "0px";
        div.style.borderBottom = "250px solid black";
        div.style.borderLeft = "125px solid transparent";
        div.style.borderRight = '125px solid transparent'
        div.style.margin = "2rem";
        div.id = "shape-div";
        document.getElementById("shape-container").appendChild(div);
    }
    if (shape == "Square") {
        var div = document.createElement("div");
        div.style.height = "300px";
        div.style.width = "300px";
        div.style.border = "solid";
        div.id = "shape-div";
        document.getElementById("shape-container").appendChild(div);
    }
});

