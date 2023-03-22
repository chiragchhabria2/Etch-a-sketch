
// Declaring variables
let square;
let sqColor = "black";
const container = document.querySelector("#container");
let numberOfSquaresOnOneSide = 16;
let sizeBtn = document.getElementById("changeBtn");
let colorInput = document.getElementById("colorInput");
let randomBtn = document.getElementById("randomBtn");
let isRandom = false;

// Setting the number of squares per side
    document.querySelector(":root").style.setProperty("--NUMBER-OF-SQUARES", numberOfSquaresOnOneSide);

    createGrid(numberOfSquaresOnOneSide);

// Event listeners
   // Getting the number of squares per side from the user
sizeBtn.addEventListener("click", () => {
    numberOfSquaresOnOneSide = prompt("How many squares per side?");
    numberOfSquaresOnOneSide = parseInt(numberOfSquaresOnOneSide);
    if (numberOfSquaresOnOneSide > 100) {
        numberOfSquaresOnOneSide = 100;
    }
    document.querySelector(":root").style.setProperty("--NUMBER-OF-SQUARES", numberOfSquaresOnOneSide)
    deleteGrid();
    createGrid(numberOfSquaresOnOneSide );
});

 
colorInput.addEventListener("input", () => {
    sqColor = colorInput.value;
});

randomBtn.addEventListener("click", () => {
    isRandom = !isRandom; 
   
});


// Functions
    // Creating the grid with individual squares
function createGrid(length ) {
for (let i = 0; i < length ** 2; i++) {
    // creating and styling the squares
    square = document.createElement("div");
    square.classList.add("square");
    
    // Adding event listeners to the squares
    square.addEventListener("mouseover", draw);
    square.addEventListener("touchstart", draw);
    // Adding the squares to the container
    container.appendChild(square)


}

}
function draw() {
    if (!isRandom) 
    
         {
          this.style.backgroundColor = sqColor;
         } 
      else {
             this.style.backgroundColor = generateRandomColor();
      }   
    }

// Deleting the grid when the user changes the number of squares per side
function deleteGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
// Generating random colors
function generateRandomColor() {
    var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}