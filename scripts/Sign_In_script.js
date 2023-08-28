let sign = document.querySelector(".Sign-Button");
let confirmPasswordForm = document.getElementById("registration-field");
let confirmButton = document.querySelector(".confirm-button");
let regInfo = document.getElementById("reg-info");
let textNearSign = document.getElementById("text-before-sign-btn");
let login = document.querySelector(".login");
let password = document.querySelector(".password");

let registrationModeOn = false;




sign.addEventListener('click', ()=>{
    regInfo.innerHTML = "";
    login.style.border ="none";
    password.style.border = "none";
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
    login = document.querySelector(".login");
    password = document.querySelector(".password");
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
        regInfo.style.color = "red";
        regInfo.innerHTML = "";
        
        if(login.value.length < 4){
            login.style.border = "2px solid red";
            regInfo.innerHTML = "Login must be at least 4 letters!";
            if(login.value ==""){
                login.style.border = "2px solid red";
                regInfo.innerHTML = "Create login first!";
            }
        }else{
            if(password.value.length < 6){
                password.style.border = "2px solid red";
                regInfo.innerHTML = "Password must be at least 6 symbols!";
                if(password.value ==""){
                    password.style.border = "2px solid red";
                    regInfo.innerHTML = "Create a password please!";
                }
            }
            
            if(password.value.length >= 6 && password.value != confirmPassword.value){
                password.style.border = "2px solid red";
                confirmPassword.style.border = "2px solid red";
                regInfo.innerHTML = "Passwords didn't match!";
                if(confirmPassword.value =="" && password.value.length >= 6 && login.value.length >= 4){
                    confirmPassword.style.border = "2px solid red";
                    regInfo.innerHTML = "You need to confirm your password to end the registration!";
                }
            }


            
            
            if(password.value.length >= 6 && password.value == confirmPassword.value && login.value.length >= 4){
                let hasDigit = false;
                let hasUppercase = false;
                let hasLowercase = false;

                for (let i = 0; i < password.value.length; ++i) {
                    if (password.value[i] >= "A" && password.value[i] <= "Z") {
                    hasUppercase = true;
                    }
                    if (password.value[i] >= "a" && password.value[i] <= "z") {
                    hasLowercase = true;
                    }
                    if(password.value[i] >= "0" && password.value[i] <= "9"){
                    hasDigit = true;
                    }
                }

                if(hasUppercase && hasLowercase  && hasDigit ){
                    login.style.border = "3px solid LightGreen";
                    password.style.border = "3px solid LightGreen";
                    confirmPassword.style.border = "3px solid LightGreen";
                    regInfo.style.color = "Green";
                    regInfo.innerHTML = "Well Done!"; 
                }

                if(!hasUppercase || !hasLowercase || !hasDigit){
                    regInfo.innerHTML ="Password must contain uppercase, lowercase letters and numbers!";
                    password.style.border = "2px solid red";
                    confirmPassword.style.border = "2px solid red";
                }
                
            }
        }
    }
});