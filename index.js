// document.querySelector(":root").style.setProperty("--SQUARE-DIMENSIONS", "1000px");
let square;
const container = document.querySelector("#container");
let numberOfSquaresOnOneSide = 16;
document.querySelector(":root").style.setProperty("--NUMBER-OF-SQUARES", numberOfSquaresOnOneSide)
createGrid(numberOfSquaresOnOneSide);


let btn = document.getElementById("changeBtn");
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

 


function createGrid(length) {
for (let i = 0; i < length ** 2; i++) {
    square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square)

    let allSquares = document.querySelectorAll(".square");
    allSquares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "red";
        })
    })
}

}


function deleteGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}