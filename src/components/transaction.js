/* eslint-disable no-undef */
let transactions = [];
let tbody = document.querySelector(".table-body");

const renderItems = (data) => {
    let tr = document.createElement("tr");
    let type = document.createElement("td");
    let amount = document.createElement("td")
    let date = document.createElement("td");

    type.textContent = data.transaction;
    amount.textContent = data.amount;
    date.textContent = moment(data.createdAt).format('MMMM Do YYYY, h:mm:ss a');

    tr.appendChild(type);
    tr.appendChild(amount);
    tr.appendChild(date);

    tbody.append(tr);
}
db.collection("transaction").limit(10).where("senderEmail", "==", email)
.onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        transactions.push(doc.data());
        renderItems(doc.data());
    });
});

console.log(transactions)