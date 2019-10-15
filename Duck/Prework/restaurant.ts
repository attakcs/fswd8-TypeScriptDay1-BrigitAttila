var menu : Array <string> = ['burger', 'wrapper','toast'];

console.log(menu[0]);

for(let i=0; i<menu.length; i++) {
	var newp = document.createElement("p");
	var textnode = document.createTextNode(menu[i]);

	newp.appendChild(textnode);
	document.body.appendChild(newp);
}

const [itemOne, itemTwo, itemThree] = menu;

console.log(itemThree);

function showthetext(){
	var randomtext :string = "Hello World!"
	document.getElementById("result").innerHTML = randomtext;
}