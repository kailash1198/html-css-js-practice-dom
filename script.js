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

/*
let mySubmitBtn = document.getElementById('my-btn');
let popBox = document.getElementById('pop-card');
let noPopBtn = document.getElementById('pop-close');
let yesPopBtn = document.getElementById('pop-yes');

popBox.style.display = 'none';
mySubmitBtn.onclick = function() {
    popBox.style.display = 'block';
}

noPopBtn.onclick = function() {
    popBox.style.display = 'none';
}

yesPopBtn.onclick = function() {
    popBox.style.display = 'none';
}
*/

// ====PRACTICE CODE : #17 =======
/*
let myPara = document.getElementById('para');
let myHeading = document.getElementById('heading');

myHeading.style.display = 'none';

myPara.addEventListener("mouseover", function() {
    myHeading.style.display = 'block';
})

myPara.addEventListener("mouseout", function() {
    myHeading.style.display = 'none';
})
*/

// ====PRACTICE CODE : #18 =======
/*
let myPara = document.getElementById('para');
let myHeading = document.getElementById('heading');

myHeading.style.display = 'none';

myPara.addEventListener("dblclick", function() {
    myHeading.style.display = 'block';
})
*/

// ====PRACTICE CODE : #19 =======
/*

let myCard4 = document.getElementById('my-card4');
myCard4.style.display = 'none';

let myCard5 = document.getElementById('my-card5');
myCard5.style.display = 'none';

let myCard6 = document.getElementById('my-card6');
myCard6.style.display = 'none';

let myCard7 = document.getElementById('my-card7');
myCard7.style.display = 'none';


document.addEventListener("scroll", function() {
    myCard4.style.display = 'block';
})
document.addEventListener("scroll", function() {
    myCard5.style.display = 'block';
})
document.addEventListener("scroll", function() {
    myCard6.style.display = 'block';
})
document.addEventListener("scroll", function() {
    myCard7.style.display = 'block';
})
*/

// ====PRACTICE CODE : #20 =======
/*
let myHeading = document.getElementById('heading');
let myParagraph = document.getElementById('myPara');

paraHide = myParagraph.style.display = 'none';

document.addEventListener('keypress', function() {
    paraHide = myParagraph.style.display = 'block';
})
*/

// ====PRACTICE CODE : #21 =======
/*
let myBtn = document.getElementById('change-color-btn');
let myCard = document.getElementById('card1');
let myPara = document.getElementById('fonts');

myBtn.addEventListener('click', function() {
    var chooseColor = prompt("Enter your color name");
    if (chooseColor == "black") {
        myCard.classList.add("black-color");
        myCard.classList.remove("card");
        myPara.classList.add("bold");
    } else if (chooseColor == "red") {
        myCard.classList.add("red-color");
        myCard.classList.remove("card");
        myPara.classList.add("bold");
    }
})
*/

// ====PRACTICE CODE : #22 =======

/*
let myCard = document.getElementById('slider-box');
let myBtn = document.getElementById('btn');
if (myCard.classList.contains('slider1')) {
    myBtn.addEventListener('click', function() {
        myCard.classList.add('slider2');
        if (myCard.classList.contains('slider2')) {
            myBtn.addEventListener('click', function() {
                myCard.classList.add('slider1');
                myCard.classList.remove('slider2');
            });
        }
    });
}
*/

// ====PRACTICE CODE : #23 =======
/*
var userInputField = document.getElementById("user-input");
let userOutputTarget = document.getElementById('user-messege');

userOutputTarget.style.display = 'none';



function showData() {
    userOutputTarget.innerHTML += userInputField.value;
    userOutputTarget.style.display = 'block';
}
*/

// ====PRACTICE CODE : #24 =======
/*
let myBtn = document.getElementById('add-task');
let submitBtn = document.getElementById('submit');
let userTaskName = document.getElementById('task-name');
let closeBtn = document.getElementById('close');
let myWindow = document.getElementById('task-window');

let task = document.getElementById('task');

myWindow.style.display = 'none';

myBtn.addEventListener('click', function() {
    myWindow.style.display = 'block';
    closeBtn.addEventListener('click', function() {
        myWindow.style.display = 'none';
    })

})

submitBtn.addEventListener('click', function() {
    if (userTaskName.value != null) {
        task.innerText = userTaskName.value;
    }
})
*/

// ====PRACTICE CODE : #25 =======
/*
let loadBtn = document.getElementById('loading-btn');
let cardContainer = document.getElementsByClassName('load-container');

let myCard1 = document.getElementById('load-card');
let myCard2 = document.getElementById('load-card2');
let myCard3 = document.getElementById('load-card3');
let myCard4 = document.getElementById('load-card4');

myCard1.style.display = 'none';
myCard2.style.display = 'none';
myCard3.style.display = 'none';
myCard4.style.display = 'none';





loadBtn.addEventListener('click', showCard);

function showCard() {
    if (myCard1.style.display == 'none') {
        document.getElementById('load-card').style.display = 'flex';
    } else if (myCard2.style.display == 'none') {
        document.getElementById('load-card2').style.display = 'flex';
    } else if (myCard3.style.display == 'none') {
        document.getElementById('load-card3').style.display = 'flex';
    } else if (myCard4.style.display == 'none') {
        document.getElementById('load-card4').style.display = 'flex';
    }

}

*/

// ====PRACTICE CODE : #27 =======
/*
let myNavBar = document.getElementById('navbar');
let contentBox = document.getElementById('content');

let oldScrollY = window.scrollY;
document.addEventListener('scroll', () => {
    if (oldScrollY < window.scrollY) {
        myNavBar.style.padding = "1rem";
    } else {
        myNavBar.style.padding = "2rem";
    }

})
*/

// ====PRACTICE CODE : #28 =======
// let backBtn = document.getElementById('back');
// let nextBtn = document.getElementById('next');

// let myCard1 = document.getElementById('card-1');
// let myCard2 = document.getElementById('card-2');

// myCard1.style.display = 'block';
// myCard2.style.display = 'none';

// backBtn.addEventListener('click', () => {

//     myCard2.style.display = 'block';
//     myCard2.style.left = '0px';
//     myCard2.style.transition = 'all 0.5s ease';
//     myCard1.style.display = 'none';

// })

// nextBtn.addEventListener('click', () => {
//     if (myCard3.style.display == 'block' && myCard1.style.display == 'none') {
//         myCard2.style.display = 'block';
//         myCard2.style.transition = 'all 0.5s';
//         myCard3.style.display = 'none';
//     } else if (myCard2.style.display == 'block' && myCard1.style.display == 'none') {
//         myCard3.style.display = 'block';
//         myCard3.style.transition = 'all 0.5s';
//         myCard2.style.display = 'none';
//     }
// })

// ====PRACTICE CODE : #29 =======
// let myCard1 = document.getElementById('my-card1');
// let myCard2 = document.getElementById('my-card2');
// let myCard3 = document.getElementById('my-card3');

// document.addEventListener('scroll', () => {
//     myCard1.classList.add('anime-card');
//     myCard2.classList.add('anime-card');
//     myCard3.classList.add('anime-card');
// })

// ====PRACTICE CODE : #30 =======
// let myCard1 = document.getElementById('card-1');
// let myCard2 = document.getElementById('card-2');
// let myCard3 = document.getElementById('card-3');

// myCard2.style.display = 'none';
// myCard3.style.display = 'none';

// document.addEventListener('load', func)

// setTimeout(func, 5000)

// function func() {
//     myCard2.style.display = 'block';
//     myCard1.style.display = 'none';
//     myCard2.style.transition = 'all 0.5s';
// }

// ====PRACTICE CODE : #31 =======
// let userInput = document.getElementById('user-input');
// let userRate = document.getElementById('user-rate');
// let readBtn = document.getElementById('my-btn');

// readBtn.addEventListener('click', function() {
//     console.log(`Total amounts is that : ${userInput.value* userRate.value}`);

//     var totalAmount = userInput.value * userRate.value;
//     if (totalAmount == 100) {
//         console.log('You have to pay Immdiate');
//     } else {
//         console.log("You can pay Later Bro");
//     }
// })

// ====PRACTICE CODE : #32 =======
// let userName = document.getElementById('user-name');
// let password = document.getElementById('user-password');
// let logBtn = document.getElementById('my-btn');

// logBtn.addEventListener('click', function(){
//     console.log(`The Name is that: ${userName.value}`);
//     console.log(`The Name is that: ${password.value}`);
// })

// ====PRACTICE CODE : #33 (scroll up-down navbar section drop-up)=======

// let myNavbar = document.getElementById("navbar");

// document.addEventListener("scroll", function () {
//   if (window.scrollY == true) {
//     if () {
//       myNavbar.style.position = "fixed";
//       myNavbar.style.zIndex = "1";
//     }
//   }
// });


// ====PRACTICE CODE : #34 (when scroll up-down then auto card scroll left to right and right to left)=======

// let myCardBoxOne = document.getElementById('card-box-1')
// let myCardBoxTwo = document.getElementById('card-box-2');

// window.addEventListener('scroll', function(){
//     if(window.scrollY != false){
//         myCardBoxOne.style.position = 'relative';
//         myCardBoxOne.style.left = '200px';
       

//         myCardBoxTwo.style.position = 'relative';
//         myCardBoxTwo.style.right = '200px';
//     }else{
//         myCardBoxOne.style.left = '0px';
//         myCardBoxTwo.style.right = '0px';
//     }
// })


// ====PRACTICE CODE : #35 ()=======