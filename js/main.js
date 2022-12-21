"use strict"

var sellItem1Price = 600;
var sellItem2Price = 300;
var sellItem3Price = 1200;
var sellItem4Price = 1000;


document.getElementById("sell-item-1").innerHTML = sellItem1Price + "m";
document.getElementById("sell-item-2").innerHTML = sellItem2Price + "m";
document.getElementById("sell-item-3").innerHTML = sellItem3Price + "m";
document.getElementById("sell-item-4").innerHTML = sellItem4Price + "m";

function sellItem1(Item1Price){
    return sellItem1Price -= Item1Price;
}

function sellItem2(Item2Price){
    return sellItem2Price -= Item2Price;
}

function sellItem3(Item3Price){
    return sellItem3Price -= Item3Price;
}

function sellItem4(Item4Price){
    return sellItem4Price -= Item4Price;
}

sellItem1(200);
sellItem2(50);
sellItem3(100);
sellItem4(300);

document.getElementById("sell-item-1").innerHTML = sellItem1Price + "m";
document.getElementById("sell-item-2").innerHTML = sellItem2Price + "m";
document.getElementById("sell-item-3").innerHTML = sellItem4Price + "m";
document.getElementById("sell-item-4").innerHTML = sellItem4Price + "m";


// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = "<span>The discount lasts until the end of the year: </span>" + days + 
  "d " + hours + "h "  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);