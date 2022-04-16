const form = document.querySelector("form"),
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");

form.onsubmit = (event)=>{
    event.preventDefault(); //prevents form form submitting//
    if(eInput.value == ""){ //if the email field is empty//
        eField.classList.add("shake", "error");
    }
    else {
        checkEmail(); //calling checkEmail function//
    }
    if(pInput.value == ""){ //if the password field is empty//
        pField.classList.add("shake", "error");
    }

    setTimeout(()=> { //removes shake class after 500ms//
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    //Working on input keyup process//
    eInput.onkeyup = ()=>{
        checkEmail(); //calling checkEmail function//
    }

    //Working on function that calls message when a user entered invalid email and clicks on the login button//
    function checkEmail(){
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern to validate email//
        if(!eInput.value.match(pattern)){ //if pattern doesn't match with the user entered value//
            eField.classList.add("error");
            let errorText = eField.querySelector(".error-text");
            //if email is not empty then show Enter a valid email address until email valid else show Email can't be blank//
            (eInput.value != "") ? errorText.innerText = "Enter a valid email address" : errorText.innerText = "Email can't be blank";
        }
        else{
            eField.classList.remove("error");
        }
    }

    pInput.onkeyup = ()=>{
        if(pInput.value == ""){ //if password is empty//
            pField.classList.add("error");
        }
        else{
            pField.classList.remove("error");
        }
    }

    //Working on what to do after the user filled in proper details//
    //if the error class is not contained in eField and pField then the user has entered proper details//
    if (!eField.classList.contains("error") && !pField.classList.contains("error")){
        window.location.href = "#"; //remove the # and put that URL where you want to submit the form data//
        console.log("Form Submitted!");
    }
}

//Password Eye Icon Functionality//
//eye icon that will show hide and show user password//
const visibilityButton = document.getElementById("password-eye"),
    icon = document.getElementById("icon");

   icon.onclick = function () {

     if(visibilityButton.className == "active") {
        visibilityButton.setAttribute("type", "text");
        icon.className = "fa fa-eye";
       visibilityButton.className = "";

     } else {
        visibilityButton.setAttribute("type", "password");
        icon.className = "fa fa-eye-slash";
       visibilityButton.className = "active";
    }

   }

