const item = [
  {
    name : "gulabJamun",
    image : "Images/gulabJamun.png",
  },
  {
    name : "iceCream",
    image : "Images/iceCream.png",
  },
  {
    name : "kachori",
    image : "Images/kachori.png",
  },
  {
    name : "sandwich",
    image : "Images/sandwich.png",
  },
  {
    name : "samosa",
    image : "Images/samosa .png",
  },
  {
    name : "jalebi",
    image : "Images/jalebi.png",
  },  
  {
    name : "gulabJamun",
    image : "Images/gulabJamun.png",
  },
  {
    name : "iceCream",
    image : "Images/iceCream.png",
  },
  {
    name : "kachori",
    image : "Images/kachori.png",
  },
  {
    name : "sandwich",
    image : "Images/sandwich.png",
  },
  {
    name : "samosa",
    image : "Images/samosa .png",
  },
  {
    name : "jalebi",
    image : "Images/jalebi.png",
  }  
]

const board = document.getElementById("grid");

let scoreDisplay = document.getElementById("score");
let score = 0;
scoreDisplay.innerHTML = score;

let choosenCard = [];
let choosenCardIDs = [];

createBoard()

function createBoard(){
  for(let i = 0; i < item.length; i++)
    {
      let card = document.createElement("img");
      card.setAttribute("src","Images/cardCover.png");
      card.setAttribute("data-id", i);
      card.addEventListener('click', flipCard);
      console.log(card,i);
      board.appendChild(card);
    }
}

function checkMatch()
{
  let id1 = choosenCardIDs[0];
  let id2 = choosenCardIDs[1];

  const cards = document.querySelectorAll("img");

  if(choosenCard[0] == choosenCard[1])
  {
    console.log("You found a match");
    score++;
    
    cards[id1].setAttribute("src","Images/blank.jpg");
    cards[id2].setAttribute("src","Images/blank.jpg");
    cards[id1].removeEventListener("click", flipCard);
    cards[id2].removeEventListener("click", flipCard);
  }
  else
  {
    cards[id1].setAttribute("src","Images/cardCover.png");
    cards[id2].setAttribute("src","Images/cardCover.png");
    alert("Not match. Try again !")
  }

  
  scoreDisplay.innerHTML = score;
  
  if(score == item.length/2)
  {
    scoreDisplay.innerHTML += " Congratulation You have found them all !"; 
  }

  choosenCard = []
  choosenCardIDs = []
}

function flipCard()
{
  let cardID = this.getAttribute("data-id");

  choosenCard.push(item[cardID].name);
  choosenCardIDs.push(cardID);

  this.setAttribute("src", item[cardID].image);
  console.log(choosenCard);

  if( choosenCard.length == 2 )
  {
    setTimeout( checkMatch, 200);
  }
}



