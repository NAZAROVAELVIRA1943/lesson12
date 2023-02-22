let loginButton = document.querySelector('.login-button');
let popUp = document.querySelector('.login-popup'); 
console.log(loginButton);
console.log(popUp);

loginButton.addEventListener('click', showPopUop);

function showPopUop(el) {
    popUp.classList.toggle('visible')
}


