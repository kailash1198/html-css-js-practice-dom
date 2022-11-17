// ====PRACTICE CODE : #1 ========

/*

let increNumber = document.getElementById('incrementNum');

let decreNumber = document.getElementById('decrementNum');

// INCREMENT NUMBER FUNCTION
function incremNumFunc() {
    increNumber.innerHTML++;
}

//DECREMENT NUMBER FUNCTION
function decremNumFunc() {
    decreNumber.innerHTML--;
}

*/





// ====PRACTICE CODE : #2 ========
/*
let myTitle = document.getElementById('title');
let myContent = document.getElementById('content');

function showContent() {
    myContent.style.display = 'block';
}

function hideContent() {
    myContent.style.display = 'none';
}
*/









// ====PRACTICE CODE : #3 ========
/*
let downBtn = document.getElementById('downloadBtn');


function downloadResume() {
    downBtn = window.open('asset/css.pdf');
}
*/











// ====PRACTICE CODE : #4 ========
/*
let disNone = document.querySelector('.main');

disNone.style.display = 'none';

document.getElementById('load').classList.add('loader');

setTimeout(() => {
    document.getElementById('load').classList.remove('loader');
    disNone.style.display = 'block';
}, 4000);
*/
















// ====PRACTICE CODE : #5 ========
/*
let errorSms = document.getElementById('error-messege');
errorSms.style.display = "none";


function logInSucess() {

    var inputUserName = document.getElementById('user-name').value;

    var inputUserPassword = document.getElementById('user-password').value;

    if (inputUserName === "kailash" && inputUserPassword === "kailash") {
        alert("sucess");
        let myName = prompt("Enter your name: ");
        if (myName === "kailash") {
            window.open("https://www.kailashkumar.in", '_target');
        }
    } else if (inputUserName === "aryan" && inputUserPassword === "aryan") {
        alert("sucess");
        let myName = prompt("Enter your name: ");
        if (myName === "kailash") {
            window.open("https://www.kailashkumar.in", '_target');
        }
    } else if (inputUserName === "laxmi" && inputUserPassword === "laxmi") {
        alert("sucess");
        let myName = prompt("Enter your name: ");
        if (myName === "kailash") {
            window.open("https://www.kailashkumar.in", '_target');
        }
    } else {
        errorSms.style.display = "block";
    }
}
*/

















// ====PRACTICE CODE : #6 ========