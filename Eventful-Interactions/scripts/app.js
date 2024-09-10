
function btnShow(){
    document.getElementById("2pg").style.visibility = "visible";
}
function ChangeColor(){
    document.getElementById("3pg").style.color = document.getElementById('txt-color').value;
}

document.getElementById('btn-hide').addEventListener('click', ()=>{

    document.getElementById("2pg").style.visibility = "hidden";
});

document.getElementById('btn-show').addEventListener("click", btnShow);
document.getElementById('btn-change-color').addEventListener("click", ChangeColor);