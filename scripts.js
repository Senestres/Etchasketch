let penColor = "black"
let gridSize = 50
let grid = document.getElementById("grid")

let tool

//slider
let slider = document.getElementById("slider");
let output = document.getElementById("showValue");
output.innerHTML = "Canvas size:" + slider.value;

slider.oninput = function() {
  output.innerHTML = "Size:" + this.value;
  updateGrid()
}

//Grid creation and update
function gridResize() {
    gridSize = slider.value
    let gridPixelNumber = (1000 / gridSize)
    document.documentElement.style.setProperty("--size", gridPixelNumber + "px");
    document.documentElement.style.setProperty("--number", gridSize);
}

function createGrid() {
    for (i=0; i < (gridSize ** 2); i++) {
        const newDiv = document.createElement("div")
        grid.appendChild(newDiv);
        newDiv.classList.add("gridSquare");
    }
    addHover()
}

function updateGrid() {
    document.getElementById("grid").innerHTML = ""
    gridResize()
    createGrid()
}

//Add hover to grid
function addHover() {
    let gridArray = document.querySelectorAll(".gridSquare")
    gridArray.forEach( (e) => {
        e.addEventListener("mousemove", (event) => {
            if (event.buttons === 1) {
                if (tool == "eraser") {
                    event.target.style.backgroundColor = "white";

                } else if (tool === "rainbow") {
                    event.target.style.backgroundColor = randomRgbColor();

                } else {
                    event.target.style.backgroundColor = penColor;
                }

            }
        })
    })
}

// radiobuttons
function update() {
    tool = document.querySelector('input[name="tool"]:checked').value;
    console.log(tool)
}

// Create a random color
function randomRgbColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return "rgb("+r+", "+g+", "+b+")";
}

// pick a color
let colorPicker = document.getElementById("colorPicker")
colorPicker.addEventListener("change", watchColorPicker, false);
function watchColorPicker(event) {
    penColor = event.target.value;
}

window.onload = updateGrid()