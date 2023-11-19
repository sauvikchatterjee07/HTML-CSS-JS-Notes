let arr = [
  "john",
  "zunaim",
  "ribhu",
  "ankan",
  "arju",
  "abhisekh",
  "bonny",
  "akash",
];

let index = 0;

let element;

function callUser() {
  if (index < arr.length) {
    element = document.createElement("h1");
    element.innerText = arr[index];
    element.style.width = "100%";
    element.style.border = "2px solid brown";
    element.style.textAlign = "Center";

    let contrainer = document.getElementById("container");
    contrainer.append(element);
    index++;
  } else {
    let btn = document.getElementById("btn");
    btn.disabled = true;
    btn.style.opacity = 0.4;
    btn.style.backgroundColor = "gray";
  }
}
