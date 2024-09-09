document.getElementById("submit").addEventListener("click", CheckForm, false);

function CheckForm(evt){
    var uname = document.getElementById("uname").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    
    if(uname.length < 3){
        alert("Error: username needs to be at least 3 charecter");
        evt.preventDefault();
        return false;
    }
    else if (!email.includes('@') || !email.includes('.')){ 
        alert("Error: email must contain at least 1 @ and .");
        evt.preventDefault();
        return false;
    } 
    else if (!(10 < age && age < 100)){
        alert("Error: age must be between 10-100");
        evt.preventDefault();
        return false;
    }
    else{
        return true;
    }

}