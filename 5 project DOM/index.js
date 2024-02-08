{
  /* <h1>1. Add friend Feature with same button JS</h1> */
}

// var istatus = document.querySelector("h5");

// var btn = document.querySelector("#add");
// var check = 0;

// btn.addEventListener("click", function () {
//   if (check == 0) {
//     istatus.innerHTML = "Friends";
//     istatus.style.color = "green";
//     // console.log("Friend is added");
//     btn.innerHTML = "Remove Friend";
//     check = 1;
//   } else {
//     istatus.innerHTML = "Stranger";
//     istatus.style.color = "red";
//     // console.log("Friend is added");
//     btn.innerHTML = "Add Friend";
//     check = 0;
//   }
// });

// var removefriend = document.querySelector("#remove");

// removefriend.addEventListener("click", function () {
//   istatus.innerHTML = "Stranger";
//   istatus.style.color = "red";
// });

{
  /* <h1>2. Insta Love btn JS</h1> */
}

// var con = document.querySelector("#container");
// var love = document.querySelector("i");

// con.addEventListener("dblclick", function () {
//   love.style.transform = "translate(-50%, -50%) scale(1)";
//   love.style.opacity = 0.8;
//   love.style.color = "#F01247";

//   setTimeout(function () {
//     love.style.opacity = 0;
//   }, 1000);

//   setTimeout(function () {
//     love.style.transform = "translate(-50%, -50%) scale(0)";
//   }, 2000);
// });

{
  /* <h1>3. Custom Cursor JS</h1> */
}

// var main = document.querySelector("#main");
// var crsr = document.querySelector(".cursor");

// main.addEventListener("mousemove", function (dets) {
//   //   console.log(dets.x, dets.y);
//   crsr.style.left = dets.x + "px";
//   crsr.style.top = dets.y + "px";
// });

{
  /* <h1>04. JS</h1> */
}

/*
noly one div apply 
var elem1 = document.querySelector("#elem1");

var elemImage = document.querySelector("#elem1 img");

elem1.addEventListener("mousemove", function (dets) {
  elemImage.style.left = dets.x + "px";
  elemImage.style.top = dets.y + "px";
});

elem1.addEventListener("mouseenter", function (dets) {
  elemImage.style.opacity = 1;
});

elem1.addEventListener("mouseleave", function (dets) {
  elemImage.style.opacity = 0;
});
*/

// all div apply the transition effect

// var elem = document.querySelectorAll(".elem");

// elem.forEach(function (val) {
//   //   console.log(val.childNodes[3]);

//   val.addEventListener("mouseenter", function () {
//     // console.log("enterd");
//     val.childNodes[3].style.opacity = 1;
//   });
//   val.addEventListener("mouseleave", function () {
//     // console.log("leaved");
//     val.childNodes[3].style.opacity = 0;
//   });

//   val.addEventListener("mousemove", function (dets) {
//     val.childNodes[3].style.left = dets.x + "px";
//     val.childNodes[3].style.top = dets.y + "px";
//   });
// });

{
  /* <h1>05. Insta Stories JS</h1> */
}

var arr = [
  {
    dp: "https://i.pinimg.com/564x/a2/8c/43/a28c433a7c96986b44cf5df715f2c4ac.jpg",
    story:
      "https://i.pinimg.com/564x/da/c1/e3/dac1e35643a85ce1c9f4f5ff6f78e1f3.jpg",
  },
  {
    dp: "https://i.pinimg.com/474x/b7/b8/40/b7b840f066913529ac4e23774a9bedb7.jpg",
    story:
      "https://i.pinimg.com/736x/c7/b2/be/c7b2be10edd12a3a73a18aa6e75d729a.jpg",
  },

  {
    dp: "https://i.pinimg.com/564x/67/2c/e8/672ce8d823abee6d4ece676350308b34.jpg",
    story:
      "https://i.pinimg.com/564x/68/04/61/6804613afee54344b3cbd06e31cbb8fb.jpg",
  },
  {
    dp: "https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    story:
      "https://images.pexels.com/photos/2435200/pexels-photo-2435200.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

var storiyan = document.querySelector("#storiyan");

var clutter = "";
arr.forEach(function (elem, idx) {
  clutter += `<div class="story"><img id='${idx}'src="${elem.dp}" alt=""></div>`;
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function (dets) {
  console.log(dets);
  document.querySelector("#full-screen").style.display = "block";

  document.querySelector("#full-screen").style.backgroundImage = `url(${
    arr[dets.target.id].story
  })`;

  setTimeout(function () {
    document.querySelector("#full-screen").style.display = "none";
  }, 3000);
});
