let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(("#msg"));
const userScorePara = document.querySelector(("#user-score"));
const compScorePara = document.querySelector(("#comp-score"));

const genComputerChoice = () =>{
    const options = ["rock", "paper", 'scissor'];
    const randIx = Math.floor(Math.random()*3);
    return options[randIx];

}
const drawGame = (compChoice) => {
    console.log("Game Draw 🤝");
    msg.innerText = `Game Draw 🤝,Computer choice was ${compChoice}` ;
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,compChoice,userChoice) => {
    if(userWin){
        console.log("You win 🥳")
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! 🥳 ,Computer choice was ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("You Lost 😢")
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! 😢  ,Computer choice was ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    console.log('user choice = ', userChoice);
    const compChoice = genComputerChoice();
    console.log("comp choice : ", compChoice);

    if(userChoice === compChoice){
        // draw
        drawGame(compChoice);
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice ==="scissor" ? false : true;
        } else {
            userWin = compChoice ==="rock" ? false : true;
        }
        showWinner(userWin,compChoice, userChoice);
    }

}
choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});