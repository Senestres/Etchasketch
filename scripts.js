let penColor = "purple"
let gridSize = 50
let grid = document.getElementById("grid")

//slider
let slider = document.getElementById("slider");
let output = document.getElementById("showValue");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  updateGrid()
}

function gridResize() {
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
    gridSize = slider.value
    document.getElementById("grid").innerHTML = ""
    gridResize()
    createGrid()
    console.log(gridSize, gridPixelNumber)
}

function addHover() {
    let gridArray = document.querySelectorAll(".gridSquare")
    gridArray.forEach( (e) => {
        e.addEventListener("mousemove", (event) => {
            if (event.buttons === 1) {
            event.target.style.backgroundColor = penColor;
            }
        })
    })
}

window.onload = createGrid()
console.log(gridSize, gridPixelNumber)