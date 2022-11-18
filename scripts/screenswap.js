// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Some early variable initialization
// const originalMode = document.getElementById("originalMode");
// const originalScreen = document.getElementById("originalScreen");
// const originalText = document.getElementById("originalScreenText");

const zotsMode = document.getElementById("zotsMode");
const zotsScreen = document.getElementById("zotsScreen");
const zotsText = document.getElementById("zotsScreenText");
// const zotsText = document.getElementById("zotsScreenText");

// const customMode = document.getElementById("customMode");
// const customScreen = document.getElementById("customScreen");
// const customText = document.getElementById("customScreenText");

const creditsMode = document.getElementById("creditsMode");
const creditsScreen = document.getElementById("creditsScreen");
const creditsText = document.getElementById("creditsScreenText");
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Default screen (when user first loads page)
// originalScreen.style.display = "block";
zotsScreen.style.display = "block";
// customScreen.style.display = "none";
creditsScreen.style.display = "none";


// let currentScreen = originalScreen;
// let currentMode = originalMode;
// let currentText = originalText;
let currentScreen = zotsScreen;
let currentMode = zotsMode;
let currentText = zotsText;
changeScreens(currentScreen, currentMode, currentText);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// On tab click, switch screens
// originalMode.addEventListener("click", clickedOriginal => {
//     changeScreens(originalScreen, originalMode, originalText);
// });

zotsMode.addEventListener("click", clickedZots => {
    changeScreens(zotsScreen, zotsMode, zotsText);
});

creditsMode.addEventListener("click", clickedCredits => {
    changeScreens(creditsScreen, creditsMode, creditsText);
});

// customMode.addEventListener("click", clickedCustom => {
//     changeScreens(customScreen, customMode, customText);
// });

function changeScreens(screen, mode, textBox){
    currentScreen.style.display = "none";
    screen.style.display = "block";

    currentMode.className = "tab";
    mode.className = "activeTab";

    currentText = textBox;
    currentScreen = screen;
    currentMode = mode;
};
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// On button click, switch values and 
const promptButton = document.getElementById("promptButton");

let dummyText = "I really like cool things";
let parsedText = dummyText.split('');

promptButton.addEventListener("click", event => {
    switch (currentScreen) {
        // case originalScreen:
        //     originalText.textContent = dummyText;
        //     break;
        case zotsScreen:
            zotsText.textContent = dummyText;
            break;
        case creditsScreen:
            break;
        // case customScreen:
        //     customText.textContent = dummyText;
        //     break;
    };
});
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~