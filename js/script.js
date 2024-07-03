const game = () => {
    // スコア初期値
    let playerNum = 0;
    let computerNum = 0;

    // ゲーム開始時の動き
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");
        const optionsBtn = document.querySelector(".options");
        // ボタンが押された時
        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
            optionsBtn.classList.add("fadeIn");
        });
    };

    // じゃんけん処理
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
        // じゃんけんの配列
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            // じゃんけん開始
            option.addEventListener("click", function () {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                const winner = document.querySelector(".winner");
                winner.textContent = "じゃんけん"
                // 画像変換
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
                    // 画像変更
                    computerHand.src = `./images/${computerChoice}.png`;
                    console.log(`./ images / ${this.textContent}.png`);
                    console.log(`./ images / ${computerChoice}.png`);
                    compareHands(playerChoice, computerChoice);
                }, 900);
                // 手のアニメーション
                playerHand.style.animation = "shakePlayer 1s ease";
                computerHand.style.animation = "shakeComputer 1s ease";

            });
        });
    };
    // スコア更新
    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = playerNum;
        computerScore.textContent = computerNum;
    }
    // 勝敗処理
    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner");

        if (playerChoice === computerChoice) {
            winner.textContent = "あいこ"
            return;
        }
        // プレイヤーがグーの時
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
        // プレイヤーがパーの時
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
        // プレイヤーがチョキの時
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
    // 呼び出し
    startGame();
    playMatch();
};

game();