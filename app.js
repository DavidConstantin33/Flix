const acc1 = {
    username: '33',
    password: '33',
}

const acc2 = {
    username: 'CrissT',
    password: 'motonel123',
}

const accs = [ acc1, acc2 ];

const body = document.body;
const userInput = document.getElementById('username');
const passInput = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const loginWindow = document.querySelector('.login');
const loginParent = document.querySelector('.loginParent');


const login = function () {
    for (const acc of Object.values(accs)) {
        if (userInput.value === acc.username && passInput.value === acc.password) {
            window.location.href = 'app.html';
        }
    }
}

loginBtn.addEventListener('click', login);