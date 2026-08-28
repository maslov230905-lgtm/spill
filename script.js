let score1 = 0;
let score2 = 0;

function plus1() {
    score1 = score1 + 1;
    document.getElementById("score1").innerHTML = score1;
}

function minus1() {
    score1 = score1 - 1;
    document.getElementById("score1").innerHTML = score1;
}

function reset1() {
    score1 = 0;
    document.getElementById("score1").innerHTML = score1;
}


function plus2() {
    score2 = score2 + 1;
    document.getElementById("score2").innerHTML = score2;
}

function minus2() {
    score2 = score2 - 1;
    document.getElementById("score2").innerHTML = score2;
}

function reset2() {
    score2 = 0;
    document.getElementById("score2").innerHTML = score2;
}


function darkMode() {
    document.body.className = "dark";
}

function lightMode() {
    document.body.className = "";
}


function happy() {
    document.body.className = "happy";
}

function sad() {
    document.body.className = "sad";
}

function angry() {
    document.body.className = "angry";
}


let quotes = [
    "Never give up!",
    "Keep going!",
    "Believe in yourself!",
    "You can do it!"
];

function sitat() {
    let number = Math.floor(Math.random() * quotes.length);

    document.getElementById("sitat").innerHTML = quotes[number];
}