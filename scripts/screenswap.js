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

// Let user choose the amount of zots
testChar1 = "A".charCodeAt();
testChar2 = "a".charCodeAt();
testCharDifference = testChar1 - testChar2;
let zotsArr = []; // Stores current zots

// Returns an array of zots with various cases
function makeZots(num){
    let arr = [];
    for ( i = 0; i < num; i++ ){
        arr.push( makeZot() );
    }
    return arr;
}

// Generates a zot of random cases
function makeZot(){
    let str = "";
    str += randCase("Z")
    str += randCase("O")
    str += randCase("T")
    if ( Math.floor(Math.random()*2) == 1 ){
        str += randCase("s");
    }
    return str;
}

// If capitalized letter is passed in, then 50/50 chance to return it as a lowercase letter.
function randCase(character){
    charCode = character.charCodeAt();

    // If the character is from A-Z
    if ( testChar1 < charCode && charCode < testChar1+26 ){
        // If the character code is the code of an upper case alphabetic character
        if ( testChar1 < charCode && charCode < testChar1+26 ){
            if ( Math.floor(Math.random()*2) == 0 ){
                // Return upper case
                return String.fromCharCode(charCode);
            }
            else{
                // Return lower case
                return String.fromCharCode(charCode - testCharDifference);
            }
        }
    }
    return character;
}

// On button click, create new prompt
const promptButton = document.getElementById("promptButton");
const numZotsField = document.getElementById("numZots");

promptButton.addEventListener("click", event => {
    switch (currentScreen) {
        // case originalScreen:
        //     originalText.textContent = dummyText;
        //     break;
        case zotsScreen:
            // This is an array
            const numZots = parseInt(numZotsField.value);
            numZotsField.value = "";
            if ( 1 <= numZots && numZots <= 100 ){
                zotsArr = makeZots(numZots);
                // Join function breaks array into string separated by spaces
                zotsText.textContent = zotsArr.join(' ');
            }
            break;
        case creditsScreen:
            break;
        // case customScreen:
        //     customText.textContent = dummyText;
        //     break;
    };
});

// Removes first zot from zotsArr and returns the removed value
function removeFirstZot(){
    const tempZot = zotsArr.shift()
    zotsText.textContent = zotsArr.join(' ');
    return tempZot;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~