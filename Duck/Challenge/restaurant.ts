

var burger: Array<{name: string, price:string}> = [
								{name:"Paris Burger",price:"EUR 8.90,-"}, 
								{name:"London Burger" ,price:"EUR 9.90,-"}, 
								{name:"Roma Burger" ,price:"EUR 7.90,-"},
								{name:"Amsterdamm Burger" ,price:"EUR 8.90,-"}
								];

var smoothie: Array<{name: string, price:string}> = [
								{name: "Japan Smoothie", price: "EUR 4.50,-" },
								{name: "Vietnam Smoothie", price: "EUR 3.90,-"},
								{name: "China Smoothie", price: "EUR 4.80,-"},
								{name: "Hongkong Smoothie", price: "EUR 4.90;-"}
								];	

var sandwich: Array<{name: string, price:string}> = [
								{name: "New York Sandwich", price: "EUR 6.50,-" },
								{name: "Chicago Sandwich", price: "EUR 5.90,-"},
								{name: "Texas Sandwich", price: "EUR 7.80,-"},
								{name: "Kansas Sandwich", price: "EUR 8.90;-"}
								];	


for( let i of burger){
	//console.log(i.name + i.price);
	document.getElementById("burger").innerHTML += `<div class = "flex">
																<p class = "card-text">` + i.name + 
																`</p><p class = "ts">` + i.price + 
																`</p>
																</div>`;
																};

for (let i of smoothie) {
	document.getElementById("smoothie").innerHTML += `<div class = "flex">
																<p class = "card-text">` + i.name + 
																`</p><p class = "ts">` + i.price + 
																`</p>
																</div>`;
																};

for (let i of sandwich) {
	document.getElementById("sandwich").innerHTML += `<div class = "flex">
																<p class = "card-text">` + i.name + 
																`</p><p class = "ts">` + i.price + 
																`</p>
																</div>`;
																};





