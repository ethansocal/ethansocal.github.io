var mondaySchedule = "Period 0/5:9:45:10:28;Period 1/6:10:34:11:14;Break:11:14:11:21;Period 2/7:11:27:12:07;Period 3/8:12:13:12:53;Lunch:12:53:13:28;PAWS:13:34:13:59;Period 4/9:14:05:14:45";
mondaySchedule = mondaySchedule.split(";");
var normalSchedule = "Period 0/5:8:45:9:38;Period 1/6:9:45:10:34;Break:10:34:10:41;Period 2/7:10:48:11:37;Period 3/8:11:44:12:33;Lunch:12:33:13:08;<a href='https://drive.google.com/file/d/1yg_afS4BswjBJY-13YsUEICAQJTOwHh5/view'>PAWS</a>:13:15:13:40;Period 4/9:13:47:14:35";
normalSchedule = normalSchedule.split(";");
var minimumDaySchedule = "Not Done!!!:0:1:23:58";
minimumDaySchedule = minimumDaySchedule.split(";");
dummy1 = [];
for (dummy3 in mondaySchedule){
    dummy1.push(mondaySchedule[dummy3].split(":"));
}
mondaySchedule = dummy1;
dummy1 = [];
for (dummy3 in normalSchedule){
    dummy1.push(normalSchedule[dummy3].split(":"));
}
normalSchedule = dummy1;
dummy1 = [];
for (dummy3 in minimumDaySchedule){
    dummy1.push(minimumDaySchedule[dummy3].split(":"));
}
minimumDaySchedule = dummy1;
console.log(mondaySchedule);
console.log(normalSchedule);
console.log(minimumDaySchedule);
function getMinimumDay() {
    var name = "minimumDay" + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  

var loop = setInterval(function() {
    now = new Date();
    time = now.getHours() * 60 + now.getMinutes();
    var timeNow = "undefined";
    var timeTill = "never";
    var timeElapsed = "nothing";
    var isMinimumDay = getMinimumDay();
    if (isMinimumDay ==="true") {
        var todaySchedule = minimumDaySchedule;
        for (timeNum in todaySchedule) {
            if (parseInt(todaySchedule[timeNum][1]) * 60 + parseInt(todaySchedule[timeNum][2]) <= time && parseInt(todaySchedule[timeNum][3]) * 60 + parseInt(todaySchedule[timeNum][4]) > time) {
                timeNow = todaySchedule[timeNum][0];
                timeElapsed = "Time Elapsed:<br>"+(time - (parseInt(todaySchedule[timeNum][1])* 60 + parseInt(todaySchedule[timeNum][2])).toString()) + ":" + (now.getSeconds());
                timeTill = "Time Remaining:<br>"+((parseInt(todaySchedule[timeNum][3])*60 + parseInt(todaySchedule[timeNum][4])) - time - 1).toString() + ":" + (59 - now.getSeconds());
                break;
            } 
            
        }
        if (timeNow === "undefined") {
            if (time < parseInt(todaySchedule[0][1])*60+parseInt(todaySchedule[0][2])) {
                timeNow = "Before School";
                timeElapsed = "School Start: "+todaySchedule[0][1]+":"+todaySchedule[0][2];
            } else if (time >= parseInt(todaySchedule[todaySchedule.length-1][3])*60+parseInt(todaySchedule[todaySchedule.length-1][4])) {
                timeNow = "After School";
                timeElapsed = "Do your HW or relax!";
                timeTill = "No School";
            } else {
                timeNow = "Passing Period!";
                timeElapsed = "Passing Period!";
                timeTill = "Passing Period!";
            }
        }
    } else if (now.getDay() === 1) {
        var todaySchedule = mondaySchedule;
        for (timeNum in todaySchedule) {
            if (parseInt(todaySchedule[timeNum][1]) * 60 + parseInt(todaySchedule[timeNum][2]) <= time && parseInt(todaySchedule[timeNum][3]) * 60 + parseInt(todaySchedule[timeNum][4]) > time) {
                timeNow = todaySchedule[timeNum][0];
                timeElapsed = "Time Elapsed:<br>"+(time - parseInt(todaySchedule[timeNum][1])* 60 + parseInt(todaySchedule[timeNum][2])).toString() + ":" + (now.getSeconds());
                timeTill = "Time Remaining:<br>"+((parseInt(todaySchedule[timeNum][3])*60 + parseInt(todaySchedule[timeNum][4])) - time - 1).toString() + ":" + (59 - now.getSeconds());
                break;
            } 
            
        }
        if (timeNow === "undefined") {
            if (time < parseInt(todaySchedule[0][1])*60+parseInt(todaySchedule[0][2])) {
                timeNow = "Before School";
                timeElapsed = "School Start: "+todaySchedule[0][1]+":"+todaySchedule[0][2];
            } else if (time >= parseInt(todaySchedule[todaySchedule.length-1][3])*60+parseInt(todaySchedule[todaySchedule.length-1][4])) {
                timeNow = "After School";
                timeElapsed = "Do your HW or relax!";
                timeTill = "After School";
            } else {
                timeNow = "Passing Period!";
                timeElapsed = "Passing Period!";
                timeTill = "Passing Period!";
            }
        }
    } else if (now.getDay() === 3 || now.getDay() == 5 || now.getDay() == 4 || now.getDay() == 2) {
        var todaySchedule = normalSchedule;
        for (timeNum in todaySchedule) {
            if (parseInt(todaySchedule[timeNum][1]) * 60 + parseInt(todaySchedule[timeNum][2]) <= time && parseInt(todaySchedule[timeNum][3]) * 60 + parseInt(todaySchedule[timeNum][4]) > time) {
                timeNow = todaySchedule[timeNum][0];
                timeElapsed = "Time Elapsed:<br>"+(time - (parseInt(todaySchedule[timeNum][1])* 60 + parseInt(todaySchedule[timeNum][2])).toString()) + ":" + (now.getSeconds());
                timeTill = "Time Remaining:<br>"+((parseInt(todaySchedule[timeNum][3])*60 + parseInt(todaySchedule[timeNum][4])) - time - 1).toString() + ":" + (59 - now.getSeconds());
                break;
            } 
            
        }
        if (timeNow === "undefined") {
            if (time < parseInt(todaySchedule[0][1])*60+parseInt(todaySchedule[0][2])) {
                timeNow = "Before School";
                timeElapsed = "School Start: "+todaySchedule[0][1]+":"+todaySchedule[0][2];
            } else if (time >= parseInt(todaySchedule[todaySchedule.length-1][3])*60+parseInt(todaySchedule[todaySchedule.length-1][4])) {
                timeNow = "After School";
                timeElapsed = "Do your HW or relax!";
                timeTill = "After School";
            } else {
                timeNow = "Passing Period!";
                timeElapsed = "Passing Period!";
                timeTill = "Passing Period!";
            }
        }
   
        

    } else {
        timeNow = "Weekend!"
        timeElapsed = "Do your HW or relax!"
        timeTill = "No School!"
    }
    if ($("#time").html() != timeNow) {
        console.log("New time");
        if ($("#time").attr("class").includes("open")) {
            $("#time").removeClass("open");
        } else {
            $("#time").html(timeNow)
            $("#time").addClass("open");
            
        }
    }
    if ($("#timeRemaining").html() != timeTill) {
        $("#timeRemaining").html(timeTill);
    }
    if ($("#timeElapsed").html() != timeElapsed) {
        $("#timeElapsed").html(timeElapsed);
    }
}, 500);

function minimumDay() {
    console.log("Cookie generated")
    var d = new Date();
    d = new Date(d.getFullYear(),d.getMonth(), d.getDate(), 23, 59, 58)
    var expires = "expires="+ d.toUTCString();
    document.cookie = "minimumDay" + "=" + "true" + ";" + expires + ";path=/";
}
  
function unMinimumDay() {
    console.log("Cookie destroyed")
    document.cookie = "minimumDay=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
}