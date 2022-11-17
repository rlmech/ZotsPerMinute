const progressBar = document.getElementById("progressFilled");

changeProgress(50);

let correctCounter = 0;
let incorrectCounter = 0;
let wordsLeft = 0;

function changeProgress(progress){
    progressBar.style.height = `${progress}%`;
}

changeProgress(500);
