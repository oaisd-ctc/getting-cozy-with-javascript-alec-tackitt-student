
function btnShow(){
    document.getElementById("2pg").style.visibility = "visible";
}
function ChangeColor(){

}

document.getElementById('btn-hide').addEventListener('click', ()=>{

    document.getElementById("2pg").style.visibility = "hidden";
});

document.getElementById('btn-show').addEventListener("click", btnShow);