const age = () => {
    var dateInput = document.getElementById('date').value;
    var monthInput = document.getElementById('month').value;
    var yearInput = document.getElementById('year').value; 

    var newDate = new Date();
    var currentDate = newDate.getDate();
    var currentMonth = newDate.getMonth() + 1;
    var currentYear = newDate.getFullYear();

    var  d = currentDate - dateInput;  
    var  m = currentMonth - monthInput;
    var  y = currentYear - yearInput;

    if(yearInput > currentYear) { 
        alert('Invalid year Input');
    }else if(monthInput > 13){
        alert('Invalid month Input');
    }else if(dateInput > 31){
        alert('Date should not be more than 31');
    }
   
    document.getElementById('age').innerHTML = 'Your Age is ' +y+ ' Years '+m+' Months '+d+' Days'; 
}