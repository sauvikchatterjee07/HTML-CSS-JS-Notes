// //using the id or the class or the tag

// // let paraElement = document.getElementById("para");

// // paraElement.innerText = "Changed by me";

// // document.getElementById("para").innerText = "wefjhciurh";

// let paraElements = document.getElementsByClassName("para");
// paraElements[0].style.border = "2px solid black";
// paraElements[1].style.border = "2px solid black";
// paraElements[2].style.border = "2px solid black";
// paraElements[3].style.border = "2px solid black";

// function changeColor1() {
//   let para2 = document.getElementsByTagName("p")[0];
//   let btn = document.getElementsByTagName("button")[0];
//   para2.style.backgroundColor = "Blue";
//   para2.style.color = "white";
//   para2.style.padding = "2px";
//   btn.disabled = true;
// }
// function changeColor2() {
//   let para2 = document.getElementsByTagName("p")[1];
//   let btn = document.getElementsByTagName("button")[1];
//   para2.style.backgroundColor = "purple";
//   para2.style.color = "white";
//   para2.style.padding = "2px";
//   btn.disabled = true;
// }
// function changeColor3() {
//   let para2 = document.getElementsByTagName("p")[2];
//   let btn = document.getElementsByTagName("button")[2];
//   para2.style.backgroundColor = "Brown";
//   para2.style.color = "white";
//   para2.style.padding = "2px";
//   btn.disabled = true;
// }
// function changeColor4() {
//   let para2 = document.getElementsByTagName("p")[3];
//   let btn = document.getElementsByTagName("button")[3];
//   para2.style.backgroundColor = "black";
//   para2.style.color = "white";
//   para2.style.padding = "2px";
//   btn.disabled = true;
// }

// function highlightBtn1() {
//   let btn = document.getElementsByTagName("button")[0];
//   btn.style.backgroundColor = "orange";
// }
// function highlightBtn2() {
//   let btn = document.getElementsByTagName("button")[1];
//   btn.style.backgroundColor = "yellow";
// }
// function highlightBtn3() {
//   let btn = document.getElementsByTagName("button")[2];
//   btn.style.backgroundColor = "green";
// }
// function highlightBtn4() {
//   let btn = document.getElementsByTagName("button")[3];
//   btn.style.backgroundColor = "red";
// }

let index = 0;

function fillColor() {
  let boxes = document.getElementsByClassName("box");

  if (index < boxes.length) {
    switch (boxes[index].className) {
      case "box box-1":
        boxes[index].style.backgroundColor = "rgb(213, 0, 0)";
        boxes[index].innerText = "";

        //creating the element
        let circle = document.createElement("div");
        circle.style.height = "100px";
        circle.style.width = "100px";
        circle.style.borderRadius = "50px";
        circle.style.backgroundColor = "white";

        //append the element
        boxes[index].append(circle);

        break;
      case "box box-2":
        boxes[index].style.backgroundColor = "green";
        boxes[index].innerText = "";

        //creating the element
        let circle1 = document.createElement("div");
        circle1.style.height = "100px";
        circle1.style.width = "100px";
        circle1.style.borderRadius = "50px";
        circle1.style.backgroundColor = "white";

        //append the element
        boxes[index].append(circle1);
        break;
      case "box box-3":
        boxes[index].style.backgroundColor = "blue";
        boxes[index].innerText = "";
        //creating the element
        let circle2 = document.createElement("div");
        circle2.style.height = "100px";
        circle2.style.width = "100px";
        circle2.style.borderRadius = "50px";
        circle2.style.backgroundColor = "white";

        //append the element
        boxes[index].append(circle2);
        break;
      case "box box-4":
        boxes[index].style.backgroundColor = "blueviolet";
        boxes[index].innerText = "";
        break;
      case "box box-5":
        boxes[index].style.backgroundColor = "brown";
        boxes[index].innerText = "";
        break;
      case "box box-6":
        boxes[index].style.backgroundColor = "orangered";
        boxes[index].innerText = "";
        break;
      case "box box-7":
        boxes[index].style.backgroundColor = "yellow";
        boxes[index].innerText = "";
        break;
      case "box box-8":
        boxes[index].style.backgroundColor = "rgb(157, 0, 115)";
        boxes[index].innerText = "";
        break;
    }
    index++;
  } else {
    let btn = document.getElementById("btn");
    btn.disabled = true;
    btn.style.backgroundColor = "#ccc";
    btn.style.opacity = "0.6";
    btn.style.cursor = "not-allowed";
  }
}
