var menu = ['burger', 'wrapper', 'toast'];
console.log(menu[0]);
for (var i = 0; i < menu.length; i++) {
    var newp = document.createElement("p");
    var textnode = document.createTextNode(menu[i]);
    newp.appendChild(textnode);
    document.body.appendChild(newp);
}
var itemOne = menu[0], itemTwo = menu[1], itemThree = menu[2];
console.log(itemThree);
function showthetext() {
    var randomtext = "Hello World!";
    document.getElementById("result").innerHTML = randomtext;
}
