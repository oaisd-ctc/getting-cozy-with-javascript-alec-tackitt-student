document.getElementById("submit").addEventListener("click", CheckForm, false);

function CheckForm(evt){
    var uname = document.getElementById("uname").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var unameWarning = document.getElementById("uname-warning");
    var emailWarning = document.getElementById("email-warning");
    var ageWarning = document.getElementById("age-warning")
    
    if(uname.length < 3){
        unameWarning.innerHTML = "username must be at least 3 charecters";
        evt.preventDefault();
        return false;
    }
    else if (!email.includes('@') || !email.includes('.')){ 
        emailWarning.innerHTML = "email must include @ and .";
        evt.preventDefault();
        return false;
    } 
    else if (!(10 < age && age < 100)){
        ageWarning.innerHTML = "age must be between 10 and 100";
        evt.preventDefault();
        return false;
    }
    else{
        return true;
    }

}