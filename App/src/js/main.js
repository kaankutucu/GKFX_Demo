$(document).ready(function(){
    var getElemHeight = function(){
        var elem = $(".bottom-form-area");
        var parentElem = elem.parent();
        parentElem.attr('style','height:'+ parseInt(elem.height()) + 'px');
    }
    getElemHeight();
    window.addEventListener("resize",getElemHeight);
    $("#howDemo").fadeIn("slow",function(){});
    var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
    var myFunct = setInterval(function(){
        var now = new Date().getTime();
        var calculate = countDownDate - now;
        var days = Math.floor(calculate / (1000 * 60 * 60 * 24));
        var hours = Math.floor((calculate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((calculate % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((calculate % (1000 * 60)) / 1000);
        document.getElementById("day").innerHTML = days;
        document.getElementById("hour").innerHTML = hours;
        document.getElementById("min").innerHTML = minutes;
        if(calculate<0){
            clearInterval(myFunct)
            document.getElementById("time-zone").innerHTML= "Süre Bitti";
        }
    },1000)
});
