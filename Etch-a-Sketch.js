//Change the following grid according to the prompt
let linesRequested;
function generateNewGrid() {
    //Get the user input
    linesRequested = prompt('How many lines do you want?');
    linesRequested = parseInt(linesRequested);
    
    const frame = document.querySelector('.frame');
    const grid = document.querySelector('.grid');

    //Make the grid disappear once the button gets clicked
    if (frame.contains(grid)) {
        frame.removeChild(grid);
    }
    const newGrid = document.createElement('div');
    newGrid.classList.add('grid');

    for (let i = 1; i <= (linesRequested * linesRequested); i++) {
        const newSquare = document.createElement('div');
        newSquare.classList.add('newSquare');
        newSquare.style.width = `${960 / linesRequested - 4}px`;
        newSquare.style.height = `${960 / linesRequested - 4}px`;
        newGrid.appendChild(newSquare);

        //Add hover and pixelated effect to the squares
        newSquare.addEventListener("mouseover", () => {
            newSquare.style.backgroundColor = 'black';
        })
    }
    frame.appendChild(newGrid);
}

//Locate the container
const frame = document.querySelector('.frame');

//Locate the button
const button = document.querySelector('.button');

//Create the 16x16 grid
const grid = document.createElement('div');
grid.classList.add('grid');

for (let i = 1; i <= (16 * 16); i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);

    //Add hover and pixelated effect to the squares
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = 'black';
    })
}
frame.appendChild(grid);

//main
button.addEventListener('click', generateNewGrid);

