const container = document.getElementById("container");
const body = document.querySelector("body");
function makeButton() {
  let div = document.createElement("div");
  let button = document.createElement("button");
  button.innerText = "Clear Grid";
  button.className = "button";
  div.appendChild(button);
  body.appendChild(div);
  button.addEventListener("click", refreshPage);
}
makeButton();
//create function to make 16x16 grid of boxes as html elements and add them to the body of the page
function makeGrid(rows, columns) {
  //get the height and width of the grid from the user
  rows = prompt("How many rows?");
  columns = prompt("How many columns?");
  if (
    rows < 0 ||
    !rows ||
    columns < 0 ||
    rows > 100 ||
    columns > 100 ||
    !columns
  ) {
    alert("Please enter a number between 1 and 100");
  } else {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-columns", columns);
    let counter = 0;
    //create a for loop to create the rows
    for (let i = 0; i < rows * columns; i++) {
      //create a div element
      let div = document.createElement("div");
      //add the div to the container
      div.innerText = i + 1;
      div.className = "grid-item";
      container.appendChild(div);
      //add a class to the div
      div.classList.add("grid-item");
    }
    let br = document.createElement("br");
    container.appendChild(br);
  }
}
function rbgMouseOver() {
  let counter = 0;

  let gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.addEventListener("mouseover", function () {
      if (counter < 100) {
        counter++;
        console.log(counter);
        item.style.backgroundColor = rgbZ();
      }
    });
  });
}
function rgbZ() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function refreshPage() {
  console.log("refresh");
  clearGrid();
  makeGrid();
  rbgMouseOver();
}

function clearGrid() {
  container.innerHTML = "";
  alert("Grid Cleared");
}

document.onload = refreshPage();
