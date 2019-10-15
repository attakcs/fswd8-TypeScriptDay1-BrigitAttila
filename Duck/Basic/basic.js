var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var table = [];
for (var i = 0; i < 10; i++) {
    for (var j = 1; j < 11; j++) {
        document.getElementById("result").innerHTML += ("<tr><th scope=\"col\">" + myArray[i] + " x " + j + " = " + myArray[i] * j + "</th></tr>");
    }
    ;
    document.getElementById("result").innerHTML += "<hr>";
}
;
console.table(table);
document.write(table);
// for (let i of myArray) {
// 	for (let j of myArray) {
// 		console.log(i,j);
// 		document.getElementById("result").innerHTML += `${i} X ${j} = ${i*j} <br>`
// 	}
// 		document.getElementById("result").innerHTML += "<hr>";
// }
