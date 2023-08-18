let sign = document.querySelector(".Sign-Button");
let confirmPasswordForm = document.getElementById("registration-field");
let confirmButton = document.querySelector(".confirm-button");
let textNearSign = document.getElementById("text-before-sign-btn");
let registrationModeOn = false;




sign.addEventListener('click', ()=>{
    if(!registrationModeOn){
        document.querySelector(".login").value = "";
        document.querySelector(".password").value = "";
        confirmPasswordForm.style.display = "inherit";
        registrationModeOn = true;
        document.querySelector(".wrapper-header").innerHTML = "Sign Up";
        sign.innerHTML = "Sign In";
        confirmButton.innerHTML = "Sign Up";
        textNearSign.innerHTML = "Already have an account?&nbsp;";
    }
    else if(registrationModeOn){
        document.querySelector(".login").value = "";
        document.querySelector(".password").value = "";
        document.querySelector(".confirm-password").value = "";
        confirmPasswordForm.style.display = "none";
        registrationModeOn = false;
        document.querySelector(".wrapper-header").innerHTML = "Sign In";
        sign.innerHTML = "Sign Up";
        confirmButton.innerHTML = "Sign In";
        textNearSign.innerHTML = "Don't have an account?&nbsp;";
    }
});
        

confirmButton.addEventListener('click', ()=>{
    let login = document.querySelector(".login");
    let password = document.querySelector(".password");
    if(!registrationModeOn){
        login.style.border ="none";
        password.style.border = "none";
        if(login.value ==""){
            login.style.border = "2px solid red";
        }
        if(password.value ==""){
            password.style.border = "2px solid red";
        }
        if(login.value == "Admin" && password.value == "1234"){  
            alert("Hello Admin!");
        }
    }
    else if(registrationModeOn){
        let confirmPassword = document.querySelector(".confirm-password");

        login.style.border ="none";
        password.style.border = "none";
        confirmPassword.style.border = "none";
        if(login.value ==""){
            login.style.border = "2px solid red";
        }
        if(password.value ==""){
            password.style.border = "2px solid red";
        }
        if(confirmPassword.value ==""){
            confirmPassword.style.border = "2px solid red";
        }
        if(password.value != confirmPassword.value){
            password.style.border = "2px solid red";
            confirmPassword.style.border = "2px solid red";
        }else{
            login.style.border = "3px solid LightGreen";
            password.style.border = "3px solid LightGreen";
            confirmPassword.style.border = "3px solid LightGreen"; 
        }
    }
});

// console.log(login.value + " " + password.value + " " + confirmPassword.value);