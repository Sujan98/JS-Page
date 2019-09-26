var sideButton = document.getElementsByClassName("side-button")[0];
var menu = document.getElementById("menu");
var menuList = document.getElementsByClassName("menu-list")[0];
var sideList = document.getElementsByClassName("side-bar")[0];
var color = document.querySelectorAll(".color");
var upperCaseLetters = /[A-Z]/g;
var letters = /[A-Za-z]/g;
var numbers = /[0-9]/g;
var i = 0,j=0;

function dropMenu() {
    if(menuList.className == "menu-list list-items menu-dropdown") {
        menuList.className = "menu-list list-items";
        menu.style.backgroundColor = "transparent";
        menu.innerHTML = "Menu &nbsp; &#8681";
    }
    else {
        menu.innerHTML = "Menu &nbsp; &#8679;";
        menuList.className += " menu-dropdown";
        menu.style.backgroundColor = "rgba(0, 0, 0, 0.555)";
    }
}

function sideMenu() {
    if(sideList.className == "side-bar menu-right") {
        sideList.className = "side-bar";
        sideButton.innerHTML = "&#8680;";
    }
    else {
        sideButton.innerHTML = "&#8678;";
        sideList.className += " menu-right";
    }
}

(function ready() {
    color.forEach(myFunction);
})()

function myFunction() {
    color[i].addEventListener("click", bgColor);
    i++;
}

function bgColor(event) {
    var x = event.target.style.backgroundColor;
    document.getElementById("body").style.backgroundColor = x;
    document.getElementsByClassName("header")[0].style.backgroundColor = "transparent";
}

function validate() {
    var name = document.querySelectorAll(".name");
    var pass = document.getElementsByClassName("pass")[0];
    var rePass = document.getElementsByClassName("re-pass")[0];
    var email = document.getElementsByClassName("email")[0].value;    
    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");
    var x = 0;
    for(var i=0;i<2;i++){
    if(name[i].value == "") {
        alert("Enter your name");
        name[i].focus();
        x=1;
        break;
    }
}
if (x == 0){
if(pass.value == "") {
    alert("Enter password");
    pass.focus();
}
else if(pass.value.length < 6) {
    alert("Password should have minimum Six Characters");
    pass.focus();
}
else if(!(pass.value.match(numbers))) {
    alert("Password should have a number");
    pass.focus();
}
else if(!(pass.value.match(upperCaseLetters))) {
    alert("Password should have a UpperCase letter");
    pass.focus();
}
else if(rePass.value != pass.value) {
    alert("Password did not match");
    rePass.focus();
}
else if(atpos < 1 || ( dotpos - atpos < 2 ))
{
  alert("Please enter correct email ID");
  document.getElementsByClassName("email")[0].focus();
}
else if(document.getElementsByClassName("captcha")[0].value != document.getElementsByClassName("word")[0].value) {
    alert("Wrong captcha");
    document.getElementsByClassName("word")[0].focus();
}
else {
    alert("Success");
}
}
}


function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    document.getElementsByClassName("captcha")[0].value = result;
 }
 
 makeid(6);