//When page is loaded, the dom will retrieve the current date using the moment.js API
$(document).ready(function() {
    var date = $("#currentDay");
    var today = moment().format("dddd, MMMM Do YYYY");
    date.text(today);
});

// Assigning variables to each textarea ID and button ID, and then saving textareas to local storage for each individual textarea
var textBtn1 = document.querySelector("#nine");
var saveBtn1 = document.querySelector("#nineBtn");
// Saves the text written in the textarea into local storage variable
textBtn1.value = localStorage.getItem("data1");
// When i click the button, the text will be saved to the display
saveBtn1.addEventListener("click", savedText1);
// Puts the textarea text into local storage and text will remain on screen
function savedText1() {
    localStorage.setItem("data1", textBtn1.value);
};

var textBtn2 = document.querySelector("#ten");
var saveBtn2 = document.querySelector("#tenBtn");
textBtn2.value = localStorage.getItem("data2");
saveBtn2.addEventListener("click", savedText2);
function savedText2() {
    localStorage.setItem("data2", textBtn2.value);
};

var textBtn3 = document.querySelector("#eleven");
var saveBtn3 = document.querySelector("#elevenBtn");
textBtn3.value = localStorage.getItem("data3");
saveBtn3.addEventListener("click", savedText3);
function savedText3() {
    localStorage.setItem("data3", textBtn3.value);
};

var textBtn4 = document.querySelector("#twelve");
var saveBtn4 = document.querySelector("#twelveBtn");
textBtn4.value = localStorage.getItem("data4");
saveBtn4.addEventListener("click", savedText4);
function savedText4() {
    localStorage.setItem("data4", textBtn4.value);
};


var textBtn5 = document.querySelector("#one");
var saveBtn5 = document.querySelector("#oneBtn");
textBtn5.value = localStorage.getItem("data5");
saveBtn5.addEventListener("click", savedText5);
function savedText5() {
    localStorage.setItem("data5", textBtn5.value);
};

var textBtn6 = document.querySelector("#two");
var saveBtn6 = document.querySelector("#twoBtn");
textBtn6.value = localStorage.getItem("data6");
saveBtn6.addEventListener("click", savedText6);
function savedText6() {
    localStorage.setItem("data6", textBtn6.value);
};

var textBtn7 = document.querySelector("#three");
var saveBtn7 = document.querySelector("#threeBtn");
textBtn7.value = localStorage.getItem("data7");
saveBtn7.addEventListener("click", savedText7);
function savedText7() {
    localStorage.setItem("data7", textBtn7.value);
};

var textBtn8 = document.querySelector("#four");
var saveBtn8 = document.querySelector("#fourBtn");
textBtn8.value = localStorage.getItem("data8");
saveBtn8.addEventListener("click", savedText8);
function savedText8() {
    localStorage.setItem("data8", textBtn8.value);
};

//
var textBtn9 = document.querySelector("#five");
var saveBtn9 = document.querySelector("#fiveBtn");
textBtn9.value = localStorage.getItem("data9");
saveBtn9.addEventListener("click", savedText9);
function savedText9() {
    localStorage.setItem("data9", textBtn9.value);
};

//Color coding of timeslots
var present = new Date().getHours();
// For 9AN

if (present > 9) {
    $("#nine").addClass("past");
}

else if (present >= 9 && present < 10) {
    $("#nine").addClass("present");
}

else if (present < 9) {
    $("#nine").addClass("future");
}

//For 10AM

if (present > 10) {
    $("#ten").addClass("past");
}

else if (present >= 10 && present < 11) {
    $("#ten").addClass("present");
}

else if (present < 10) {
    $("#ten").addClass("future");
}

//For 11AM

if (present > 11) {
    $("#eleven").addClass("past");
}

else if (present >= 11 && present < 12) {
    $("#eleven").addClass("present");
}

else if (present < 11) {
    $("#eleven").addClass("future");
}

//For 12PM

if (present > 12) {
    $("#twelve").addClass("past");
}

else if (present >= 12 && present < 13) {
    $("#twelve").addClass("present");
}

else if (present < 12) {
    $("#twelve").addClass("future");
}

//For 1PM

if (present > 13) {
    $("#one").addClass("past");
}

else if (present >= 13 && present < 14) {
    $("#one").addClass("present");
}

else if (present < 13) {
    $("#one").addClass("future");
}

//For 2PM

if (present > 14) {
    $("#two").addClass("past");
}

else if (present >= 14 && present < 15) {
    $("#two").addClass("present");
}

else if (present < 14) {
    $("#two").addClass("future");
}

//For 3PM

if (present > 15) {
    $("#three").addClass("past");
}

else if (present >= 15 && present < 16) {
    $("#three").addClass("present");
}

else if (present < 15) {
    $("#three").addClass("future");
}
//For 4PM

if (present > 16) {
    $("#four").addClass("past");
}

else if (present >= 16 && present < 17) {
    $("#four").addClass("present");
}

else if (present < 16) {
    $("#four").addClass("future");
}
//For 5PM

if (present > 17) {
    $("#five").addClass("past");
}

else if (present >= 17 && present < 18) {
    $("#five").addClass("present");
}

else if (present < 17) {
    $("#five").addClass("future");
}
