var burger = [
    { name: "Paris Burger", price: "EUR 8.90,-" },
    { name: "London Burger", price: "EUR 9.90,-" },
    { name: "Roma Burger", price: "EUR 7.90,-" },
    { name: "Amsterdamm Burger", price: "EUR 8.90,-" }
];
var smoothie = [
    { name: "Japan Smoothie", price: "EUR 4.50,-" },
    { name: "Vietnam Smoothie", price: "EUR 3.90,-" },
    { name: "China Smoothie", price: "EUR 4.80,-" },
    { name: "Hongkong Smoothie", price: "EUR 4.90;-" }
];
var sandwich = [
    { name: "New York Sandwich", price: "EUR 6.50,-" },
    { name: "Chicago Sandwich", price: "EUR 5.90,-" },
    { name: "Texas Sandwich", price: "EUR 7.80,-" },
    { name: "Kansas Sandwich", price: "EUR 8.90;-" }
];
for (var _i = 0, burger_1 = burger; _i < burger_1.length; _i++) {
    var i = burger_1[_i];
    //console.log(i.name + i.price);
    document.getElementById("burger").innerHTML += "<div class = \"flex\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class = \"card-text\">" + i.name +
        "</p><p class = \"ts\">" + i.price +
        "</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>";
}
;
for (var _a = 0, smoothie_1 = smoothie; _a < smoothie_1.length; _a++) {
    var i = smoothie_1[_a];
    document.getElementById("smoothie").innerHTML += "<div class = \"flex\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class = \"card-text\">" + i.name +
        "</p><p class = \"ts\">" + i.price +
        "</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>";
}
;
for (var _b = 0, sandwich_1 = sandwich; _b < sandwich_1.length; _b++) {
    var i = sandwich_1[_b];
    document.getElementById("sandwich").innerHTML += "<div class = \"flex\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class = \"card-text\">" + i.name +
        "</p><p class = \"ts\">" + i.price +
        "</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>";
}
;
