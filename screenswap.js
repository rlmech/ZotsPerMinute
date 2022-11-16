const originalMode = document.getElementById("originalMode");
const zotsMode = document.getElementById("zotsMode");
const customMode = document.getElementById("customMode");

const originalScreen = document.getElementById("originalScreen");
const zotsScreen = document.getElementById("zotsScreen");
const customScreen = document.getElementById("customScreen");

originalScreen.style.display = "block";
zotsScreen.style.display = "none";
customScreen.style.display = "none";

let currentScreen = originalScreen;
let currentMode = originalMode;
changeScreens(currentScreen, currentMode);

originalMode.addEventListener("click", clickedOriginal => {
    changeScreens(originalScreen, originalMode);
});

zotsMode.addEventListener("click", clickedZots => {
    changeScreens(zotsScreen, zotsMode);
});

customMode.addEventListener("click", clickedCustom => {
    changeScreens(customScreen, customMode);
});

function changeScreens(screen, mode){
    currentScreen.style.display = "none";
    screen.style.display = "block";

    currentMode.className = "tab";
    mode.className = "activeTab";

    currentScreen = screen;
    currentMode = mode;
};