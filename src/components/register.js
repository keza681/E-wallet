/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const registerBtn = document.getElementById('registerBtn');
const email = document.getElementById('email');
const pin = document.getElementById('pin');
const pinConfirm = document.getElementById('pin-confirm');

registerBtn.addEventListener('click', (e) => {
  e.preventDefault();

  auth
    .createUserWithEmailAndPassword(email.value, pin.value)
    .then((cred) => {
      db.collection('users')
        .doc(email.value)
        .set({
          email: email.value,
        })
        .then((res) => {
          db.collection('balance').doc(email.value).set({ amount: 1000 });
          alert(
            'Thank you for registering. You have got a bonus of 1000 Rwf. Login to start spending your money.'
          );
          window.location.href = './index.html';
        });
    })
    .catch((err) => {
      alert(err.message);
    });
});