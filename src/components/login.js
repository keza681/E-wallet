/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const loginBtn = document.getElementById("loginBtn");
const email = document.getElementById("email");
const pin = document.getElementById("pin");

loginBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    
    auth.signInWithEmailAndPassword(email.value, pin.value)
        .then(cred => {
            email.textContent = "";
            pin.textContent ="";
            localStorage.setItem("email", email.value)
            window.location.href = "dashboard.html";
        }).catch((err)=> {
            console.log(err.message)
            alert(err.message)
        })
})