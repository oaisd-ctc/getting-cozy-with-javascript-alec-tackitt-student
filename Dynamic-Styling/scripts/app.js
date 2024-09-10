document.getElementById('colors').addEventListener('change', ()=>{
var text = document.getElementById("text");
var color = document.getElementById('colors').value

    if(color =="Blue"){
       text.classList.add('blue');
       text.classList.remove('red');
       text.classList.remove('green');
    }
    if(color == "Red") {
        text.classList.add('red');
       text.classList.remove('blue');
       text.classList.remove('green');
    }
    if (color == "Green") {
        text.classList.add('green');
       text.classList.remove('red');
       text.classList.remove('blue');
    }
});