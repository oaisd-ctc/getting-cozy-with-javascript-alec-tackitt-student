document.getElementById('btn-toggle').addEventListener('click', ToggleVisibility);

function ToggleVisibility(){
    document.getElementById("content").classList.toggle("hidden");
}