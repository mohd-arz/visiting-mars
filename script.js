const password=document.querySelector("#password");
const confirmPassword=document.querySelector("#confirm-password");
const passStatus=document.querySelector(".status");

password.addEventListener('keyup',passValidation)
confirmPassword.addEventListener(('keyup'),passValidation)

function passValidation(){
    if(password.value!=confirmPassword.value){
        password.setCustomValidity("Invalid field.")
        confirmPassword.setCustomValidity("Invalid field.")
        passStatus.textContent="password did not match"
    }else{
        confirmPassword.setCustomValidity("");
        password.setCustomValidity("")
        passStatus.textContent=""
    }
}
console.log("con"+confirmPassword.value)
console.log("pass"+password.value)