//find element with the class "list"
let find = document.querySelector(".list");
console.log(find.innerHTML);

//find an element li and change it
let a = document.getElementsByTagName("li");
let b = a[1];
b.innerHTML = "<li>Cascading Style Sheets</li>";

//change the color of the text in div
let changeColor = document.querySelector("#myID");
changeColor.style.color = "red";



