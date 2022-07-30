/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const logBtn = document.getElementById("logout");

logBtn.addEventListener("click", (e)=> {
    e.preventDefault();


    auth.signOut()
        .then(res => {
            localStorage.removeItem("email");
            alert("You have logged out. Login to transact again.")
            location.assign("../src/index.html")
        })
        .catch(err => {
            alert(err.message)
        })
    
    
})