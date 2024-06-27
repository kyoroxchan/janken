const game = () => {
    let playerNum = 0;
    let computerNum = 0;

    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function () {
                this.style.animation = "";
            });
        });

        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function () {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                const winner = document.querySelector(".winner");
                winner.textContent = "じゃんけん"

                setTimeout(() => {
                    if (this.textContent === "グー") {
                        playerHand.src = `./images/rock.png`;
                        playerChoice = "rock";
                    } else if (this.textContent === "パー") {
                        playerHand.src = `./images/paper.png`;
                        playerChoice = "paper";
                    } else {
                        playerHand.src = `./images/scissors.png`;
                        playerChoice = "scissors";
                    }
                    computerHand.src = `./images/${computerChoice}.png`;
                    console.log(`./ images / ${this.textContent}.png`);
                    console.log(`./ images / ${computerChoice}.png`);
                    compareHands(playerChoice, computerChoice);
                }, 1000);

                playerHand.style.animation = "shakePlayer 1s ease";
                computerHand.style.animation = "shakeComputer 1s ease";

            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = playerNum;
        computerScore.textContent = computerNum;
    }

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner");

        if (playerChoice === computerChoice) {
            winner.textContent = "あいこ"
            return;
        }
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "勝ち"
                playerNum++;
                updateScore();
                return;
            } else {
                winner.textContent = "負け"
                computerNum++;
                updateScore();
                return;
            }
        }
        if (playerChoice === "paper") {
            if (computerChoice === "rock") {
                winner.textContent = "勝ち"
                playerNum++;
                updateScore();
                return;
            } else {
                winner.textContent = "負け"
                computerNum++;
                updateScore();
                return;
            }
        }
        if (playerChoice === "scissors") {
            if (computerChoice === "paper") {
                winner.textContent = "勝ち"
                playerNum++;
                updateScore();
                return;
            } else {
                winner.textContent = "負け"
                computerNum++;
                updateScore();
                return;
            }
        }

    }


    startGame();
    playMatch();
};

game();