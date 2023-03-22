let square;
let sqColor = "black";
const container = document.querySelector("#container");
let numberOfSquaresOnOneSide = 16;
document.querySelector(":root").style.setProperty("--NUMBER-OF-SQUARES", numberOfSquaresOnOneSide)
createGrid(numberOfSquaresOnOneSide);


let btn = document.getElementById("changeBtn");
let colorInput = document.getElementById("colorInput");
let randomBtn = document.getElementById("randomBtn");
let isRandom = false;
btn.addEventListener("click", () => {
    numberOfSquaresOnOneSide = prompt("How many squares per side?");
    numberOfSquaresOnOneSide = parseInt(numberOfSquaresOnOneSide);
    if (numberOfSquaresOnOneSide > 100) {
        numberOfSquaresOnOneSide = 100;
    }
    document.querySelector(":root").style.setProperty("--NUMBER-OF-SQUARES", numberOfSquaresOnOneSide)
    deleteGrid();
    createGrid(numberOfSquaresOnOneSide , isRandom);
});

 
colorInput.addEventListener("input", () => {
    sqColor = colorInput.value;
});

randomBtn.addEventListener("click", () => {
    isRandom = !isRandom; 
   
});



function createGrid(length ) {
for (let i = 0; i < length ** 2; i++) {
    square = document.createElement("div");
    square.classList.add("square");
    
    square.addEventListener("mouseover", function() {
       if (!isRandom) 
       
            {
             this.style.backgroundColor = sqColor;
            } 
         else {
                this.style.backgroundColor = generateRandomColor();
         }   
       },
            //   {once : isRandom }
             );
    container.appendChild(square)


}

}


function deleteGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function generateRandomColor() {
    var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}