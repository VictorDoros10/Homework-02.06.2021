//set the id attribute and get it
let element = document.querySelector("#myID").setAttribute("id", "myID1");
let changedID = document.querySelector("#myID1").getAttribute("id");
console.log(changedID);

//finds the class list
let element1 = document.querySelector("#myID1").classList.contains("list");
console.log(element1);

//add a new class and execute it on click
function myFunction1(){
    document.getElementById("myID1").classList.add("my-new-class");
}

//toggle
function myFunction2(){
    document.getElementById("div").classList.toggle("text");
}