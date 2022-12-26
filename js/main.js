var dateInput = document.getElementById('date').value;
var monthInput = document.getElementById('month').value;
var yearInput = document.getElementById('year').value; 

var currentDate = new Date();
var d2 = currentDate.getDate();
var m2 = currentDate.getMonth() + 1;
var y2 = currentDate.getFullYear();

const age = () => {
    var  d = d2 - dateInput;  
    var  m = m2 - monthInput;
    var  y = y2 - yearInput;


    document.getElementById('age').innerHTML = 'Your Age is ' +y+ ' Years '+m+' Months '+d+' Days'; 
    console.log(m2)
}