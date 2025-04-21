let button=document.querySelectorAll(".box");

let currValue = 0;
let moves = 0;

const random = () => {
    currValue = 1 - currValue;
    return currValue;
};

let grid = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

const winPatterns = [
    // Rows
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    // Columns
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    // Diagonals
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
];

function checkWinner(player) {
    for (let i = 0; i < winPatterns.length; i++) {
        let pattern = winPatterns[i];
        let allMatch = 0;
        // let allMatch = true;

        for (let j = 0; j < pattern.length; j++) {
            let r = pattern[j][0];
            let c = pattern[j][1];

            if (grid[r][c] === player) {
                allMatch++;
            }
            // if (grid[r][c] !== player) {  
            //     allMatch = false;
            //     break;
            // }
        }
        if(allMatch===3){
            return true;
        }
    }
    return false;
}

let players=document.getElementsByClassName("ele")[0];
button.forEach((btn) => {
    btn.onclick = () => {
        let row = btn.getAttribute("data-row");
        let col = btn.getAttribute("data-col");
        let choice = random() > 0 ? "X" : "O";

        grid[row][col] = choice;
        btn.textContent = choice;
        btn.disabled = true;
        moves++;

        if(choice==="X"){
            players.textContent="Player 2 Turn"
            players.style.color="#67AE6E";
        }
        else{
            players.textContent="Player 1 Turn"
            players.style.color="#FF0B55";
        }


        if (checkWinner(choice))
        {
            let winner=(choice==="X")?"Player 1":"Player 2";
            let color=(choice==="X")?"#FF0B55":"#67AE6E";

            players.textContent=`${winner} Wins!`
            players.style.color=color;
            alert(`${winner} wins!`);
        } 
        else if (moves === 9)
        {
            alert("It's a draw!");
            players.textContent="No One Wins"
            players.style.color="black";
        }

        // console.log(grid);
        // console.log("Moves:", moves);
    };
});

let reset=document.getElementsByClassName("btn-reset")[0];
reset.onclick=()=>{
    window.location="TicTac.html";
}