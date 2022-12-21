sell_item_1_price = 600
sell_item_2_price = 300
sell_item_3_price = 1200
sell_item_4_price = 1000


document.getElementById("sell-item-1").innerHTML = sell_item_1_price + "m"
document.getElementById("sell-item-2").innerHTML = sell_item_2_price + "m"
document.getElementById("sell-item-3").innerHTML = sell_item_3_price + "m"
document.getElementById("sell-item-4").innerHTML = sell_item_4_price + "m"

function sell_item_1(item_1_price){
    return sell_item_1_price -= item_1_price
}

function sell_item_2(item_2_price){
    return sell_item_2_price -= item_2_price
}

function sell_item_3(item_3_price){
    return sell_item_3_price -= item_3_price
}

function sell_item_4(item_4_price){
    return sell_item_4_price -= item_4_price
}

sell_item_1(200)
sell_item_2(50)
sell_item_3(100)
sell_item_4(300)

document.getElementById("sell-item-1").innerHTML = sell_item_1_price + "m"
document.getElementById("sell-item-2").innerHTML = sell_item_2_price + "m"
document.getElementById("sell-item-3").innerHTML = sell_item_3_price + "m"
document.getElementById("sell-item-4").innerHTML = sell_item_4_price + "m"