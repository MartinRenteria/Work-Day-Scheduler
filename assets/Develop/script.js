//When page is loaded, the dom will retrieve the current date
$(document).ready(function() {
    var date = $("#currentDay");
    var today = moment().format('dddd, MMMM Do YYYY');
    date.text(today);
});

// Assigning variables to my textarea ID and button ID
var textBtn1 = document.querySelector('#nine');
var saveBtn1 = document.querySelector('#nineBtn');
// Saves the text written in the textarea into local storage variable
textBtn1.value = localStorage.getItem('data1');
// When i click the button, the text will be saved to the display
saveBtn1.addEventListener('click', savedText1);
// Puts the textarea text into local storage and text will remain on screen
function savedText1() {
    localStorage.setItem('data1', textBtn1.value);
};


var textBtn2 = document.querySelector('#ten');
var saveBtn2 = document.querySelector('#tenBtn');
textBtn2.value = localStorage.getItem('data2');
saveBtn2.addEventListener('click', savedText2);
function savedText2() {
    localStorage.setItem('data2', textBtn2.value);
};

var textBtn3 = document.querySelector('#eleven');
var saveBtn3 = document.querySelector('#elevenBtn');
textBtn3.value = localStorage.getItem('data3');
saveBtn3.addEventListener('click', savedText3);
function savedText3() {
    localStorage.setItem('data3', textBtn3.value);
};

var textBtn4 = document.querySelector('#twelve');
var saveBtn4 = document.querySelector('#twelveBtn');
textBtn4.value = localStorage.getItem('data4');
saveBtn4.addEventListener('click', savedText4);
function savedText4() {
    localStorage.setItem('data4', textBtn4.value);
};


var textBtn5 = document.querySelector('#one');
var saveBtn5 = document.querySelector('#oneBtn');
textBtn5.value = localStorage.getItem('data5');
saveBtn5.addEventListener('click', savedText5);
function savedText5() {
    localStorage.setItem('data5', textBtn5.value);
};

var textBtn6 = document.querySelector('#two');
var saveBtn6 = document.querySelector('#twoBtn');
textBtn6.value = localStorage.getItem('data6');
saveBtn6.addEventListener('click', savedText6);
function savedText6() {
    localStorage.setItem('data6', textBtn6.value);
};

var textBtn7 = document.querySelector('#three');
var saveBtn7 = document.querySelector('#threeBtn');
textBtn7.value = localStorage.getItem('data7');
saveBtn7.addEventListener('click', savedText7);
function savedText7() {
    localStorage.setItem('data7', textBtn7.value);
};

var textBtn8 = document.querySelector('#four');
var saveBtn8 = document.querySelector('#fourBtn');
textBtn8.value = localStorage.getItem('data8');
saveBtn8.addEventListener('click', savedText8);
function savedText8() {
    localStorage.setItem('data8', textBtn8.value);
};

//
var textBtn9 = document.querySelector('#five');
var saveBtn9 = document.querySelector('#fiveBtn');
textBtn9.value = localStorage.getItem('data9');
saveBtn9.addEventListener('click', savedText9);
function savedText9() {
    localStorage.setItem('data9', textBtn9.value);
};

//Color coding of timeslots

