//When page is loaded, the dom will retrieve the current date
$(document).ready(function() {
    var date = $("#currentDay");
    var today = moment().format('dddd, MMMM Do YYYY');
    date.text(today);
});

var textBtn1 = document.querySelector('#nine');
var saveBtn1 = document.querySelector('#nineBtn');
textBtn1.value = localStorage.getItem('data1');
saveBtn1.addEventListener('click', savedText1);
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
