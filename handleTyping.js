const progressBar = document.getElementById("progressFilled");

changeProgress(10);

function changeProgress(progress){
    progressBar.style.height = `${progress}%`;
}