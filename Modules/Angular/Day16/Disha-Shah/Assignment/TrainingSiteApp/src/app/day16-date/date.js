export function date(){
    var d = new Date(2018, 11, 24, 10, 33, 30, 0);
        document.getElementById("demo").innerHTML = "Date with given specified values: " + d;

        var d = new Date(2018);
        document.getElementById("demo1").innerHTML = "Considers one input as milliseconds: " + d;

        var d = new Date("October 13, 2014 11:13:00");
        document.getElementById("demo2").innerHTML = "Date with given specified values: " + d.toDateString();

        var d = new Date("2015-03-25T12:00:00Z");
        document.getElementById("demo3").innerHTML = d;

        document.getElementById("demo4").innerHTML = new Date("2015-03-25T12:00:00-06:00");

        var msec = Date.parse("March 21, 2012");
        document.getElementById("demo5").innerHTML = "No. of milliseconds from Jan 1, 1970 till March 21, 2012: " + msec;

        var d = new Date();
        console.log("Today's date " + d.getDate());
        console.log("Today's day " + d.getDay());
        console.log("Today's year " + d.getFullYear());
        console.log("current hours " + d.getHours());
        console.log("current milliseconds " + d.getMilliseconds());
        console.log("current mins " + d.getMinutes());
        console.log("Today's month " + d.getMonth());
        console.log("current seconds " + d.getSeconds());
        console.log("milliseconds since then " + d.getTime());
        console.log("Set date " + d.setDate(1) + d);
        console.log("Set year " + d.setFullYear(2012) + d);
        console.log("Set hours " + d.setHours(13) + d);
        console.log("Set milliseconds " + d.setMilliseconds(560) + d);
        console.log("Set minutes " + d.setMinutes(55) + d);
        console.log("Set month " + d.setMonth(10) + d);
        console.log("Set seconds " + d.setSeconds(30) + d);

        function myFunc() { 
            var sidebarContent = document.getElementById("sidebar"); 
            sidebarContent.classList.toggle("active");
            return false; 
        }

}