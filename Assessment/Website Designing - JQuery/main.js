function updatetime(){
    var time = new Date();

    var dayname = time.getDay();
    var mo = time.getMonth();
    var date = time.getDate();
    var year = time.getFullYear();

    var months = ["Jan ","Feb ","Mar ","Apr ","May ","Jun ","Jul ","Aug ","Sept ","Oct ","Nov ","dec "];
    var week = ["Sunday","Monday","Tuesday","Wednesday","Thusday","Friday","Saturday"];
    var ids = ["dayname","mo","date","year"];
    var values = [week[dayname], months[mo], date, year];
    for(var i=0; i<ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];

    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var am_pm = document.getElementById('am-pm');
    if(hours >= 12){
        am_pm.innerHTML="PM";
    }
    else{
        am_pm.innerHTML="AM";
    }

    
    if(hours > 12){
        hours = hours - 12;
    }
    document.getElementById('hours').innerHTML=hours;
    document.getElementById('minutes').innerHTML=minutes;
    document.getElementById('seconds').innerHTML=seconds;
}

setInterval(updatetime, 1000);