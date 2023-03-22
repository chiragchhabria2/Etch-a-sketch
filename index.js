let square;
let sqColor = "black";
const container = document.querySelector("#container");
let numberOfSquaresOnOneSide = 16;
document.querySelector(":root").style.setProperty("--NUMBER-OF-SQUARES", numberOfSquaresOnOneSide)
createGrid(numberOfSquaresOnOneSide);


let btn = document.getElementById("changeBtn");
let colorInput = document.getElementById("colorInput");
btn.addEventListener("click", () => {
    numberOfSquaresOnOneSide = prompt("How many squares per side?");
    numberOfSquaresOnOneSide = parseInt(numberOfSquaresOnOneSide);
    if (numberOfSquaresOnOneSide > 100) {
        numberOfSquaresOnOneSide = 100;
    }
    document.querySelector(":root").style.setProperty("--NUMBER-OF-SQUARES", numberOfSquaresOnOneSide)
    deleteGrid();
    createGrid(numberOfSquaresOnOneSide);
});

 
colorInput.addEventListener("input", () => {
    sqColor = colorInput.value;
});

function createGrid(length) {
for (let i = 0; i < length ** 2; i++) {
    square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", function() {
             this.style.backgroundColor = sqColor;});
    container.appendChild(square)


}

}


function deleteGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}