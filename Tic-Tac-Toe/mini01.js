// Select all the boxes, buttons, and message container
let boxes = document.querySelectorAll(".box");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// Initialize the first turn
let turn0 = true;

// Define the winning patterns
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// Function to reset the game
const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

// Add event listeners to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");

        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

// Function to disable all boxes
const disableBoxes = () => {
    boxes.forEach(box => {
        box.disabled = true;
    });
};

// Function to enable all boxes and reset their content
const enableBoxes = () => {
    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
    });
};

// Function to display the winner
const showwinner = (winner) => {
    msg.innerText = `${winner} is the winner!`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

// Function to check for a winner
const checkwinner = () => {
    for (let patterns of winpatterns) {
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showwinner(pos1val);
                return;
            }
        }
    }
};

// Add event listeners to the reset buttons
btn2.addEventListener("click", resetGame);
btn1.addEventListener("click", resetGame);
