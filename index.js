// DOM Learn what matters
// --> What is DOM? => Document Object Module

// -->4  Pillars of DOM

// 1- Selection of an Element

// var a = document.querySelector("h1");
// console.log(a);

// 2- Changing HTMl

// var a = document.querySelector("h1");
// a.innerHTML = "Changed HTML";

// 3- Change CSS
// var a = document.querySelector("h1");
// a.style.color = "red";
// a.style.backgroundColor = "black";

// 4- Event Lustener

// var a = document.querySelector("h1");
// a.innerHTML = "Hello Developer";
// a.style.color = "yellow"; (Optional)
// a.style.backgroundColor = "#000"; (Optional)

// a.addEventListener("click", function () {
//   console.log("hello Developer");
//   a.innerHTML = "Hey there";
// });

// bulb DOM Operation

var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");

var flag = 0;

btn.addEventListener("click", function () {
  if (flag == 0) {
    bulb.style.backgroundColor = "yellow";
    console.log("Clicked");
    flag = 1;
  } else {
    bulb.style.backgroundColor = "transparent";
    console.log("Again Clicked");
    flag = 0;
  }
});

document.querySelectorAll;
var h = document.querySelectorAll("h1");
console.log(h); //Show in NodeList

h.forEach(function (e) {
  console.log(e);
});

var h = document.querySelector("h1");
h.innerHTML = "Hello Developer";
