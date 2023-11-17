const score = document.querySelector('#score');
const playTo = document.querySelector('#select');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const player1Display = document.querySelector('#p1-display');
const player2Display = document.querySelector('#p2-display');
const reset = document.querySelector('#reset');

let p1Score = 0;
let p2Score = 0;
let playToValue = 5;


playTo.addEventListener('change', (event) => {
    playToValue = playTo.value;
});

player1.addEventListener('click', () => {
    p1Score++;
    console.log(playToValue);
    player1Display.textContent = p1Score;
    if (p1Score == playToValue) {
        player1.disabled = true;
        player2.disabled = true;
        player1Display.classList.toggle('winner');
        player2Display.classList.toggle('loser');
    }
});

player2.addEventListener('click', () => {
    p2Score++;
    player2Display.textContent = p2Score;
    if (p2Score == playToValue) {
        player1.disabled = true;
        player2.disabled = true;
        player1Display.classList.toggle('loser');
        player2Display.classList.toggle('winner');
    }
});

reset.addEventListener('click', () => {
    p1Score = 0;
    p2Score = 0;

    if (player1.disabled === true && player2.disabled === true) {
        player1.disabled = false;
        player2.disabled = false;
        player1Display.classList.remove('winner', 'loser');
        player2Display.classList.remove('winner', 'loser');
    }

    player1Display.textContent = p1Score;
    player2Display.textContent = p2Score;
});

