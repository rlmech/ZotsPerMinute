const originalMode = document.getElementById("originalMode");
const zotsMode = document.getElementById("zotsMode");
const customMode = document.getElementById("customMode");

const originalScreen = document.getElementById("originalScreen");
const zotsScreen = document.getElementById("zotsScreen");
const customScreen = document.getElementById("customScreen");

const originalText = document.getElementById("originalScreenText");
const zotsText = document.getElementById("zotsScreenText");
const customText = document.getElementById("customScreenText");

originalScreen.style.display = "block";
zotsScreen.style.display = "none";
customScreen.style.display = "none";

let currentScreen = originalScreen;
let currentMode = originalMode;
let currentText = originalText;
changeScreens(currentScreen, currentMode);

originalMode.addEventListener("click", clickedOriginal => {
    changeScreens(originalScreen, originalMode, originalText);
});

zotsMode.addEventListener("click", clickedZots => {
    changeScreens(zotsScreen, zotsMode, zotsText);
});

customMode.addEventListener("click", clickedCustom => {
    changeScreens(customScreen, customMode, customText);
});

function changeScreens(screen, mode, textBox){
    currentScreen.style.display = "none";
    screen.style.display = "block";

    currentMode.className = "tab";
    mode.className = "activeTab";

    currentText = textBox;
    currentScreen = screen;
    currentMode = mode;
};

const promptButton = document.getElementById("promptButton");

let dummyText = "I really like cool things";
let parsedText = dummyText.split('');

promptButton.addEventListener("click", event => {
    console.log("hello");
    switch (currentScreen) {
        case originalScreen:
            originalText.textContent = dummyText;
            break;
        case zotsScreen:
            zotsText.textContent = dummyText;
            break;
        case customScreen:
            customText.textContent = dummyText;
            break;
    };
});

// const originalTextInput = document.getElementsByClassName("originalTextInput");
// const zotsTextInput = document.getElementsByClassName("zotsTextInput");
// const customTextInput = document.getElementsByClassName("customTextInput");

// const textToType = document.getElementsByClassName("textToType");

// let counter = 0;

// document.querySelector("originalTextInput").

// textInput.addEventListener("keyup", event => {
//     if ( counter >= 0 ){
//         if ( counter >= 1 && event.key === "Backspace" ){
//             document.querySelector(".originalTextInput > :last-child").remove();
//             counter -= 1;
//         }
//         if ( event.key == parsedText[counter] ){
//             var tag = document.createElement("p");
//             tag.style.color = green;
//             tag.appendChild(event.key);
//             currentText.appendChild(tag);
//             counter += 1;
//         }
//     }
// });