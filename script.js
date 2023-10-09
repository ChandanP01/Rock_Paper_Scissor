const btns = document.querySelectorAll('button');
const result = document.querySelector('.result');
const btn_arr = Array.from(btns);
const choices = ["Rock", "Paper", "Scissor"];

function game(e) {
    const user_choice = e.target.innerText;
    const random_num = Math.floor(Math.random() * 3);
    const computer_choice = choices[random_num];
    let answer = "";

    // The logic of the game
    if (user_choice === computer_choice) {
        answer = "Draw!";
    } else if ((user_choice === "Rock" && computer_choice === "Scissor") ||
        (user_choice === "Paper" && computer_choice === "Rock") ||
        (user_choice === "Scissor" && computer_choice === "Paper")) {
        answer = "You Win!";
    } else {
        answer = "Computer Win!";
    }

    result.innerHTML = `<p>Your choice : ${user_choice}</p>
                        <p>Computer choice : ${computer_choice}</p>
                        <p>${answer}</p>`
}

// button click handler
btn_arr.forEach(btn => {
    btn.addEventListener('click', game)
});