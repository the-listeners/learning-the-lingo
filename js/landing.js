'use strict'

// Global variables
var userName;
var stringyUser;

// DOM references
var testForm = document.getElementById('user_input');

// Event handler for username and language selection
var formSubmitHandler = function (formSubmit) {
  formSubmit.preventDefault();

  // Storing username to local storage
  var userNameForm = formSubmit.target.user_name.value;
  userName = userNameForm;
  stringyUser = JSON.stringify(userName);
  localStorage.setItem('user', stringyUser);

  // Storing language chosen to local storage
  var languageChosen = formSubmit.target.languageSelection.value;
  localStorage.setItem('language', languageChosen);
  redirect();
};

// Username submit listener
testForm.addEventListener('submit', formSubmitHandler);

// Stores word array to local storage
storeWordArray();

// ===========================================================//
// Toggle about me
// ===========================================================//
function joannaToggle() {
  var x = document.getElementById("joannaInfo");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}

function denevanToggle() {
  var x = document.getElementById("denevanInfo");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}

function pratiibhToggle() {
  var x = document.getElementById("pratiibhInfo");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}

function melissaToggle() {
  var x = document.getElementById("melissaInfo");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}

function williamsToggle() {
  var x = document.getElementById("williamsInfo");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}


 // ===========================================================//
// chet moving around after clicking enter
// ===========================================================//



function myMove() {
  var elem = document.getElementById("myAnimation");   
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}



// redirects when
function redirect()
{
    window.location.href="pages/game.html";
}



