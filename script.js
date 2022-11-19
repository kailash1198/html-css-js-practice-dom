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
/*
let menuSection = document.getElementById('menu-content');

let aboutSection = document.getElementById('about-content');

let contactSection = document.getElementById('contact-content');

menuSection.style.display = 'block';
aboutSection.style.display = 'none';
contactSection.style.display = 'none';


function showMenu() {

    if (aboutSection.style.display == 'none' && contactSection.style.display == 'none') {
        menuSection.style.display = 'block';
    } else if (contactSection.style.display == 'block' && menuSection.style.display == 'none') {
        menuSection.style.display = 'block';
        contactSection.style.display = 'none';
    }
}

function showAbout() {


    if (menuSection.style.display == 'block' && contactSection.style.display == 'none') {
        aboutSection.style.display = 'block';
        menuSection.style.display = 'none';
    }
}

function showContact() {


    if (menuSection.style.display == 'block' && aboutSection.style.display == 'none') {
        contactSection.style.display = 'block';
        menuSection.style.display = 'none';
    } else if (aboutSection.style.display == 'block' && menuSection.style.display == 'none') {
        aboutSection.style.display = 'none';
        contactSection.style.display = 'block';
    }
}
*/

// ====PRACTICE CODE : #11 =======
/*
let logInFormSection = document.getElementById('logIn');

let signUpFormSection = document.getElementById('signUp');

signUpFormSection.style.display = 'none';

signUpFormSection.style.display = 'none';

function hideLogInForm() {

    if (logInFormSection.style.display != 'none') {
        signUpFormSection.style.display = 'block';
        logInFormSection.style.display = 'none';
        logInFormSection.style.transition = 'all 0.5s';
    }

}
*/


// ====PRACTICE CODE : #12 =======
/*
let myMenu = document.getElementById('menu-bar');

let myClose = document.getElementById('close-menu');
let myContentShow = document.getElementById('content');
myClose.style.display = 'none';

function hideMenu() {
    myMenu.style.display = 'none';
    if (myMenu.style.display == 'none') {
        myContentShow.style.left = '0px';
        myContentShow.style.transition = 'all 0.9s';
        myClose.style.display = 'block';
    }
}

function showMenu() {
    if (myClose.style.display != 'none') {
        myContentShow.style.left = '-100%';
        myContentShow.style.transition = 'all 0.9s';
        myMenu.style.display = 'block';
        myClose.style.display = 'none';
    }
}
*/



// ====PRACTICE CODE : #13 =======

/*
let cardBox = document.querySelector('.card');
let showContent = document.getElementById('myContent');

showContent.style.display = 'none';

function showContentEffect() {
    if (showContent.style.display == 'none') {
        showContent.style.display = 'block';
    } else if (showContent.style.display == 'block') {
        showContent.style.display = 'none';
    }
}
*/


// ====PRACTICE CODE : #14 =======
/*
let backBtn = document.getElementById('back');
let nextBtn = document.getElementById('next');

const scrollContainer = document.querySelector(".team");

backBtn.onclick = function() {
    scrollContainer.scrollLeft += 500;
    scrollContainer(this.style.transition = 'all 0.5s');
}

nextBtn.onclick = function() {
    scrollContainer.scrollLeft -= 500;
}
*/



// ====PRACTICE CODE : #15 =======

/*
let myBtn = document.getElementById('icon');
let myContent = document.getElementById('card');

myContent.style.display = 'none';

myBtn.onclick = function() {

    if (myContent.style.display == 'none') {
        myContent.style.display = 'inline-block';
        myContent.style.transition = 'all 0.5s';
    } else {
        myContent.style.display = 'none';
    }
}
*/

// ====PRACTICE CODE : #16 =======