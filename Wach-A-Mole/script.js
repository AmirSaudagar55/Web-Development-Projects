let squares = document.getElementsByClassName("square");
let mole = document.getElementsByClassName("mole")

let scoreboard = document.getElementById("score");
let result = 0;
scoreboard.innerHTML = result;

let timeLeftDisplay = document.getElementById("time-left");
let timeLeft = 60;
timeLeftDisplay.innerHTML = timeLeft;

console.log(squares);

let hitPosition = null;

for(let i = 0; i< squares.length; i++)
{
    squares[i].addEventListener("click", ()=>{
        
        if( hitPosition == squares[i].id )
        {
            result++;
            scoreboard.innerHTML = result;
            hitPosition = null;
        }

    })
}

function randomSquare()
{
    for(let i = 0; i< squares.length; i++)
    {
        squares[i].classList.remove("mole");
    }

    let i = Math.floor(Math.random() * 9);
    let currentSquare = squares[i];
    currentSquare.classList.add("mole");

    hitPosition = currentSquare.id;
}

function moveMole()
{
    let timerId = null;
    timerId = setInterval( randomSquare, 1000 );
}

moveMole();

function countDown()
{
    timeLeft--;
    timeLeftDisplay.innerHTML = timeLeft;
    if(timeLeft == 0)
    {
        alert("Game Over !! Your Score : "+result);
        timeLeft = 60;
        result = 0;
    }
}

setInterval( countDown , 1000);


