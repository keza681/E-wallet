/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const email = localStorage.getItem("email");


const emailHolder = document.getElementById("email");

const sendBtn = document.getElementById("sendBtn");
const recEmail = document.getElementById("rec_email");
const amount = document.getElementById("amount");
const pin = document.getElementById("pin");
const balanceHolder = document.getElementById("balance");

let initAmount;
let recAmount;

emailHolder.innerHTML = email;

db.collection("balance").doc(email)
    .onSnapshot((doc) => {
        balanceHolder.innerHTML = doc.data().amount;
        initAmount = doc.data().amount;
    });

let users = [];

db.collection('users').get().then(res => {
    res.docs.forEach(doc => {
        users.push(doc.data());
    })
})

const fb = document.getElementById("feedback");


sendBtn.addEventListener("click", async(e)=> {
    e.preventDefault();
    await db.collection("balance").doc(recEmail.value)
        .onSnapshot((doc) => {
            recAmount = doc.data().amount;
        });
    users.forEach(user => {
        if(user.email === recEmail.value){
            fb.innerHTML = "";
            if(amount.value >= initAmount){
                alert("No enough money found in your account!");
            }else{
                db.collection("transaction").add({
                    senderEmail: email,
                    recipientEmail: recEmail.value,
                    amount: amount.value,
                    transaction: "Send",
                    createdAt: Date.now()
                })
                .then(res => {
                    switch(amount.value){
                        case amount.value < 0:
                            fb.innerHTML = "invalid amount";
                            break;
                        case amount.value > 0 && amount.value <= 10000:
                            db.collection("balance").doc(email).update({
                                amount: parseInt(initAmount) - parseInt(amount.value),
                                lastUpdated: new Date()
                            })
                            break;
                        case amount.value > 10000 && amount.value <= 100000:
                            db.collection("balance").doc(email).update({
                                amount: parseInt(initAmount) - parseInt(amount.value) - 200,
                                lastUpdated: new Date()
                            })
                            break;
                        case amount.value > 100000:
                            db.collection("balance").doc(email).update({
                                amount: parseInt(initAmount) - parseInt(amount.value) - 1000,
                                lastUpdated: new Date()
                            })
                            break;
                            
                    }
                    alert(`${amount.value} RWF sent to ${recEmail.value} successfully.`)
                    db.collection("transaction").add({
                        senderEmail: email,
                        recipientEmail: recEmail.value,
                        amount: amount.value,
                        transaction: "Receive",
                        createdAt: Date.now()
                    }).then(res=> {
                        db.collection("balance").doc(recEmail.value).update({
                            amount: parseInt(recAmount) + parseInt(amount.value),
                            lastUpdated: new Date()
                        })
                    })
                })
                .catch(err=> {
                    alert(err.message)
                })
            }
            return true;
        }else{
           return false;
        }
    })
})