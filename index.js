// index.js

let score1 = 0;
let score2 = 0;
let lastScorer = "";

// 1. Point to the specific HTML element where you want to show the score
let scoreEl = document.getElementById("score-el");
let scoreEl2 = document.getElementById("score-el2");


function add1() {
    score1 = score1 + 1; // Increase variable value

    // 2. Change the text content of that HTML element to the new score
    scoreEl.textContent = score1;
    // You can keep the console.log for debugging, it's a good practice!
    lastScorer = "score1";

}

function add2() {
    score1 = score1 + 2;
    scoreEl.textContent = score1;
    lastScorer = "score1";


}

function add3() {
    score1 = score1 + 3;
    scoreEl.textContent = score1;
    lastScorer = "score1";

}


function add4() {
    score2 = score2 + 1; // Increase variable value

    // 2. Change the text content of that HTML element to the new score
    scoreEl2.textContent = score2;
    // You can keep the console.log for debugging, it's a good practice!
    lastScorer = "score2";

}

function add5() {
    score2 = score2 + 2;
    scoreEl2.textContent = score2;
    lastScorer = "score2";

}

function add6() {
    score2 = score2 + 3;
    scoreEl2.textContent = score2;
    lastScorer = "score2";


}

function reset() {
    scoreEl.textContent = 0
    scoreEl2.textContent = 0

    score1 = 0
    score2 = 0

}

function universalSubstractfunction() {
    if (lastScorer === "score1") {
        if (score1 > 0) {
            score1 -= 1;
            scoreEl.textContent = score1;
        }

    }

    else if (lastScorer === "score2") {
        if (score2 > 0) {
            score2 -= 1
            scoreEl2.textContent = score2;

        }
    }
}