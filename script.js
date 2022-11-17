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
/*
let popDisplayHide = document.getElementById('pop-window');

popDisplayHide.style.display = 'none';

function poppapOpenFunc() {
    popDisplayHide.style.display = 'block';
}

function poppapCloseFunc() {
    popDisplayHide.style.display = 'none';
}
*/

// ====PRACTICE CODE : #7 ========
/*
let myContent = document.getElementById('elementMain');

function showContent() {
    myContent.style.left = '0px';
    myContent.style.transition = "all 0.5s"
}

function hideContent() {
    myContent.style.left = '-600px';
    myContent.style.transition = "all 0.5s"
}
*/

// ====PRACTICE CODE : #8 =======
/*
let marketingArea = document.getElementById('market');
let industryArea = document.getElementById('industrial');

industryArea.style.display = 'none';


function showMarketingFunc() {
    marketingArea.style.display = 'flex';
    if (industryArea.style.display == 'flex') {
        industryArea.style.display = 'none';
    }
}

function showIndustryFunc() {
    industryArea.style.display = 'flex';
    if (marketingArea.style.display == 'flex') {
        marketingArea.style.display = 'none';
    }
}
*/

// ====PRACTICE CODE : #9 =======