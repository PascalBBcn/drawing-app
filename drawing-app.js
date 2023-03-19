let colour = "black";
let click = true;

function populateBoard(size){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size*size; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
        square.addEventListener("mouseover", colourSquare);
    }
}
populateBoard(16);

function changeSize(input) {
    if(input >= 1 && input <= 100)
    {
        populateBoard(input);
    } else {
         console.log("Invalid input number!");
    }
}

function colourSquare() {
    if(click)
    {
        if(colour == "random")
        {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;    
        } 
        else {
            this.style.backgroundColor = colour;
        }
    }
    
}

function changeColour(choice) {
    colour = choice;
}

function resetBoard() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor="white");
}

document.querySelector("body").addEventListener("click", (e) => {
    if(e.target.tagName != "BUTTON" && e.target.tagName != "INPUT")
    {
        click = !click;
        if(click)
        {
            document.querySelector(".mode").textContent="Mode: Colouring";
        }
        else {
            document.querySelector(".mode").textContent="Mode: NOT Colouring";
        }
    }
});