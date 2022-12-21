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

sellItem1Price(200);
sellItem2Price(50);
sellItem3Price(100);
sellItem4Price(300);

document.getElementById("sell-item-1").innerHTML = sellItem1Price + "m";
document.getElementById("sell-item-2").innerHTML = sellItem2Price + "m";
document.getElementById("sell-item-3").innerHTML = sellItem4Price + "m";
document.getElementById("sell-item-4").innerHTML = sellItem4Price + "m";