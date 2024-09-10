document.getElementById('btn-move-left').addEventListener("click", MoveLeft);
document.getElementById('btn-move-right').addEventListener("click", MoveRight);

function MoveLeft(){
    var element = document.getElementById('move-box')
    var position = element.getBoundingClientRect()
    
    document.getElementById('move-box').style.transform = `translate(${position.left - 50}px, 0px)`;
}

function MoveRight(){
    var element = document.getElementById('move-box')
    var position = element.getBoundingClientRect()

    document.getElementById('move-box').style.transform = `translate(${position.left + 50}px, 0px)`;
}